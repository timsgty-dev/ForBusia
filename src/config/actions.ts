import type { ScheduledAction } from "../types";

/**
 * Current-action cards, in order.
 * startsAt stays null until the owner provides real Warsaw times.
 * The UI must not treat this list as a live schedule until at least
 * one startsAt is filled.
 */
export const actionSchedule: ScheduledAction[] = [
  {
    id: "zip-zip",
    title: "zip-zip",
    description: "",
    image: null,
    startsAt: null,
  },
  {
    id: "study",
    title: "учиться",
    description: "",
    image: null,
    startsAt: null,
  },
  {
    id: "shop",
    title: "в магазине",
    description: "",
    image: null,
    startsAt: null,
  },
  {
    id: "prepare",
    title: "готовиться",
    description: "",
    image: null,
    startsAt: null,
  },
  {
    id: "waiting-schedule",
    title: "ждет расписание позже",
    description: "",
    image: null,
    startsAt: null,
  },
];
