const STORAGE_VERSION = 1;
const KEY = `kotik.checklist.v${STORAGE_VERSION}`;

type ChecklistStore = {
  version: number;
  dishes: Record<string, string[]>;
};

function emptyStore(): ChecklistStore {
  return { version: STORAGE_VERSION, dishes: {} };
}

function readStore(): ChecklistStore {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return emptyStore();
    const parsed = JSON.parse(raw) as Partial<ChecklistStore>;
    if (parsed.version !== STORAGE_VERSION || typeof parsed.dishes !== "object") {
      return emptyStore();
    }
    return { version: STORAGE_VERSION, dishes: parsed.dishes ?? {} };
  } catch {
    return emptyStore();
  }
}

function writeStore(store: ChecklistStore) {
  try {
    localStorage.setItem(KEY, JSON.stringify(store));
  } catch {
    // Private mode or full storage: ignore; the UI still works for the session.
  }
}

export function getCheckedIngredientIds(dishId: string): string[] {
  return readStore().dishes[dishId] ?? [];
}

export function setIngredientChecked(
  dishId: string,
  ingredientId: string,
  checked: boolean,
): string[] {
  const store = readStore();
  const current = new Set(store.dishes[dishId] ?? []);
  if (checked) current.add(ingredientId);
  else current.delete(ingredientId);
  const next = [...current];
  store.dishes[dishId] = next;
  writeStore(store);
  return next;
}
