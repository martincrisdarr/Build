interface Step {
  number: number;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  steps: Step[];
}

function StepNumber({ number }: { number: number }) {
  return (
    <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg relative z-10">
      {number}
    </div>
  );
}

export function ProcessSection({ steps }: ProcessSectionProps) {
  return (
    <div className="relative">
      <div className="hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 w-2/3 h-0.5 bg-emerald-200 -z-0" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
        {steps.map((step) => (
          <div key={step.number} className="text-center">
            <div className="flex justify-center mb-6">
              <StepNumber number={step.number} />
            </div>
            <h3 className="text-2xl font-bold text-stone-900 mb-4">
              {step.title}
            </h3>
            <p className="text-stone-600 leading-relaxed text-lg">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DefaultProcessSection() {
  const defaultSteps: Step[] = [
    {
      number: 1,
      title: "Consulta",
      description:
        "Contáctanos por WhatsApp para conocer nuestros productos y precios.",
    },
    {
      number: 2,
      title: "Selección",
      description:
        "Elige el modelo que mejor se adapte a tu proyecto y necesidades.",
    },
    {
      number: 3,
      title: "Entrega",
      description:
        "Coordinamos la entrega y te la llevamos hasta la puerta de tu hogar o negocio.",
    },
  ];

  return <ProcessSection steps={defaultSteps} />;
}
