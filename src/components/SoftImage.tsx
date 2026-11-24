import { assetUrl } from "../lib/assets";

type Props = {
  src: string | null;
  alt: string;
  className?: string;
  placeholder?: string;
};

export function SoftImage({
  src,
  alt,
  className = "media",
  placeholder = "Скоро здесь будет картинка",
}: Props) {
  const url = assetUrl(src);
  if (!url) {
    return (
      <div className={className} role="img" aria-label={placeholder}>
        ♡
      </div>
    );
  }
  return (
    <div className={className}>
      <img src={url} alt={alt} />
    </div>
  );
}
