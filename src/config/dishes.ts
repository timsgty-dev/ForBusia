import type { Dish } from "../types";

/**
 * Four dishes. Keep titles here; the UI hides them until unlockAt is set
 * and that moment has arrived in Europe/Warsaw.
 * unlockAt is intentionally null until the owner fills real times.
 * Do not invent ingredients or steps here.
 */
export const dishes: Dish[] = [
  {
    id: "caprese",
    title: "Капрезе с бальзамическим соусом",
    unlockAt: "2026-11-25T18:15:00",
    image: null,
    ingredients: [],
    steps: [],
  },
  {
    id: "tagliatelle",
    title: "Тальятелле с креветками",
    unlockAt: "2026-11-25T18:15:00",
    image: null,
    ingredients: [],
    steps: [],
  },
  {
    id: "tiramisu",
    title: "Тирамису",
    unlockAt: "2026-11-25T17:00:00",
    image: null,
    ingredients: [],
    steps: [],
  },
  {
    id: "lemonade",
    title: "Клубничный лимонад",
    unlockAt: "2026-11-25T18:00:00",
    image: null,
    ingredients: [],
    steps: [],
  },
];
