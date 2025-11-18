interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  benefits: Benefit[];
}

function CheckIcon() {
  return (
    <svg
      className="w-8 h-8 text-emerald-600"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

function WaterDropIcon() {
  return (
    <svg
      className="w-8 h-8 text-emerald-600"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg
      className="w-8 h-8 text-emerald-600"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  );
}

export function BenefitsSection({ benefits }: BenefitsSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
      {benefits.map((benefit, index) => (
        <div key={index} className="text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-emerald-50 rounded-full p-4">{benefit.icon}</div>
          </div>
          <h3 className="text-2xl font-bold text-stone-900 mb-4">
            {benefit.title}
          </h3>
          <p className="text-stone-600 leading-relaxed text-lg">
            {benefit.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export function DefaultBenefitsSection() {
  const defaultBenefits: Benefit[] = [
    {
      icon: <WaterDropIcon />,
      title: "Resistencia al Agua",
      description:
        "Perfecto para cocinas, baños y áreas húmedas. No se hincha ni se deforma con la humedad.",
    },
    {
      icon: <CheckIcon />,
      title: "Fácil Instalación",
      description:
        "Sistema que permite instalación rápida. Se adhiere con espuma de poliuretano, cola poliuretánica u otros adhesivos adecuados.",
    },
    {
      icon: <ShieldCheckIcon />,
      title: "Durabilidad",
      description:
        "Alta resistencia al desgaste y al tráfico, manteniendo su apariencia por años.",
    },
  ];

  return <BenefitsSection benefits={defaultBenefits} />;
}
