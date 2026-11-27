import { appConfig } from "../config/app";
import { busiSection } from "../config/busi";
import { hrefFor, navigate } from "../hooks/useRoute";

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
        <button className="countdown-btn" type="button" disabled>
          <small>
            {isOpen
              ? appConfig.alreadyOpenLabel
              : countdown === "00:00:00"
                ? "Ещё закрыто"
                : "Откроется через"}
          </small>
          <strong aria-live="polite">
            {isOpen
              ? appConfig.startLabel
              : countdown === "00:00:00"
                ? "—"
                : countdown}
          </strong>
        </button>
        {busiSection.enabled ? (
          <button
            className="busi-upgrade-btn home-upgrade-btn"
            type="button"
            onClick={() => navigate({ name: "busiDays" })}
          >
            {busiSection.upgradeLabel}
          </button>
        ) : null}
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
