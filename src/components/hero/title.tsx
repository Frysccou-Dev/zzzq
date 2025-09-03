interface TitleProps {
  className?: string;
}

export default function Title({ className = '' }: TitleProps) {
  return (
    <h1
      className={`font-extrabold text-white tracking-tight leading-none text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl drop-shadow-2xl ${className}`}
    >
      <div>
        <span className='italic font-light'>Endless</span> Tracks,
      </div>
      <div>
        <span className='italic font-light'>Endless</span> Vibes
      </div>
    </h1>
  );
}
