import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/shop/herbal-iv")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/shop/herbal-iv"!</div>;
}
