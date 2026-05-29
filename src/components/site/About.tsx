import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export function About() {
  // Directly using an online image link to completely bypass the missing file error
  const aboutImage = "https://unsplash.com";

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/aboutImage.png"
              alt="Grandma in her garden"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-cormorant font-bold text-olive-700 mb-4">
              A Legacy of Healing
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Our story begins in a small village, where Grandma Eleanor first
              learned the secrets of the earth from her own mother. For
              generations, our family has been dedicated to the art of herbal
              healing, passing down knowledge and recipes that nurture the body
              and soul.
            </p>
            <Button asChild size="lg" className="bg-olive-500 hover:bg-olive-600">
              <Link to="/about">Learn Our Story</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
