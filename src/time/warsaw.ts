export type WallParts = {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
};

const WALL_RE =
  /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::(\d{2}))?$/;

export function parseWallTime(value: string): WallParts {
  const match = WALL_RE.exec(value.trim());
  if (!match) {
    throw new Error(`Invalid wall time "${value}". Use YYYY-MM-DDTHH:mm:ss`);
  }
  return {
    year: Number(match[1]),
    month: Number(match[2]),
    day: Number(match[3]),
    hour: Number(match[4]),
    minute: Number(match[5]),
    second: Number(match[6] ?? 0),
  };
}

function getFormatter(timeZone: string): Intl.DateTimeFormat {
  return new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  });
}

export function getZoneOffsetMs(utcMs: number, timeZone: string): number {
  const parts = getFormatter(timeZone).formatToParts(new Date(utcMs));
  const read = (type: Intl.DateTimeFormatPartTypes) =>
    Number(parts.find((part) => part.type === type)?.value);
  const asUtc = Date.UTC(
    read("year"),
    read("month") - 1,
    read("day"),
    read("hour"),
    read("minute"),
    read("second"),
  );
  return asUtc - utcMs;
}

/**
 * Convert a wall-clock time in `timeZone` to a UTC epoch.
 * Recomputes the offset at the guessed instant so DST transitions are handled.
 */
export function wallTimeToUtcMs(wall: WallParts, timeZone: string): number {
  const guess = Date.UTC(
    wall.year,
    wall.month - 1,
    wall.day,
    wall.hour,
    wall.minute,
    wall.second,
  );
  const first = guess - getZoneOffsetMs(guess, timeZone);
  return guess - getZoneOffsetMs(first, timeZone);
}

export function wallStringToUtcMs(value: string, timeZone: string): number {
  return wallTimeToUtcMs(parseWallTime(value), timeZone);
}
