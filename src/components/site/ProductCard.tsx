import type { Product } from "@/lib/products";
import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { motion } from "framer-motion";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
    >
      <Link to="/shop/$productId" params={{ productId: product.id }} className="block">
        <div className="overflow-hidden">
          <motion.img
            src={product.images?.[0] ?? product.image}
            alt={product.name}
            className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="p-4">
          <h3 className="truncate text-lg font-cormorant font-bold text-olive-700">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-stone-500">{product.tagline}</p>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-lg font-semibold text-olive-600">${product.price}</p>
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-current text-yellow-400" />
              <span className="ml-1 text-sm text-stone-600">{product.rating}</span>
            </div>
          </div>
        </div>
      </Link>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:bg-black/30 group-hover:opacity-100">
        <Button
          size="lg"
          className="translate-y-3 bg-olive-500 px-6 text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-olive-600"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            addToCart(product);
          }}
        >
          Add to Cart
        </Button>
      </div>
    </motion.div>
  );
}
