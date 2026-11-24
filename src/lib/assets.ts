export function assetUrl(path: string | null | undefined): string | null {
  if (!path) return null;
  const base = import.meta.env.BASE_URL;
  const trimmed = path.replace(/^\//, "");
  return `${base}${trimmed}`;
}
