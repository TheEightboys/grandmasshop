import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Leaf, HeartPulse, Infinity } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import type { UseEmblaCarouselType } from "embla-carousel-react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const mediaSlides = [
  {
    id: 1,
    type: "image" as const,
    image: "/carousel-1.png",
    alt: "Wellness botanical scene",
  },
  {
    id: 2,
    type: "image" as const,
    image: "/carousel-2.png",
    alt: "Herbal lifestyle scene",
  },
  {
    id: 3,
    type: "video" as const,
    image: "/carousel-3.mp4",
    alt: "Wellness video scene",
  },
  {
    id: 4,
    type: "image" as const,
    image: "/carousel-4.png",
    alt: "Botanical products scene",
  },
  {
    id: 5,
    type: "video" as const,
    image: "/carousel-5.mp4",
    alt: "Wellness video scene",
  },
];

const storySlides = [
  {
    id: 1,
    eyebrow: "Integrative Wellness",
    mobileTitle: "🌿 Integrative Wellness",
    mobileBody: "Personalized solutions for your unique wellness journey.",
    title: "Rooted in Ancient Wisdom. Cultivated for Well-Being.",
    subtitle: "A Heritage of Botanical Wisdom. A Future of Integrative Wellness.",
    intro:
      "Long before wellness became an industry, it was a way of life. Across generations, knowledge traveled through gardens, forests, waterways, kitchens, gathering circles, and family traditions. It crossed oceans and coastlines, connecting the rich botanical heritage of Louisiana Creole communities, North American Indigenous and Aboriginal traditions, West African plant knowledge, the healing practices of Belize and Central America, and countless herb-rich cultures throughout the world.",
    paragraphs: [
      "These traditions shared a common understanding: true wellness is not merely the absence of discomfort—it is the harmonious relationship between mind, body, spirit, family, community, and the natural world.",
      "At Grandma's Herbals, we honor this legacy by embracing the timeless wisdom of our ancestors while integrating modern wellness principles. Our philosophy recognizes that nature has long provided nourishment, comfort, resilience, and support through the remarkable diversity of botanicals found throughout the earth.",
      "Inspired by generations of healers, growers, gatherers, herbalists, elders, and caretakers, we continue a tradition rooted in respect for the land and a deep appreciation for the interconnectedness of all living things.",
      "Whether beginning with a wellness consultation, exploring botanical wellness solutions, or seeking guidance toward a more balanced lifestyle, we invite you to experience an approach inspired by generations of wisdom and cultivated for modern living.",
      "Because wellness is not simply a destination. It is a lifelong journey—one rooted in ancient wisdom, nurtured by nature, and cultivated for well-being.",
    ],
    values: ["Integrative Wellness", "Regenerative Living", "Natural & Organic Botanicals", "Wholistic Well-Being", "Cultural Heritage & Traditional Wisdom", "Community, Family & Connection"],
    features: ["Integrative Wellness", "Regenerative Living", "Natural & Organic Botanicals", "Wholistic Well-Being", "Cultural Heritage & Traditional Wisdom", "Community, Family & Connection"],
    primaryCta: { label: "Begin Your Wellness Journey", to: "/assessment" },
    secondaryCta: { label: "Discover Our Story", to: "/about" },
    accent: "from-olive-100 via-white to-amber-50",
    icon: Sparkles,
  },
  {
    id: 2,
    eyebrow: "Integrative Wellness",
    mobileTitle: "✨ Integrative Wellness",
    mobileBody: "Support for balance through a personalized, whole-person approach.",
    title: "Wellness Designed Around You",
    subtitle: "Personalized guidance for sustainable support.",
    body:
      "Every person is unique. Our integrative approach considers nutrition, lifestyle, movement, stress, sleep, mindfulness, and botanical support to help you achieve sustainable wellness.",
    features: ["Personalized Recommendations", "Lifestyle Support", "Herbal Guidance", "AI-Assisted Wellness Planning"],
    primaryCta: { label: "Explore Consultations", to: "/consultation" },
    accent: "from-stone-50 via-olive-50 to-white",
    icon: HeartPulse,
  },
  {
    id: 3,
    eyebrow: "Regenerative Wellness",
    mobileTitle: "✨ Regenerative Living",
    mobileBody: "Support recovery, vitality, and long-term wellness naturally.",
    title: "Support Your Body’s Natural Ability to Renew",
    subtitle: "Restore resilience, energy, and mobility.",
    body:
      "Discover wellness strategies focused on restoration, resilience, recovery, circulation, energy, mobility, and long-term vitality.",
    features: ["Recovery Support", "Energy & Vitality", "Active Lifestyle Support", "Healthy Aging Focus"],
    primaryCta: { label: "Learn More", to: "/about" },
    accent: "from-emerald-50 via-white to-stone-50",
    icon: Infinity,
  },
  {
    id: 4,
    eyebrow: "Nature’s Pharmacy",
    mobileTitle: "🍃 Organic & Natural",
    mobileBody: "Premium botanicals crafted with care and intention.",
    title: "Rooted In Nature. Guided By Wisdom.",
    subtitle: "Premium botanicals with modern wellness insight.",
    body:
      "Premium botanicals, traditional herbal knowledge, and modern wellness insights combined to help support your everyday health goals.",
    features: ["Organic Ingredients", "Small Batch Formulas", "Quality Focused", "Naturally Inspired"],
    primaryCta: { label: "Shop Botanicals", to: "/shop" },
    accent: "from-amber-50 via-white to-olive-50",
    icon: Leaf,
  },
  {
    id: 5,
    eyebrow: "Whole Person Wellness",
    mobileTitle: "🧠 Mind • Body • Spirit",
    mobileBody: "Wholistic wellness designed for total well-being.",
    title: "Mind • Body • Spirit",
    subtitle: "Well-being that supports the whole person.",
    body:
      "True wellness is more than physical health. Our wholistic approach supports emotional wellness, mental clarity, personal growth, and overall well-being.",
    features: ["Meditation Support", "Stress Management", "Wellness Coaching", "Guided Resources"],
    primaryCta: { label: "Join Membership", to: "/membership" },
    accent: "from-stone-50 via-white to-olive-50",
    icon: Sparkles,
  },
  {
    id: 6,
    eyebrow: "Community Wellness",
    mobileTitle: "🚀 Begin Your Transformation Today",
    mobileBody: "Shop • Learn • Thrive Naturally.",
    title: "Feel Better. Live Better. Thrive Naturally.",
    subtitle: "A growing community embracing a natural path to vitality.",
    body:
      "Join a growing community embracing a natural path toward vitality, balance, and lifelong wellness.",
    features: ["Shop the collection", "Join membership", "Book support", "Grow with us"],
    primaryCta: { label: "Shop Now", to: "/shop" },
    secondaryCta: { label: "Join Membership", to: "/membership" },
    accent: "from-olive-50 via-white to-amber-50",
    icon: ArrowRight,
  },
];

