import { hrefFor } from "../hooks/useRoute";

export function ActionsScreen() {
  return (
    <section className="screen actions-screen" aria-labelledby="now-title">
      <a className="back" href={hrefFor({ name: "home" })}>
        Назад
      </a>
      <div className="survey-hero">
        <p className="actions-eyebrow">А где Муся?</p>
        <div className="survey-art" aria-hidden="true">
          📝
        </div>
        <h1 id="now-title" className="lead actions-heading">
          Идёт анкетирование
        </h1>
        <p className="survey-description">А Муся пока ждёт тебя 💙</p>
      </div>
    </section>
  );
}
