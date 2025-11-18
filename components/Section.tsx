// components/Section.tsx
import React, { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  className,
}) => {
  return (
    <section id={id} className={`py-20 ${className ?? ""}`}>
      <div className="mx-auto max-w-5xl px-4">
        <header className="mb-10 text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-stone-900">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-3 text-sm text-stone-600">{subtitle}</p>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  );
};
