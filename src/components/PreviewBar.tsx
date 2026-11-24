import { writePreviewParams } from "../preview/preview";
import type { PreviewOverrides } from "../types";

type Props = {
  preview: PreviewOverrides;
};

export function PreviewBar({ preview }: Props) {
  if (!preview.enabled) return null;

  const apply = (patch: Partial<Omit<PreviewOverrides, "enabled">>) => {
    const next = writePreviewParams(window.location.search, {
      at: preview.at,
      main: preview.main,
      dishes: preview.dishes,
      demoSchedule: preview.demoSchedule,
      ...patch,
    });
    const url = `${next}${window.location.hash || "#/"}`;
    window.history.replaceState(null, "", url);
    window.dispatchEvent(new Event("previewchange"));
  };

  return (
    <div className="preview-bar" role="status">
      <strong>Режим preview — настоящие даты не меняются</strong>
      <label>
        Время (Warsaw)
        <input
          type="datetime-local"
          step={1}
          value={preview.at ?? ""}
          onChange={(event) =>
            apply({ at: event.target.value ? event.target.value : null })
          }
        />
      </label>
      <div className="preview-actions">
        <button type="button" onClick={() => apply({ main: "closed" })}>
          Главный закрыт
        </button>
        <button type="button" onClick={() => apply({ main: "open" })}>
          Главный открыт
        </button>
        <button type="button" onClick={() => apply({ dishes: "none" })}>
          Блюда закрыты
        </button>
        <button type="button" onClick={() => apply({ dishes: "all" })}>
          Блюда открыты
        </button>
        <button
          type="button"
          onClick={() => apply({ demoSchedule: !preview.demoSchedule })}
        >
          {preview.demoSchedule ? "Скрыть демо-расписание" : "Демо-расписание"}
        </button>
      </div>
    </div>
  );
}
