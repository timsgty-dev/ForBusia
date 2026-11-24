import { busiSection } from "../config/busi";
import { isMomentReached } from "./unlock";

const DAY_COUNT = 20;
const MS_PER_DAY = 24 * 60 * 60 * 1000;
const FIRST_DAILY_UNLOCK_UTC = Date.UTC(2026, 10, 26);

export type BusiDay = {
  day: number;
  unlockAt: string;
  unlocked: boolean;
};

function localDateAfterFirstUnlock(day: number): string {
  const date = new Date(FIRST_DAILY_UNLOCK_UTC + (day - 2) * MS_PER_DAY);
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const dayOfMonth = String(date.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${dayOfMonth}T00:00:00`;
}

export function getBusiDays(nowMs: number, timeZone: string): BusiDay[] {
  return Array.from({ length: DAY_COUNT }, (_, index) => {
    const day = index + 1;
    const unlockAt =
      day === 1 ? busiSection.unlockAt : localDateAfterFirstUnlock(day);
    return {
      day,
      unlockAt,
      unlocked: isMomentReached(nowMs, unlockAt, timeZone),
    };
  });
}
