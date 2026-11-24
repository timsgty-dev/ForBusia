import { appConfig } from "../config/app";
import { hrefFor } from "../hooks/useRoute";
import { SoftImage } from "../components/SoftImage";
import type { ScheduledAction } from "../types";

type Props = {
  action: ScheduledAction | null;
  scheduleReady: boolean;
  isDemo: boolean;
};

export function ActionsScreen({ action, scheduleReady, isDemo }: Props) {
  return (
    <section className="screen" aria-labelledby="now-title">
      <a className="back" href={hrefFor({ name: "home" })}>
        Назад
      </a>
      <h1 id="now-title" className="lead" style={{ marginTop: 24 }}>
        Действия сейчас
      </h1>
      {!scheduleReady || !action ? (
        <article className="card">
          <div className="bow" aria-hidden="true">
            🎀
          </div>
          <p className="muted">{appConfig.scheduleLaterLabel}</p>
        </article>
      ) : (
        <article className="card">
          {isDemo ? <p className="muted">Демо в preview</p> : null}
          <h2>{action.title}</h2>
          {action.description ? <p>{action.description}</p> : null}
          <SoftImage src={action.image} alt="" />
        </article>
      )}
    </section>
  );
}
