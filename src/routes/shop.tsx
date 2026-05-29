import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductCard } from "@/components/site/ProductCard";
import { categories, products } from "@/lib/products";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop Botanical Wellness — Grandma's Herbals" },
      {
        name: "description",
        content:
          "Hand-blended herbal teas, tinctures, oils, and mushroom blends — small batch and made with care.",
      },
      {
        property: "og:title",
        content: "Shop Botanical Wellness — Grandma's Herbals",
      },
      {
        property: "og:description",
        content:
          "Hand-blended herbal teas, tinctures, oils, and mushroom blends.",
      },
      { property: "og:url", content: "/shop" },
    ],
  }),
  component: Shop,
});

function Shop() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("featured");

  const filtered = useMemo(() => {
    let list = products.filter(
      (p) =>
        (cat === "All" || p.category === cat) &&
        (q === "" || p.name.toLowerCase().includes(q.toLowerCase()))
    );
    if (sort === "price-asc")
      list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc")
      list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating")
      list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [cat, q, sort]);

  return (
    <SiteLayout>
      <section className="bg-olive-100">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-5xl font-cormorant font-bold text-olive-700">
            Our Apothecary
          </h1>
          <p className="mt-2 text-lg text-olive-600 max-w-2xl mx-auto">
            Discover our handcrafted herbal teas, tinctures, oils, and
            mushroom blends, all made with love and intention in small batches.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {categories.map((c) => (
              <Button
                key={c}
                variant={cat === c ? "default" : "ghost"}
                onClick={() => setCat(c)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm transition ${
                  cat === c
                    ? "bg-olive-500 hover:bg-olive-600 text-white"
                    : "text-olive-600 hover:bg-olive-100"
                }`}
              >
                {c}
              </Button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search products..."
                className="pl-10 w-48"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <SlidersHorizontal className="h-4 w-4" />
                  Sort by
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSort("featured")}>
                  Featured
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSort("rating")}>
                  Top Rated
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSort("price-asc")}>
                  Price: Low to High
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSort("price-desc")}>
                  Price: High to Low
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}