import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { motion } from "framer-motion";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-gradient-to-b from-stone-50 via-white to-olive-50/40 py-20 sm:py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-olive-200/35 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-amber-100/55 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-6xl rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_20px_70px_rgba(73,88,52,0.12)] backdrop-blur sm:p-10"
          >
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6 text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-olive-700">
                  Heritage & Wellness
                </p>
                <h1 className="text-4xl font-cormorant font-bold leading-tight text-olive-900 sm:text-5xl lg:text-6xl">
                  ROOTED IN HERITAGE. GROWN THROUGH GENERATIONS.
                </h1>
                <div className="space-y-4 text-stone-700">
                  <p className="text-base leading-7 sm:text-lg">
                    Our story is rooted in Louisiana Creole traditions, Native American plant wisdom,
                    West African botanical knowledge, and the healing practices that traveled across
                    coastal waterways connecting communities from Louisiana to present-day Belize and
                    beyond.
                  </p>
                  <p className="text-base leading-7 sm:text-lg">
                    For generations, families cultivated herbs, roots, fruits, and healing plants not
                    only for nourishment, but to support wellness, resilience, and connection to
                    nature.
                  </p>
                  <p className="text-base leading-7 sm:text-lg">
                    Grandma&apos;s Herbals honors these traditions by blending ancestral wisdom with
                    modern understanding to create natural wellness solutions inspired by generations
                    of experience and respect for the earth. Today, we continue that journey by
                    embracing integrative wellness, regenerative living, and wholistic approaches that
                    support balance of the mind, body, and spirit.
                  </p>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                  {[
                    "Respect Nature.",
                    "Honor Heritage.",
                    "Support Wellness.",
                    "Strengthen Community.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-stone-200/80 bg-white/90 px-4 py-4 text-left text-sm font-semibold text-olive-800 shadow-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Link
                    to="/consultation"
                    className="inline-flex items-center justify-center rounded-full bg-olive-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-olive-900/10 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-olive-700"
                  >
                    Book a Consultation
                  </Link>
                </div>
              </div>

              <div className="order-first lg:order-last flex items-center justify-center">
                <div className="w-full max-w-md overflow-hidden rounded-2xl border border-stone-200 bg-white/80 shadow-lg">
                  <img
                    src="/meditation-about.png"
                    alt="Meditation scene"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </SiteLayout>
  );
}
