import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import type { UseEmblaCarouselType } from "embla-carousel-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [
  {
    id: 1,
    type: "image" as const,
    title: "Herbal Wellness",
    subtitle: "Discover ancient herbal remedies",
    image: "/carousel-1.png",
    alt: "Mixing Bowl",
  },
  {
    id: 2,
    type: "image" as const,
    title: "Guided Wellness",
    subtitle: "Awareness through movement and meditation",
    image: "/carousel-2.jpg",
    alt: "Yoga Wellness",
  },
  {
    id: 3,
    type: "video" as const,
    title: "Botanical Blends",
    subtitle: "Premium herbal compounds for vitality",
    image: "/carousel-3.mp4",
    alt: "Herbal Bottles video",
  },
  {
    id: 4,
    type: "image" as const,
    title: "Natural Restoration",
    subtitle: "Healing through nature's wisdom",
    image: "/carousel-4.png",
    alt: "Nature Wellness",
  },
];

export function Hero() {
  const [api, setApi] = useState<UseEmblaCarouselType[1] | null>(null);
  const [current, setCurrent] = useState(0);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    handleSelect();
    api.on("select", handleSelect);
    api.on("reInit", handleSelect);

    return () => {
      api.off("select", handleSelect);
      api.off("reInit", handleSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const activeSlide = slides[current];

    if (activeSlide?.type === "video") {
      return;
    }

    const interval = window.setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => window.clearInterval(interval);
  }, [api, current]);

  useEffect(() => {
    // Play the active video slide and pause others
    slides.forEach((s, i) => {
      if (s.type !== "video") return;
      const v = videoRefs.current[i];
      if (!v) return;

      if (i === current) {
        // attempt to play; ignore promise rejection
        v.muted = true;
        const p = v.play();
        if (p && typeof p.catch === "function") p.catch(() => {});
      } else {
        try {
          v.pause();
          v.currentTime = 0;
        } catch (e) {
          // ignore
        }
      }
    });
  }, [current]);

  return (
    <section className="relative w-full bg-stone-50">
      <div className="relative w-full overflow-hidden">
        <Carousel
          setApi={setApi}
          className="w-full"
          opts={{
            loop: true,
            align: "start",
          }}
        >
          <CarouselContent className="m-0">
            {slides.map((slide, index) => (
              <CarouselItem key={slide.id} className="p-0">
                <div className="relative h-[300px] sm:h-[420px] md:h-[620px] w-full overflow-hidden">
                  {slide.type === "video" ? (
                    <video
                      key={slide.image}
                      ref={(el) => (videoRefs.current[index] = el)}
                      className="absolute inset-0 h-full w-full object-cover"
                      // control playback programmatically when slide becomes active
                      muted
                      playsInline
                      preload="metadata"
                      onEnded={() => api?.scrollNext()}
                    >
                      <source src={slide.image} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="absolute inset-0 h-full w-full object-cover"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black/70 md:bg-gradient-to-r md:from-black/55 md:via-black/35 md:to-black/45" />

                  <div className="relative z-10 hidden h-full md:flex items-center px-8 lg:px-16">
                    <div className="max-w-2xl text-white">
                      <p className="text-sm uppercase tracking-[0.35em] text-white/70">Grandma's Herbals</p>
                      <h2 className="mt-3 text-5xl lg:text-7xl font-cormorant font-bold leading-none">
                        {slide.title}
                      </h2>
                      <p className="mt-5 max-w-xl text-lg lg:text-xl text-white/90">
                        {slide.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden md:flex left-4 lg:left-8 bg-white/20 hover:bg-white/35 text-white border-white/30" />
          <CarouselNext className="hidden md:flex right-4 lg:right-8 bg-white/20 hover:bg-white/35 text-white border-white/30" />

          <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2 md:bottom-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all ${
                  index === current ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>

      <div className="md:hidden border-t border-stone-200 bg-stone-50 px-4 py-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-cormorant font-bold text-olive-800">
            Grandma's Herbals
          </h1>
          <p className="text-base leading-7 text-stone-700">
            Rediscover the healing power of nature with our handcrafted herbal remedies, passed down
            through generations.
          </p>
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="w-full bg-olive-500 text-white hover:bg-olive-600 sm:w-auto">
              <Link to="/shop">
                Shop Now <ShoppingCart className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border-olive-500 bg-white text-olive-700 hover:bg-olive-500 hover:text-white sm:w-auto"
            >
              <Link to="/membership">Join Membership</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 hidden md:block bg-gradient-to-t from-black/85 to-transparent px-4 py-10">
        <div className="container mx-auto flex flex-col items-center gap-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-cormorant font-bold text-white">
            Grandma's Herbals
          </h1>
          <p className="max-w-2xl text-lg lg:text-xl text-white/90">
            Rediscover the healing power of nature with our handcrafted herbal remedies, passed down
            through generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Button asChild size="lg" className="bg-olive-500 hover:bg-olive-600">
              <Link to="/shop">
                Shop Now <ShoppingCart className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-olive-600 hover:border-olive-600 hover:text-white"
            >
              <Link to="/membership">Join Membership</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
