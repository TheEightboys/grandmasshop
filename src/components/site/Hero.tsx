import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export function Hero() {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);

  const slides = [
    { id: 1, title: "Herbal Wellness", subtitle: "Discover ancient herbal remedies", image: "/carousel-1.png", alt: "Mixing Bowl" },
    { id: 2, title: "Guided Wellness", subtitle: "Awareness through movement and meditation", image: "/carousel-2.jpg", alt: "Yoga Wellness" },
    { id: 3, title: "Botanical Blends", subtitle: "Premium herbal compounds for vitality", image: "/carousel-3.png", alt: "Herbal Bottles" },
    { id: 4, title: "Natural Restoration", subtitle: "Healing through nature's wisdom", image: "/carousel-4.png", alt: "Nature Wellness" },
  ];

  useEffect(() => {
    if (!api) return;
    
    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    
    api.on("select", handleSelect);
    return () => {
      api?.off("select", handleSelect);
    };
  }, [api]);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    if (!api) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="relative w-full overflow-hidden">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          loop: true,
          align: "start",
        }}
      >
        <CarouselContent className="m-0">
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="p-0">
              <div className="relative h-[600px] w-full overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to a gradient background if image fails to load
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/60 to-black/40" />
                
                {/* Content Overlay */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                  <h2 className="text-5xl md:text-7xl font-cormorant font-bold mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl max-w-2xl mb-8">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons */}
        <CarouselPrevious className="left-4 md:left-8 bg-white/20 hover:bg-white/40 text-white border-white/30" />
        <CarouselNext className="right-4 md:right-8 bg-white/20 hover:bg-white/40 text-white border-white/30" />

        {/* Slide Indicators */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 rounded-full transition-all ${
                index === current
                  ? "w-8 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>

      {/* Call-to-Action Section */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/90 to-transparent px-4 py-12">
        <div className="container mx-auto flex flex-col items-center gap-4">
          <h1 className="text-5xl md:text-6xl font-cormorant font-bold text-white text-center">
            Grandma's Herbal Haven
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl text-center">
            Rediscover the healing power of nature with our handcrafted herbal remedies, passed down through generations.
          </p>
          <div className="flex gap-4 mt-4">
            <Button asChild size="lg" className="bg-olive-500 hover:bg-olive-600">
              <Link to="/shop">
                Shop Now <ShoppingCart className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link to="/membership">Join Membership</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
