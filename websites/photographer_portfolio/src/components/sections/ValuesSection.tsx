import { Heart, Camera, Award, Star } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Authentic Storytelling',
    description: 'We capture genuine emotions and real moments, creating authentic visual narratives.',
  },
  {
    icon: Camera,
    title: 'Artistic Vision',
    description: 'Every image is crafted with artistic precision and creative excellence.',
  },
  {
    icon: Award,
    title: 'Professional Excellence',
    description: 'Years of experience and technical expertise ensure exceptional results.',
  },
  {
    icon: Star,
    title: 'Client-Centered',
    description: 'Your vision and satisfaction are at the heart of everything we do.',
  },
];

export default function ValuesSection() {
  return (
    <section className="px-4 md:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Values
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            The principles that guide our work and define our approach to photography
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className={`neu-card p-8 ${index % 2 === 1 ? 'md:mt-12' : ''} ${index === 3 ? 'md:-mt-12' : ''}`}
              >
                <div className="neu-card-sm w-16 h-16 flex items-center justify-center mb-6">
                  <Icon size={32} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
