import { wallStringToUtcMs } from "./warsaw";

export function isMomentReached(
  nowMs: number,
  unlockAt: string | null,
  timeZone: string,
): boolean {
  if (!unlockAt) return false;
  return nowMs >= wallStringToUtcMs(unlockAt, timeZone);
}

export function remainingMs(
  nowMs: number,
  unlockAt: string | null,
  timeZone: string,
): number {
  if (!unlockAt) return 0;
  return Math.max(0, wallStringToUtcMs(unlockAt, timeZone) - nowMs);
}

export function formatHms(ms: number): string {
  const totalSeconds = Math.max(0, Math.ceil(ms / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

export function isScheduleConfigured(
  items: { startsAt: string | null }[],
): boolean {
  return items.some((item) => Boolean(item.startsAt));
}

export function getCurrentScheduledItem<T extends { startsAt: string | null }>(
  items: T[],
  nowMs: number,
  timeZone: string,
): T | null {
  const started = items
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => isMomentReached(nowMs, item.startsAt, timeZone))
    .sort((a, b) => {
      const aMs = wallStringToUtcMs(a.item.startsAt as string, timeZone);
      const bMs = wallStringToUtcMs(b.item.startsAt as string, timeZone);
      if (aMs !== bMs) return aMs - bMs;
      return a.index - b.index;
    });

  return started.at(-1)?.item ?? null;
}
