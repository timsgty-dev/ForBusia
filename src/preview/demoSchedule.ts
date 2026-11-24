import type { ScheduledAction } from "../types";

/**
 * Shown only in preview with ?schedule=demo.
 * Not mixed into real config and never used in the normal app.
 */
export const previewDemoSchedule: ScheduledAction[] = [
  {
    id: "demo-zip",
    title: "zip-zip",
    description: "Демо-карточка для проверки экрана.",
    image: null,
    startsAt: "2026-10-24T10:00:00",
  },
];
