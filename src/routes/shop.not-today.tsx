import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductCollectionPage } from "@/components/site/ProductCollectionPage";
import { products } from "@/lib/products";

export const Route = createFileRoute("/shop/not-today")({
  head: () => ({
    meta: [
      { title: "Not Today — Grandma's Herbals" },
      {
        name: "description",
        content: "Explore Not Today as its own dedicated collection page.",
      },
    ],
  }),
  component: NotTodayPage,
});

function NotTodayPage() {
  const collection = products.filter((product) => product.name === "Not Today");
  const images = [
    "/not-today-1.png",
    "/not-today-2.png",
    "/not-today-3.png",
    "/not-today-4.png",
    "/not-today-5.png",
    "/not-today-6.png",
    "/not-today-7.png",
    "/not-today-8.png",
  ];

  return (
    <SiteLayout>
      <ProductCollectionPage
        eyebrow="Dedicated Collection"
        title="Not Today"
        description="Not Today now has its own showcase page, separated from the rest of the shop for faster browsing and clearer presentation."
        products={collection}
        images={images}
      />
    </SiteLayout>
  );
}
