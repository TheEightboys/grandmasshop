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
      className="group relative border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      <Link to="/shop/$productId" params={{ productId: product.id }}>
        <div className="overflow-hidden">
          <motion.img
            src={product.images?.[0] ?? product.image}
            alt={product.name}
            className="w-full h-64 object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="p-4 bg-white">
          <h3 className="text-lg font-cormorant font-bold text-olive-700 truncate">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500 mt-1">{product.tagline}</p>
          <div className="flex justify-between items-center mt-4">
            <p className="text-lg font-semibold text-olive-600">
              ${product.price}
            </p>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600 ml-1">
                {product.rating}
              </span>
            </div>
          </div>
        </div>
      </Link>
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute bottom-4 right-4"
      >
        <Button
          size="sm"
          className="bg-olive-500 hover:bg-olive-600"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
      </motion.div>
    </motion.div>
  );
}