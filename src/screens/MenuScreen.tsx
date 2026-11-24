import { appConfig } from "../config/app";
import { hrefFor } from "../hooks/useRoute";
import { assetUrl } from "../lib/assets";
import type { Dish } from "../types";

type Props = {
  dishes: Array<{ dish: Dish; unlocked: boolean }>;
};

export function MenuScreen({ dishes }: Props) {
  return (
    <section className="screen" aria-labelledby="menu-title">
      <a className="back" href={hrefFor({ name: "home" })}>
        Назад
      </a>
      <h1 id="menu-title" className="lead" style={{ marginTop: 24 }}>
        {appConfig.menuTitle}
      </h1>
      <div className="menu-grid">
        {dishes.map(({ dish, unlocked }) =>
          unlocked ? (
            <a
              key={dish.id}
              className="dish-card"
              href={hrefFor({ name: "dish", id: dish.id })}
            >
              {dish.image ? (
                <img
                  className="dish-thumb"
                  src={assetUrl(dish.image) ?? undefined}
                  alt=""
                />
              ) : (
                <div className="dish-thumb" aria-hidden="true" />
              )}
              <strong>{dish.title}</strong>
            </a>
          ) : (
            <button
              key={dish.id}
              className="dish-card"
              type="button"
              disabled
              aria-label={appConfig.lockedDishLabel}
            >
              <span className="lock" aria-hidden="true">
                🔒
              </span>
              <span>{appConfig.lockedDishLabel}</span>
            </button>
          ),
        )}
      </div>
    </section>
  );
}
