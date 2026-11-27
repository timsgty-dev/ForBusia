import { busiSection } from "../config/busi";
import { hrefFor } from "../hooks/useRoute";

export function BusiScreen() {
  return (
    <section className="screen busi-screen" aria-labelledby="busi-title">
      <a className="back" href={hrefFor({ name: "menu" })}>
        Назад
      </a>
      <p className="busi-eyebrow">для тебя</p>
      <h1 id="busi-title" className="lead busi-title">
        {busiSection.title}
      </h1>
      <p className="busi-message">{busiSection.introMessage}</p>
    </section>
  );
}
