/**
 * Owner-editable app settings.
 * Wall times are local to `timeZone` (not the visitor's browser timezone).
 * Format: YYYY-MM-DDTHH:mm:ss
 */
export const appConfig = {
  timeZone: "Europe/Warsaw",
  /** Opens the menu from the home screen. */
  mainUnlockAt: "2026-11-25T00:00:00",
  homeEyebrow: "для тебя",
  homeLead: "Что же нас ждёт?",
  startLabel: "Начать",
  alreadyOpenLabel: "Уже открыто",
  actionsPeekLabel: "А где муся?",
  actionsPeekAria: "Действия сейчас",
  menuTitle: "Сегодня в меню",
  lockedDishLabel: "Откроется позже",
  recipeLaterLabel: "Рецепт будет добавлен позже",
  scheduleLaterLabel: "Расписание будет добавлено позже",
} as const;
