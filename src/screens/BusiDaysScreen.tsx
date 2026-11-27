import { busiSection } from "../config/busi";
import { hrefFor } from "../hooks/useRoute";
import { getBusiDays } from "../time/busiDays";
import { appConfig } from "../config/app";

type Props = {
  nowMs: number;
};

export function BusiDaysScreen({ nowMs }: Props) {
  const days = getBusiDays(nowMs, appConfig.timeZone);

  return (
    <section className="screen busi-days-screen" aria-labelledby="busi-days-title">
      <a className="back" href={hrefFor({ name: "home" })}>
        Назад
      </a>
      <h1 id="busi-days-title" className="lead busi-days-title">
        {busiSection.daysTitle}
      </h1>
      <div className="busi-days-list">
        {days.map(({ day, unlocked }) => (
          <button
            key={day}
            className={`busi-day-button${unlocked ? " is-unlocked" : ""}`}
            type="button"
            disabled
            aria-label={unlocked ? `День ${day}` : "Скоро"}
          >
            {unlocked ? `День ${day}` : "???"}
          </button>
        ))}
      </div>
    </section>
  );
}
