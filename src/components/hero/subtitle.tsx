interface SubtitleProps {
  className?: string;
}

export default function Subtitle({ className = '' }: SubtitleProps) {
  return (
    <h2
      className={`font-bold text-white tracking-tight leading-none text-xl sm:text-2xl md:text-3xl lg:text-4xl drop-shadow-2xl ${className}`}
    >
      Curated playlists to keep your day moving
    </h2>
  );
}
