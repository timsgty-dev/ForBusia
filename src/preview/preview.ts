import type { PreviewOverrides } from "../types";

const PREVIEW_QUERY = "preview";

/**
 * Preview is for the owner. It is available only in the Vite dev server,
 * and only with ?preview=1. Production builds ignore the flag so a shared
 * link cannot turn it on by accident.
 */
export function isPreviewAllowed(): boolean {
  return import.meta.env.DEV;
}

export function readPreviewFromLocation(
  search: string,
  allowed = isPreviewAllowed(),
): PreviewOverrides {
  const disabled: PreviewOverrides = {
    enabled: false,
    at: null,
    main: null,
    dishes: null,
    demoSchedule: false,
  };

  if (!allowed) return disabled;

  const params = new URLSearchParams(search);
  if (params.get(PREVIEW_QUERY) !== "1") return disabled;

  const mainRaw = params.get("main");
  const dishesRaw = params.get("dishes");

  return {
    enabled: true,
    at: params.get("at"),
    main: mainRaw === "open" || mainRaw === "closed" ? mainRaw : null,
    dishes: dishesRaw === "all" || dishesRaw === "none" ? dishesRaw : null,
    demoSchedule: params.get("schedule") === "demo",
  };
}

export function writePreviewParams(
  currentSearch: string,
  patch: Partial<Omit<PreviewOverrides, "enabled">>,
): string {
  const params = new URLSearchParams(currentSearch);
  params.set(PREVIEW_QUERY, "1");

  const nextAt = patch.at === undefined ? params.get("at") : patch.at;
  const nextMain = patch.main === undefined ? params.get("main") : patch.main;
  const nextDishes =
    patch.dishes === undefined ? params.get("dishes") : patch.dishes;
  const nextSchedule =
    patch.demoSchedule === undefined
      ? params.get("schedule")
      : patch.demoSchedule
        ? "demo"
        : null;

  setOrDelete(params, "at", nextAt);
  setOrDelete(params, "main", nextMain);
  setOrDelete(params, "dishes", nextDishes);
  setOrDelete(params, "schedule", nextSchedule);

  const text = params.toString();
  return text ? `?${text}` : "?preview=1";
}

function setOrDelete(
  params: URLSearchParams,
  key: string,
  value: string | null | undefined,
) {
  if (!value) params.delete(key);
  else params.set(key, value);
}

export function resolveNowMs(
  preview: PreviewOverrides,
  timeZone: string,
  wallToUtc: (value: string, timeZone: string) => number,
  systemNowMs: number,
): number {
  if (preview.enabled && preview.at) {
    try {
      return wallToUtc(preview.at, timeZone);
    } catch {
      return systemNowMs;
    }
  }
  return systemNowMs;
}
