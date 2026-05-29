import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calendar,
  Heart,
  Package,
  Settings,
  Sparkles,
  User,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { products } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/account")({
  head: () => ({
    meta: [
      { title: "Your Wellness Journal — Grandma's Herbals" },
      {
        name: "description",
        content:
          "Your orders, saved rituals, consultation bookings, and personalized wellness recommendations.",
      },
      { property: "og:url", content: "/account" },
    ],
  }),
  component: AccountPage,
});

const tabs = [
  { id: "orders", label: "Orders", icon: Package },
  { id: "wishlist", label: "Saved Rituals", icon: Heart },
  { id: "bookings", label: "Consultations", icon: Calendar },
  { id: "recs", label: "For You", icon: Sparkles },
  { id: "settings", label: "Settings", icon: Settings },
] as const;

function AccountPage() {
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("orders");
  return (
    <SiteLayout>
      <div className="bg-olive-50">
        <div className="container mx-auto px-4 py-16">
          <div className="flex items-center gap-6">
            <div className="grid h-20 w-20 place-items-center rounded-full bg-olive-200 text-olive-600">
              <User className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-cormorant font-bold text-olive-800">
                Good Morning, Elena
              </h1>
              <p className="text-olive-600">
                Member of our quiet community since 2023.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          <nav className="flex flex-col gap-2">
            {tabs.map((t) => (
              <Button
                key={t.id}
                variant={tab === t.id ? "default" : "ghost"}
                onClick={() => setTab(t.id)}
                className={`justify-start gap-3 px-4 py-6 text-base ${
                  tab === t.id
                    ? "bg-olive-500 hover:bg-olive-600"
                    : "text-olive-700 hover:bg-olive-100"
                }`}
              >
                <t.icon className="h-5 w-5" /> {t.label}
              </Button>
            ))}
          </nav>

          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {tab === "orders" && <Orders />}
              {tab === "wishlist" && <Wishlist />}
              {tab === "bookings" && <Bookings />}
              {tab === "recs" && <Recs />}
              {tab === "settings" && <SettingsPanel />}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </SiteLayout>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">{children}</div>
  );
}

function Orders() {
  const orders = [
    { id: "GH-2418", date: "March 12, 2024", status: "Shipped", total: 92 },
    { id: "GH-2389", date: "February 02, 2024", status: "Delivered", total: 46 },
    { id: "GH-2301", date: "January 08, 2024", status: "Delivered", total: 128 },
  ];
  return (
    <Card>
      <h2 className="text-3xl font-cormorant font-bold text-olive-800">
        Recent Orders
      </h2>
      <div className="mt-6 divide-y divide-gray-200">
        {orders.map((o) => (
          <div
            key={o.id}
            className="flex flex-wrap items-center justify-between py-4 gap-4"
          >
            <div>
              <p className="font-semibold text-olive-700">{o.id}</p>
              <p className="text-sm text-gray-500">{o.date}</p>
            </div>
            <span
              className={`px-3 py-1 text-xs rounded-full ${
                o.status === "Shipped"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-green-100 text-green-800"
              }`}
            >
              {o.status}
            </span>
            <p className="font-semibold text-lg">${o.total.toFixed(2)}</p>
            <Button variant="outline" asChild>
              <Link to="/account">View Details</Link>
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
}

function Wishlist() {
  const wishlistProducts = products.slice(0, 3);
  return (
    <Card>
      <h2 className="text-3xl font-cormorant font-bold text-olive-800 mb-6">
        Your Saved Rituals
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlistProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </Card>
  );
}

function Bookings() {
  return (
    <Card>
      <h2 className="text-3xl font-cormorant font-bold text-olive-800 mb-6">
        Your Consultations
      </h2>
      <div className="text-center text-gray-500">
        <p>No upcoming consultations.</p>
        <Button asChild variant="link" className="mt-2">
          <Link to="/consultation">Book a new session</Link>
        </Button>
      </div>
    </Card>
  );
}

function Recs() {
  const recsProducts = products.slice(3, 6);
  return (
    <Card>
      <h2 className="text-3xl font-cormorant font-bold text-olive-800 mb-6">
        Personally For You
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recsProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </Card>
  );
}

function SettingsPanel() {
  return (
    <Card>
      <h2 className="text-3xl font-cormorant font-bold text-olive-800 mb-6">
        Account Settings
      </h2>
      <p className="text-gray-500">
        Manage your personal information and preferences.
      </p>
      {/* Add settings form here */}
    </Card>
  );
}