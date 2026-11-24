import { useMemo, useState } from "react";
import { appConfig } from "../config/app";
import { DishSticker } from "../components/DishSticker";
import { hrefFor } from "../hooks/useRoute";
import { SoftImage } from "../components/SoftImage";
import {
  getCheckedIngredientIds,
  setIngredientChecked,
} from "../storage/checklist";
import type { Dish } from "../types";

type Props = {
  dish: Dish;
  unlocked: boolean;
};

export function RecipeScreen({ dish, unlocked }: Props) {
  const hasRecipe = dish.ingredients.length > 0 || dish.steps.length > 0;
  const [stepIndex, setStepIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const [checked, setChecked] = useState(() =>
    getCheckedIngredientIds(dish.id),
  );

  const currentStep = started ? dish.steps[stepIndex] : undefined;
  const isLast = stepIndex >= dish.steps.length - 1;
  const checkedSet = useMemo(() => new Set(checked), [checked]);

  if (!unlocked) {
    return (
      <section className="screen">
        <a className="back" href={hrefFor({ name: "menu" })}>
          Назад
        </a>
        <article className="card" style={{ marginTop: 24 }}>
          <div className="lock" aria-hidden="true">
            🔒
          </div>
          <p>{appConfig.lockedDishLabel}</p>
        </article>
      </section>
    );
  }

  return (
    <section className="screen" aria-labelledby="recipe-title">
      <a className="back" href={hrefFor({ name: "menu" })}>
        Назад
      </a>
      <h1 id="recipe-title" className="lead" style={{ marginTop: 24 }}>
        {dish.title}
      </h1>
      <p className="recipe-yield">{dish.servingsLabel}</p>
      <div className="recipe-art">
        <SoftImage src={dish.image} alt={dish.title} />
        <DishSticker dishId={dish.id} />
      </div>
      <p className="photo-credit">
        Фото: <a href={dish.imageCreditUrl} target="_blank" rel="noreferrer">{dish.imageCredit}</a>
        {" · "}{dish.imageLicense}
      </p>

      {!hasRecipe ? (
        <article className="card" style={{ marginTop: 16 }}>
          <p className="muted">{appConfig.recipeLaterLabel}</p>
        </article>
      ) : (
        <>
          {dish.ingredients.length > 0 ? (
            <ul className="ingredients">
              {dish.ingredients.map((item) => (
                <li key={item.id}>
                  <input
                    id={`${dish.id}-${item.id}`}
                    type="checkbox"
                    checked={checkedSet.has(item.id)}
                    onChange={(event) => {
                      setChecked(
                        setIngredientChecked(
                          dish.id,
                          item.id,
                          event.target.checked,
                        ),
                      );
                    }}
                  />
                  <label htmlFor={`${dish.id}-${item.id}`}>
                    {item.label}
                    {item.amount ? ` — ${item.amount}` : ""}
                  </label>
                </li>
              ))}
            </ul>
          ) : null}

          {!started ? (
            <button
              className="step-btn start-recipe-btn"
              type="button"
              onClick={() => setStarted(true)}
            >
              Начать
            </button>
          ) : null}

          {currentStep ? (
            <article className="card steps">
              <p className="muted">
                Шаг {stepIndex + 1} из {dish.steps.length}
              </p>
              <h2>{currentStep.title || `Шаг ${stepIndex + 1}`}</h2>
              <p>{currentStep.body}</p>
              {isLast ? (
                <p className="muted">Готово. Можно звать к столу.</p>
              ) : (
                <button
                  className="step-btn"
                  type="button"
                  onClick={() => setStepIndex((value) => value + 1)}
                >
                  Дальше
                </button>
              )}
            </article>
          ) : null}
          <p className="recipe-credit">
            Рецепт адаптирован по{" "}
            <a href={dish.recipeSourceUrl} target="_blank" rel="noreferrer">
              {dish.recipeSourceLabel}
            </a>
          </p>
        </>
      )}
    </section>
  );
}
