import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductCollectionPage } from "@/components/site/ProductCollectionPage";
import { products } from "@/lib/products";

export const Route = createFileRoute("/shop/adult-enhancement")({
  head: () => ({
    meta: [
      { title: "Adult Enhancement & Performance — Grandma's Herbals" },
      {
        name: "description",
        content:
          "Browse Boom Max and Peach Flow in a dedicated adult enhancement and performance collection.",
      },
    ],
  }),
  component: AdultEnhancementPage,
});

function AdultEnhancementPage() {
  const collection = products.filter((product) =>
    ["Boom Max", "Peach Flow"].includes(product.name),
  );

  return (
    <SiteLayout>
      <ProductCollectionPage
        eyebrow="Dedicated Collection"
        title="Adult Enhancement & Performance"
        description="Boom Max and Peach Flow are now grouped into their own focused collection so the performance range is easy to browse and present separately."
        products={collection}
      />
    </SiteLayout>
  );
}
