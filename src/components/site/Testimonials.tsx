import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah L.",
    quote:
      "The personalized consultation was a game-changer. I finally feel heard and understood. The 'Calm Mind' tincture has become my daily ritual for peace.",
    rating: 5,
  },
  {
    name: "Michael B.",
    quote:
      "I was skeptical about herbal remedies, but the 'Deep Sleep' blend has given me the most restful nights I've had in years. Truly life-changing.",
    rating: 5,
  },
  {
    name: "Jessica R.",
    quote:
      "Grandma's recipes are pure magic. The 'Radiant Skin' salve cleared up my eczema when nothing else would. I'm a customer for life.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="bg-cream-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-cormorant font-bold text-olive-700 text-center mb-12">
          What Our Community is Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">"{testimonial.quote}"</p>
              <p className="font-semibold text-olive-600">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
