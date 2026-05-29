import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import consultationImage from "@/assets/consultation.jpg";

export const Route = createFileRoute("/consultation")({
  component: Consultation,
});

function Consultation() {
  return (
    <SiteLayout>
      <div className="bg-olive-50">
        <div className="container mx-auto px-4 py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-cormorant font-bold text-olive-700"
          >
            Personalized Wellness Consultation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-lg text-olive-600 max-w-3xl mx-auto"
          >
            Let us guide you on your unique wellness journey. Book a one-on-one
            consultation to discover the perfect herbal rituals for your needs.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-3xl font-cormorant font-bold text-olive-800 mb-6">
              Book Your Session
            </h2>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Your Name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <Label htmlFor="date">Preferred Date</Label>
                <Input id="date" type="date" />
              </div>
              <div>
                <Label htmlFor="message">
                  What would you like to focus on?
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us a bit about your wellness goals..."
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-olive-500 hover:bg-olive-600"
              >
                Request Consultation
              </Button>
            </form>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-lg overflow-hidden"
          >
            <img
              src={consultationImage}
              alt="Herbal consultation setup"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </SiteLayout>
  );
}