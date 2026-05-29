import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Social() {
  return (
    <section className="bg-cream-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-cormorant font-bold text-olive-700 mb-4">
          Join Our Community
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Follow us on Instagram for daily wellness tips, behind-the-scenes, and
          special offers.
        </p>
        <Button asChild size="lg" className="bg-olive-500 hover:bg-olive-600">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="mr-2 h-5 w-5" /> Follow Us
          </a>
        </Button>
      </div>
    </section>
  );
}
