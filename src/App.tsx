import { useCallback, useEffect, useMemo, useState } from "react";
import { PreviewBar } from "./components/PreviewBar";
import { actionSchedule } from "./config/actions";
import { appConfig } from "./config/app";
import { dishes } from "./config/dishes";
import { useNow } from "./hooks/useNow";
import { navigate, useRoute } from "./hooks/useRoute";
import { previewDemoSchedule } from "./preview/demoSchedule";
import { readPreviewFromLocation, resolveNowMs } from "./preview/preview";
import { ActionsScreen } from "./screens/ActionsScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { MenuScreen } from "./screens/MenuScreen";
import { RecipeScreen } from "./screens/RecipeScreen";
import {
  formatHms,
  getCurrentScheduledItem,
  isMomentReached,
  isScheduleConfigured,
  remainingMs,
} from "./time/unlock";
import { wallStringToUtcMs } from "./time/warsaw";

function readPreview() {
  return readPreviewFromLocation(window.location.search);
}

export default function App() {
  const route = useRoute();
  const [preview, setPreview] = useState(readPreview);

  useEffect(() => {
    const sync = () => setPreview(readPreview());
    window.addEventListener("previewchange", sync);
    window.addEventListener("popstate", sync);
    return () => {
      window.removeEventListener("previewchange", sync);
      window.removeEventListener("popstate", sync);
    };
  }, []);

  const getNowMs = useCallback(
    () =>
      resolveNowMs(
        preview,
        appConfig.timeZone,
        wallStringToUtcMs,
        Date.now(),
      ),
    [preview],
  );

  const nowMs = useNow(getNowMs);

  const mainOpen = useMemo(() => {
    if (preview.enabled && preview.main === "open") return true;
    if (preview.enabled && preview.main === "closed") return false;
    return isMomentReached(nowMs, appConfig.mainUnlockAt, appConfig.timeZone);
  }, [nowMs, preview]);

  const countdown = formatHms(
    remainingMs(nowMs, appConfig.mainUnlockAt, appConfig.timeZone),
  );

  const dishStates = useMemo(
    () =>
      dishes.map((dish) => {
        let unlocked = isMomentReached(
          nowMs,
          dish.unlockAt,
          appConfig.timeZone,
        );
        if (preview.enabled && preview.dishes === "all") unlocked = true;
        if (preview.enabled && preview.dishes === "none") unlocked = false;
        return { dish, unlocked };
      }),
    [nowMs, preview],
  );

  const liveScheduleReady = isScheduleConfigured(actionSchedule);
  const usingDemo = preview.enabled && preview.demoSchedule;
  const schedule = usingDemo ? previewDemoSchedule : actionSchedule;
  const scheduleReady = usingDemo || liveScheduleReady;
  const currentAction = scheduleReady
    ? getCurrentScheduledItem(schedule, nowMs, appConfig.timeZone)
    : null;
  const nextAction = currentAction
    ? schedule[schedule.indexOf(currentAction) + 1] ?? null
    : null;

  useEffect(() => {
    if (route.name === "menu" && !mainOpen) {
      navigate({ name: "home" });
    }
    if (route.name === "dish") {
      const found = dishStates.find((item) => item.dish.id === route.id);
      if (!mainOpen || !found) {
        navigate({ name: "home" });
      }
    }
  }, [route, mainOpen, dishStates]);

  let screen = <HomeScreen isOpen={mainOpen} countdown={countdown} />;

  if (route.name === "now") {
    screen = (
      <ActionsScreen
        action={currentAction}
        nextAction={nextAction}
        scheduleReady={scheduleReady}
        isDemo={usingDemo}
      />
    );
  } else if (route.name === "menu" && mainOpen) {
    screen = <MenuScreen dishes={dishStates} />;
  } else if (route.name === "dish") {
    const found = dishStates.find((item) => item.dish.id === route.id);
    if (found && mainOpen) {
      screen = <RecipeScreen dish={found.dish} unlocked={found.unlocked} />;
    }
  }

  return (
    <div className="app-shell">
      <span className="decor decor-cloud" aria-hidden="true">
        ☁️
      </span>
      <span className="decor decor-heart" aria-hidden="true">
        💗
      </span>
      <PreviewBar preview={preview} />
      {screen}
    </div>
  );
}
