import { appConfig } from "../config/app";
import { hrefFor } from "../hooks/useRoute";
import type { ScheduledAction } from "../types";
import { wallStringToUtcMs } from "../time/warsaw";

type Props = {
  action: ScheduledAction | null;
  nextAction: ScheduledAction | null;
  scheduleReady: boolean;
  isDemo: boolean;
};

const illustrations: Record<string, string> = {
  sleep: "🛏️",
  study: "📖",
  shop: "🍎",
  prepare: "🧑‍🍳",
  waiting: "🎀",
};

function formatSchedulePoint(value: string): string {
  return new Intl.DateTimeFormat("ru-RU", {
    timeZone: appConfig.timeZone,
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(wallStringToUtcMs(value, appConfig.timeZone));
}

function formatPeriod(
  action: ScheduledAction,
  nextAction: ScheduledAction | null,
): string {
  if (!action.startsAt) return "";
  const start = formatSchedulePoint(action.startsAt);
  if (!nextAction?.startsAt) return `${start} · дальше`;
  const end = formatSchedulePoint(nextAction.startsAt);
  return `${start} — ${end}`;
}

export function ActionsScreen({
  action,
  nextAction,
  scheduleReady,
  isDemo,
}: Props) {
  return (
    <section className="screen actions-screen" aria-labelledby="now-title">
      <a className="back" href={hrefFor({ name: "home" })}>
        Назад
      </a>
      <p className="actions-eyebrow">для тебя</p>
      <h1 id="now-title" className="lead actions-heading">
        А где Муся?
      </h1>
      {!scheduleReady || !action ? (
        <article className="card actions-card">
          <div className="actions-art" aria-hidden="true">
            💤
          </div>
          <p className="muted">{appConfig.scheduleLaterLabel}</p>
        </article>
      ) : (
        <article className="card actions-card">
          {isDemo ? <p className="muted">Демо в preview</p> : null}
          <div className="actions-art" aria-hidden="true">
            {illustrations[action.id] ?? "🐈"}
          </div>
          <h2 className="actions-title">{action.title}</h2>
          <p className="actions-description">{action.description}</p>
          <p className="actions-period">{formatPeriod(action, nextAction)}</p>
        </article>
      )}
      <p className="actions-note">А потом Муся снова появится 💗</p>
    </section>
  );
}
