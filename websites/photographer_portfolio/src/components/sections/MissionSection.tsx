interface MissionSectionProps {
  title: string;
  primaryText: string;
  secondaryText?: string;
}

export default function MissionSection({ title, primaryText, secondaryText }: MissionSectionProps) {
  return (
    <section className="px-4 md:px-8 py-20 bg-gradient-to-b from-transparent to-background/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          {title}
        </h2>
        <p className="text-xl text-secondary leading-relaxed mb-8">
          {primaryText}
        </p>
        {secondaryText && (
          <p className="text-lg text-secondary leading-relaxed">
            {secondaryText}
          </p>
        )}
      </div>
    </section>
  );
}
