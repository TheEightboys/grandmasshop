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
import { ChevronRight } from "lucide-react";

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
        content: "Hand-blended herbal teas, tinctures, oils, and mushroom blends.",
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
        (q === "" || p.name.toLowerCase().includes(q.toLowerCase())),
    );
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [cat, q, sort]);

  const herbalIv = filtered.filter((product) => product.name === "Herbal IV");
  const notToday = filtered.filter((product) => product.name === "Not Today");
  const adultEnhancement = filtered.filter((product) =>
    ["Boom Max", "Peach Flow"].includes(product.name),
  );
  const restOfStore = filtered.filter(
    (product) => !["Herbal IV", "Not Today", "Boom Max", "Peach Flow"].includes(product.name),
  );

  const Section = ({
    title,
    description,
    href,
    items,
  }: {
    title: string;
    description: string;
    href: string;
    items: typeof products;
  }) => (
    <section className="mb-16">
      {items.length > 0 ? (
        <>
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-olive-500">Collection</p>
              <h2 className="mt-2 text-3xl font-cormorant font-bold text-olive-800">{title}</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-stone-600">{description}</p>
            </div>
            <Button
              asChild
              variant="ghost"
              className="justify-start text-olive-700 hover:bg-olive-100 hover:text-olive-800 sm:justify-center"
            >
              <Link to={href}>
                View collection <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      ) : null}
    </section>
  );

  return (
    <SiteLayout>
      <section className="bg-gradient-to-b from-olive-100 to-stone-50">
        <div className="container mx-auto px-4 py-14 text-center md:py-16">
          <p className="text-xs uppercase tracking-[0.35em] text-olive-500">Shop</p>
          <h1 className="mt-3 text-4xl font-cormorant font-bold text-olive-800 md:text-6xl">
            Our Apothecary
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-stone-600 md:text-lg">
            Discover our handcrafted herbal teas, tinctures, oils, and mushroom blends, all made
            with love and intention in small batches.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
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
                <DropdownMenuItem onClick={() => setSort("featured")}>Featured</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSort("rating")}>Top Rated</DropdownMenuItem>
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

        {cat === "All" ? (
          <>
            <Section
              title="Herbal IV"
              description="A dedicated wellness support collection for Herbal IV, with its own page and spotlight in the shop."
              href="/shop/herbal-iv"
              items={herbalIv}
            />

            <Section
              title="Not Today"
              description="Focused energy and clarity support showcased separately so it is easy to find and explore."
              href="/shop/not-today"
              items={notToday}
            />

            <Section
              title="Adult Enhancement & Performance"
              description="Boom Max and Peach Flow are presented together as a separate performance collection."
              href="/shop/adult-enhancement"
              items={adultEnhancement}
            />

            <Section
              title="All Other Wellness Products"
              description="The rest of the shop collection, displayed separately so each group remains easy to browse."
              href="/shop"
              items={restOfStore}
            />
          </>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </section>
    </SiteLayout>
  );
}
