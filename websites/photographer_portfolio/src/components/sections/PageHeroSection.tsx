interface PageHeroSectionProps {
  badge: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function PageHeroSection({ badge, title, description, imageSrc, imageAlt }: PageHeroSectionProps) {
  return (
    <section className="min-h-[60vh] flex items-center px-4 md:px-8 pt-32 pb-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-accent font-medium tracking-wide uppercase text-sm">
              {badge}
            </p>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              {title}
            </h1>

            <p className="text-lg text-secondary leading-relaxed">
              {description}
            </p>
          </div>

          {imageSrc && (
            <div className="neu-card-lg p-2">
              <div className="aspect-[4/5] bg-secondary/20 rounded-2xl overflow-hidden">
                <img
                  src={imageSrc}
                  alt={imageAlt || title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
