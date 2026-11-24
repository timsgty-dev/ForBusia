type Props = {
  dishId: string;
};

const stickers: Record<string, string> = {
  caprese: "🥗",
  tagliatelle: "🍝",
  tiramisu: "🍰",
  lemonade: "🍋",
};

export function DishSticker({ dishId }: Props) {
  return (
    <span className="dish-sticker" aria-hidden="true">
      {stickers[dishId] ?? "🍽️"}
    </span>
  );
}
