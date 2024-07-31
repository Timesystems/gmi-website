import clsx from 'clsx';

/**
 * Spaced section
 */
export function SpacedSection({
  children,
  className = '',
  top,
  bottom,
}: {
  children: React.ReactNode;
  top?: boolean;
  bottom?: boolean;
  className?: string;
}) {
  return (
    <section
      className={clsx(className, {
        'mt-10 md:mt-20': top,
        'mb-10 md:mb-20': bottom,
      })}
    >
      {children}
    </section>
  );
}

/**
 * Centeralized container element.
 */
export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string | undefined;
}) {
  return <div className={`container mx-auto ${className}`}>{children}</div>;
}