export function Hero() {
  const [mediaApi, setMediaApi] = useState<UseEmblaCarouselType[1] | null>(null);
  const [mediaCurrent, setMediaCurrent] = useState(0);
  const [storyApi, setStoryApi] = useState<UseEmblaCarouselType[1] | null>(null);
  const [storyCurrent, setStoryCurrent] = useState(0);
  const mediaAutoplayRef = useRef<number | null>(null);
  const storyAutoplayRef = useRef<number | null>(null);
  const mediaVideoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  useEffect(() => {
    if (!mediaApi) return;

    const handleSelect = () => {
      setMediaCurrent(mediaApi.selectedScrollSnap());
    };

    handleSelect();
    mediaApi.on("select", handleSelect);
    mediaApi.on("reInit", handleSelect);

    return () => {
      mediaApi.off("select", handleSelect);
      mediaApi.off("reInit", handleSelect);
    };
  }, [mediaApi]);

  useEffect(() => {
    if (!mediaApi) return;

    if (mediaAutoplayRef.current) {
      window.clearInterval(mediaAutoplayRef.current);
    }

    mediaAutoplayRef.current = window.setInterval(() => {
      mediaApi.scrollNext();
    }, 5500);

    return () => {
      if (mediaAutoplayRef.current) {
        window.clearInterval(mediaAutoplayRef.current);
      }
    };
  }, [mediaApi, mediaCurrent]);

  useEffect(() => {
    if (!mediaApi) return;

    mediaSlides.forEach((slide, index) => {
      if (slide.type !== "video") return;

      const video = mediaVideoRefs.current[index];
      if (!video) return;

      if (index === mediaCurrent) {
        video.muted = true;
        const playPromise = video.play();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(() => {});
        }
      } else {
        try {
          video.pause();
          video.currentTime = 0;
        } catch {
          // ignore reset issues on non-active video slides
        }
      }
    });
  }, [mediaCurrent, mediaApi]);

  useEffect(() => {
    if (!storyApi) return;

    const handleSelect = () => {
      setStoryCurrent(storyApi.selectedScrollSnap());
    };

    handleSelect();
    storyApi.on("select", handleSelect);
    storyApi.on("reInit", handleSelect);

    return () => {
      storyApi.off("select", handleSelect);
      storyApi.off("reInit", handleSelect);
    };
  }, [storyApi]);

  useEffect(() => {
    if (!storyApi) return;

    if (storyAutoplayRef.current) {
      window.clearInterval(storyAutoplayRef.current);
    }

    storyAutoplayRef.current = window.setInterval(() => {
      storyApi.scrollNext();
    }, 6500);

    return () => {
      if (storyAutoplayRef.current) {
        window.clearInterval(storyAutoplayRef.current);
      }
    };
  }, [storyApi, storyCurrent]);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-stone-50 via-white to-olive-50/30">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-olive-200/35 blur-3xl" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-amber-100/50 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-stone-200/50 blur-3xl" />
      </div>

      <div className="relative w-full overflow-hidden border-b border-stone-200/70">
        <Carousel
          setApi={setMediaApi}
          className="w-full"
          opts={{
            loop: true,
            align: "start",
          }}
        >
          <CarouselContent className="m-0">
            {mediaSlides.map((slide, index) => (
              <CarouselItem key={slide.id} className="p-0">
                <div className="relative h-[320px] sm:h-[420px] md:h-[620px] w-full overflow-hidden bg-black/5">
                  {slide.type === "video" ? (
                    <video
                      ref={(el) => {
                        mediaVideoRefs.current[index] = el;
                      }}
                      className="absolute inset-0 h-full w-full object-cover"
                      muted
                      playsInline
                      preload="metadata"
                      onEnded={() => mediaApi?.scrollNext()}
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

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex justify-between items-end p-4 sm:p-6 md:p-8">
                    <div className="max-w-xl text-white">
                      <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-white/75">
                        Wellness in motion
                      </p>
                      <h2 className="mt-2 text-2xl sm:text-4xl font-cormorant font-bold drop-shadow">
                        Grandma&apos;s Herbals
                      </h2>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden md:flex left-4 lg:left-8 border-white/40 bg-white/70 text-olive-800 shadow-lg backdrop-blur hover:bg-white" />
          <CarouselNext className="hidden md:flex right-4 lg:right-8 border-white/40 bg-white/70 text-olive-800 shadow-lg backdrop-blur hover:bg-white" />

          <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2 md:bottom-8">
            {mediaSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => mediaApi?.scrollTo(index)}
                className={`h-2 rounded-full transition-all ${
                  index === mediaCurrent ? "w-8 bg-white" : "w-2 bg-white/60 hover:bg-white"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>

      <div className="relative w-full overflow-hidden border-b border-stone-200/70">
        <Carousel
          setApi={setStoryApi}
          className="w-full"
          opts={{
            loop: true,
            align: "start",
          }}
        >
          <CarouselContent className="m-0">
            {storySlides.map((slide) => (
              <CarouselItem key={slide.id} className="p-0">
                <div className={`relative min-h-[32rem] overflow-hidden bg-gradient-to-br ${slide.accent}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.9),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(107,127,86,0.16),transparent_30%)]" />
                  <div className="container mx-auto grid min-h-[32rem] items-center px-4 py-10 sm:py-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:px-8">
                    <motion.div
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="relative z-10 max-w-3xl"
                    >
                      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-olive-200/70 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-olive-700 shadow-sm backdrop-blur">
                        <slide.icon className="h-4 w-4" />
                        <span>{slide.eyebrow}</span>
                      </div>

                      <h1 className="max-w-2xl text-4xl font-cormorant font-bold tracking-tight text-olive-950 sm:text-5xl lg:text-7xl">
                        <span className="block md:hidden">{slide.mobileTitle}</span>
                        <span className="hidden md:block">{slide.title}</span>
                      </h1>

                      <p className="mt-4 max-w-xl text-sm font-medium uppercase tracking-[0.24em] text-olive-700/80 md:text-base">
                        {slide.subtitle}
                      </p>

                      <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                        <div className="space-y-4 text-base leading-7 text-stone-700 sm:text-lg md:text-[1.05rem] md:leading-8">
                          <p className="block md:hidden">{slide.mobileBody}</p>
                          <p className="hidden md:block md:pt-1">{slide.intro}</p>
                          <div className="hidden md:block space-y-4">
                            {slide.paragraphs?.slice(0, 3).map((paragraph) => (
                              <p key={paragraph}>{paragraph}</p>
                            ))}
                          </div>
                        </div>

                        <div className="rounded-[1.6rem] border border-white/70 bg-white/80 p-4 shadow-sm backdrop-blur">
                          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.35em] text-olive-700">
                            Guided by heritage
                          </p>
                          <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                            {(slide.values ?? slide.features).slice(0, 4).map((value, valueIndex) => (
                              <div
                                key={value}
                                className="flex items-center gap-3 rounded-2xl border border-stone-200/70 bg-white px-3 py-2.5"
                              >
                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-olive-100 text-xs font-semibold text-olive-700">
                                  0{valueIndex + 1}
                                </span>
                                <span className="text-xs font-medium text-stone-700">{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2 md:mt-7">
                        {slide.features.slice(0, 4).map((feature) => (
                          <span
                            key={feature}
                            className="rounded-full border border-white/70 bg-white/85 px-3 py-1.5 text-xs font-semibold text-olive-800 shadow-sm backdrop-blur"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Button
                          asChild
                          size="lg"
                          className="bg-olive-600 px-6 text-white shadow-lg shadow-olive-900/10 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-olive-700"
                        >
                          <Link to={slide.primaryCta.to}>
                            {slide.primaryCta.label}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        {slide.secondaryCta ? (
                          <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-olive-300 bg-white/70 px-6 text-olive-800 backdrop-blur transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white"
                          >
                            <Link to={slide.secondaryCta.to}>{slide.secondaryCta.label}</Link>
                          </Button>
                        ) : null}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.94 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.7, delay: 0.18 }}
                      className="relative z-10 mt-10 hidden lg:block"
                    >
                      <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/75 p-8 shadow-[0_24px_80px_rgba(61,74,41,0.14)] backdrop-blur-xl">
                        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.75),rgba(255,255,255,0.25))]" />
                        <div className="relative space-y-5">
                          <div className="inline-flex items-center rounded-full bg-olive-100 px-4 py-2 text-sm font-semibold text-olive-800">
                            Integrative • Regenerative • Natural • Organic • Wholistic
                          </div>
                          <div className="grid gap-3">
                            {slide.features.slice(0, 4).map((feature, featureIndex) => (
                              <div
                                key={feature}
                                className="flex items-center gap-3 rounded-2xl border border-stone-200/70 bg-white/90 px-4 py-3 shadow-sm"
                              >
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-olive-100 text-sm font-semibold text-olive-700">
                                  0{featureIndex + 1}
                                </span>
                                <p className="text-sm font-medium text-stone-700">{feature}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden md:flex left-4 lg:left-8 border-white/40 bg-white/70 text-olive-800 shadow-lg backdrop-blur hover:bg-white" />
          <CarouselNext className="hidden md:flex right-4 lg:right-8 border-white/40 bg-white/70 text-olive-800 shadow-lg backdrop-blur hover:bg-white" />

          <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2 md:bottom-8">
            {storySlides.map((_, index) => (
              <button
                key={index}
                onClick={() => storyApi?.scrollTo(index)}
                className={`h-2 rounded-full transition-all ${
                  index === storyCurrent ? "w-8 bg-olive-800" : "w-2 bg-olive-300 hover:bg-olive-500"
                }`}
                aria-label={`Go to story slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
}
