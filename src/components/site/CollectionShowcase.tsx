import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { ShowcaseSection } from "@/lib/shop-content";
import { Button } from "@/components/ui/button";

type CollectionShowcaseProps = ShowcaseSection & {
  className?: string;
};

export function CollectionShowcase({
  eyebrow,
  title,
  subtitle,
  description,
  highlights = [],
  images = [],
  items = [],
  ctaHref,
  ctaLabel = "View collection",
  className = "",
}: CollectionShowcaseProps) {
  const previewImages = images.slice(0, 4);

  return (
    <section className={`mb-16 ${className}`}>
      <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm">
        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="bg-gradient-to-br from-olive-50 via-stone-50 to-cream-100 p-6 sm:p-8 lg:p-10">
            <p className="text-xs uppercase tracking-[0.35em] text-olive-500">{eyebrow}</p>
            <h2 className="mt-3 text-3xl font-cormorant font-bold text-olive-800 sm:text-4xl">
              {title}
            </h2>
            <p className="mt-2 text-sm uppercase tracking-[0.28em] text-stone-500">{subtitle}</p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-stone-600 sm:text-base">
              {description}
            </p>

            {highlights.length > 0 ? (
              <div className="mt-6 flex flex-wrap gap-2">
                {highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-olive-200 bg-white/90 px-3 py-1 text-xs font-medium text-olive-700"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            ) : null}

            {ctaHref ? (
              <Button asChild className="mt-8 rounded-full bg-olive-500 px-5 text-white hover:bg-olive-600">
                <Link to={ctaHref}>
                  {ctaLabel}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            ) : null}
          </div>

          <div className="grid gap-0 sm:grid-cols-2">
            {previewImages.length > 0 ? (
              previewImages.map((image, index) => (
                <div key={image} className="group relative min-h-56 overflow-hidden bg-stone-100">
                  <img
                    src={image}
                    alt={`${title} preview ${index + 1}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
                </div>
              ))
            ) : (
              <div className="sm:col-span-2 flex min-h-72 items-center justify-center bg-gradient-to-br from-stone-100 to-olive-50 p-8 text-center">
                <div className="max-w-md">
                  <p className="text-xs uppercase tracking-[0.3em] text-olive-500">{eyebrow}</p>
                  <h3 className="mt-3 text-2xl font-cormorant font-bold text-olive-800">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-stone-600">{description}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {items.length > 0 ? (
          <div className="border-t border-stone-200 bg-stone-50 p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {items.map((item) => (
                <article
                  key={item.title}
                  className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm"
                >
                  {item.image ? (
                    <div className="aspect-[4/3] overflow-hidden bg-stone-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ) : null}
                  <div className="space-y-3 p-4">
                    <div>
                      <h3 className="text-lg font-cormorant font-bold text-olive-800">
                        {item.title}
                      </h3>
                      {item.subtitle ? (
                        <p className="text-sm uppercase tracking-[0.22em] text-stone-500">
                          {item.subtitle}
                        </p>
                      ) : null}
                    </div>
                    {item.description ? (
                      <p className="text-sm leading-6 text-stone-600">{item.description}</p>
                    ) : null}
                    {item.notes && item.notes.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {item.notes.map((note) => (
                          <span
                            key={note}
                            className="rounded-full bg-olive-50 px-3 py-1 text-[11px] font-medium text-olive-700"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
