interface Props {
  subtitle?: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionTitle({ subtitle, title, description, center = true, light = false }: Props) {
  return (
    <div className={`mb-8 sm:mb-12 ${center ? 'text-center' : ''}`}>
      {subtitle && (
        <span className={`inline-block text-xs sm:text-sm font-semibold tracking-wider uppercase mb-1.5 sm:mb-2 ${light ? 'text-blue-300' : 'text-primary'}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold leading-tight break-words ${light ? 'text-white' : 'text-dark'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-3 sm:mt-4 text-sm sm:text-lg max-w-2xl leading-relaxed break-words whitespace-normal sm:whitespace-pre-line ${center ? 'mx-auto' : ''} ${light ? 'text-gray-300' : 'text-gray-500'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
