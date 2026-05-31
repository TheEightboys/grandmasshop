import { Link } from "@tanstack/react-router";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

type CollectionBrowsePageProps = {
  title: string;
  description: string;
  product: Product;
  images: string[];
  backHref?: string;
};

export function CollectionBrowsePage({
  title,
  description,
  product,
  images,
  backHref = "/shop",
}: CollectionBrowsePageProps) {
  const { addToCart } = useCart();

  return (
    <>
      <section className="bg-gradient-to-b from-olive-100 to-stone-50">
        <div className="container mx-auto px-4 py-14 md:py-16">
          <Link
            to={backHref}
            className="inline-flex items-center gap-2 text-sm text-olive-600 hover:text-olive-800"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Shop
          </Link>
          <p className="mt-6 text-xs uppercase tracking-[0.35em] text-olive-500">
            Dedicated Collection
          </p>
          <h1 className="mt-3 text-4xl font-cormorant font-bold text-olive-800 md:text-6xl">
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-stone-600 md:text-lg">
            {description}
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="mb-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-olive-500">Add to cart</p>
              <h2 className="mt-2 text-3xl font-cormorant font-bold text-olive-800">
                {product.name}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-stone-600">
                {product.tagline}
              </p>
            </div>
            <Button
              onClick={() => addToCart(product)}
              className="rounded-full bg-olive-500 px-5 text-white hover:bg-olive-600"
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {images.map((image, index) => (
            <article
              key={image}
              className="overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white shadow-sm"
            >
              <div className="aspect-[4/5] overflow-hidden bg-stone-100">
                <img src={image} alt={`${title} image ${index + 1}`} className="h-full w-full object-cover" />
              </div>
              <div className="space-y-4 p-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-olive-500">
                    Image {index + 1}
                  </p>
                  <h3 className="mt-2 text-lg font-cormorant font-bold text-olive-800">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-stone-600">{product.tagline}</p>
                </div>
                <Button
                  variant="outline"
                  className="w-full rounded-full border-olive-200 text-olive-700 hover:bg-olive-50"
                  onClick={() => addToCart(product)}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}