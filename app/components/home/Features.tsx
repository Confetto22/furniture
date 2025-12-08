'use client';

const features = [
  {
    title: 'Ensure Durability And Longevity.',
    icon: '🛡️'
  },
  {
    title: 'Diverse Range Of Furniture\'s.',
    icon: '📦'
  },
  {
    title: 'Comfort And High Functionality.',
    icon: '🪑'
  },
  {
    title: 'Tailored Furniture For Specific Needs.',
    icon: '✂️'
  }
];

export default function Features() {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-foreground">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

