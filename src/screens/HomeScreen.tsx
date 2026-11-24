import { appConfig } from "../config/app";
import { hrefFor } from "../hooks/useRoute";

type Props = {
  isOpen: boolean;
  countdown: string;
};

export function HomeScreen({ isOpen, countdown }: Props) {
  return (
    <section className="screen" aria-labelledby="home-lead">
      <p className="muted" style={{ marginTop: 48, letterSpacing: "0.18em" }}>
        {appConfig.homeEyebrow}
      </p>
      <div className="home-main">
        <h1 id="home-lead" className="lead">
          {appConfig.homeLead}
        </h1>
        {isOpen ? (
          <a className="countdown-btn" href={hrefFor({ name: "menu" })}>
            <small>{appConfig.alreadyOpenLabel}</small>
            <strong>{appConfig.startLabel}</strong>
          </a>
        ) : (
          <button className="countdown-btn" type="button" disabled>
            <small>
              {countdown === "00:00:00" ? "Ещё закрыто" : "Откроется через"}
            </small>
            <strong aria-live="polite">
              {countdown === "00:00:00" ? "—" : countdown}
            </strong>
          </button>
        )}
      </div>
      <div className="peek-row">
        <a
          className="peek-btn"
          href={hrefFor({ name: "now" })}
          aria-label={appConfig.actionsPeekAria}
        >
          {appConfig.actionsPeekLabel}
        </a>
      </div>
    </section>
  );
}
