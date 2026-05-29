import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { motion } from "framer-motion";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  // Using high-quality online stock image links to bypass missing local asset issues
  const aboutImage = "https://unsplash.com";
  const team1 = "https://unsplash.com";
  const team2 = "https://unsplash.com";
  const team3 = "https://unsplash.com";

  return (
    <SiteLayout>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl md:text-7xl font-cormorant font-bold">
            Our Story
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl">
            Rooted in tradition, crafted with love. Discover the heart behind
            Grandma's Herbal Haven.
          </p>
        </div>
      </motion.section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-cormorant font-bold text-olive-800 mb-6">
                Our Wellness Philosophy
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We believe true wellness involves more than temporary relief.
                It's about creating emotionally safe environments, healthier
                daily routines, and restorative experiences.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to help you slow down, reconnect emotionally,
                and build a healthier relationship with stress, sleep, and your
                overall well-being through the gentle power of nature.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={team1}
                alt="Making herbal remedies"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-olive-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-cormorant font-bold text-olive-800 mb-12">
            Meet the Family
          </h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <img
                src={team2}
                alt="Founder"
                className="w-48 h-48 rounded-full object-cover shadow-md mb-4"
              />
              <h3 className="text-2xl font-cormorant font-semibold text-olive-700">
                Eleanora
              </h3>
              <p className="text-sm text-gray-500 mb-2">Founder & Herbalist</p>
              <p className="text-gray-600">
                The heart and soul of our haven, carrying on generations of
                herbal wisdom.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col items-center"
            >
              <img
                src={team3}
                alt="Co-founder"
                className="w-48 h-48 rounded-full object-cover shadow-md mb-4"
              />
              <h3 className="text-2xl font-cormorant font-semibold text-olive-700">
                Isabella
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                Co-Founder & Creative Director
              </p>
              <p className="text-gray-600">
                Eleanora's granddaughter, blending traditional knowledge with a
                modern touch.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
