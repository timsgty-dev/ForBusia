export type WallDateTime = string;

export type Ingredient = {
  id: string;
  label: string;
  amount: string;
};

export type RecipeStep = {
  id: string;
  title: string;
  body: string;
};

export type Dish = {
  id: string;
  title: string;
  unlockAt: WallDateTime | null;
  image: string | null;
  ingredients: Ingredient[];
  steps: RecipeStep[];
};

export type ScheduledAction = {
  id: string;
  title: string;
  description: string;
  image: string | null;
  startsAt: WallDateTime | null;
};

export type PreviewOverrides = {
  enabled: boolean;
  /** Wall time in the app timezone, e.g. 2026-10-24T23:59:50 */
  at: WallDateTime | null;
  main: "open" | "closed" | null;
  dishes: "all" | "none" | null;
  demoSchedule: boolean;
};
