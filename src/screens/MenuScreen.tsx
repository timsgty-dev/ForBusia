import { appConfig } from "../config/app";
import { busiSection } from "../config/busi";
import { DishSticker } from "../components/DishSticker";
import { hrefFor } from "../hooks/useRoute";
import { assetUrl } from "../lib/assets";
import type { Dish } from "../types";

type Props = {
  dishes: Array<{ dish: Dish; unlocked: boolean }>;
  busiUnlocked: boolean;
};

export function MenuScreen({ dishes, busiUnlocked }: Props) {
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
              <span className="dish-art">
                {dish.image ? (
                  <img
                    className="dish-thumb"
                    src={assetUrl(dish.image) ?? undefined}
                    alt=""
                  />
                ) : (
                  <span className="dish-thumb dish-thumb-placeholder" aria-hidden="true" />
                )}
                <DishSticker dishId={dish.id} />
              </span>
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
        {busiUnlocked ? (
          <a className="dish-card busi-card" href={hrefFor({ name: "busi" })}>
            <span className="busi-mark" aria-hidden="true">🐾</span>
            <strong>{busiSection.title}</strong>
          </a>
        ) : (
          <button className="dish-card busi-card" type="button" disabled>
            <span className="lock" aria-hidden="true">🔒</span>
            <strong>{busiSection.title}</strong>
          </button>
        )}
      </div>
    </section>
  );
}
