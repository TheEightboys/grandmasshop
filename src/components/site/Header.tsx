import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, ShoppingBag, User, X } from "lucide-react";
import { Logo } from "./Logo";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/consultation", label: "Consultation" },
  { to: "/about", label: "About" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const { itemCount } = useCart();
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-cream-100/80 backdrop-blur-lg border-b border-cream-200">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Logo />
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative text-sm font-medium transition-colors ${
                pathname === link.to
                  ? "text-olive-700"
                  : "text-olive-600 hover:text-olive-800"
              }`}
            >
              {link.label}
              {pathname === link.to && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-olive-500"
                  layoutId="underline"
                />
              )}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link
            to="/account"
            aria-label="Account"
            className="p-2 text-olive-600 hover:text-olive-800"
          >
            <User className="h-5 w-5" />
          </Link>
          <Link
            to="/cart"
            aria-label="Cart"
            className="relative p-2 text-olive-600 hover:text-olive-800"
          >
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-olive-500 text-xs text-white">
                {itemCount}
              </span>
            )}
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 text-olive-600 hover:text-olive-800"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-cream-200"
          >
            <nav className="flex flex-col p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 rounded-md text-olive-600 hover:bg-olive-100"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}