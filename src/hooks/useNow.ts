import { useEffect, useState } from "react";

export function useNow(getNowMs: () => number, intervalMs = 250): number {
  const [nowMs, setNowMs] = useState(getNowMs);

  useEffect(() => {
    const tick = () => setNowMs(getNowMs());
    tick();
    const id = window.setInterval(tick, intervalMs);

    const onWake = () => {
      if (document.visibilityState === "visible") tick();
    };

    document.addEventListener("visibilitychange", onWake);
    window.addEventListener("focus", onWake);
    window.addEventListener("pageshow", onWake);

    return () => {
      window.clearInterval(id);
      document.removeEventListener("visibilitychange", onWake);
      window.removeEventListener("focus", onWake);
      window.removeEventListener("pageshow", onWake);
    };
  }, [getNowMs, intervalMs]);

  return nowMs;
}
