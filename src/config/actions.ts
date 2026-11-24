import type { ScheduledAction } from "../types";

/**
 * Cat status timeline, using Warsaw local time. Entries stay in order and the
 * last started entry remains active until another scheduled entry begins.
 */
export const actionSchedule: ScheduledAction[] = [
  {
    id: "sleep",
    title: "Котик спит",
    description: "Сладких снов — пусть котик набирается сил.",
    image: null,
    startsAt: "2026-11-24T08:00:00",
  },
  {
    id: "study",
    title: "Котик учится",
    description: "Котик занят учёбой и скоро вернётся.",
    image: null,
    startsAt: "2026-11-25T06:00:00",
  },
  {
    id: "shop",
    title: "Котик в магазине",
    description: "Котик выбирает всё нужное для вечера.",
    image: null,
    startsAt: "2026-11-25T14:00:00",
  },
  {
    id: "prepare",
    title: "Котик готовится",
    description: "Котик готовит для тебя кое-что особенное.",
    image: null,
    startsAt: "2026-11-25T15:00:00",
  },
  {
    id: "waiting",
    title: "Котик ждёт",
    description: "Котик уже ждёт встречи с тобой 💗",
    image: null,
    startsAt: "2026-11-25T18:00:00",
  },
];
