import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/lib/cart-context";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — Grandma's Herbals" },
      {
        name: "description",
        content: "Complete your botanical wellness order.",
      },
      { property: "og:url", content: "/checkout" },
    ],
  }),
  component: CheckoutPage,
});

function CheckoutPage() {
  const { cart, total, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In a real app, you'd handle payment processing here
    setSubmitted(true);
    clearCart();
  }

  if (submitted) {
    return (
      <SiteLayout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-cormorant font-bold text-olive-800">
            Thank You!
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            Your order has been placed. A confirmation email is on its way to
            you. Your botanical wellness ritual is about to begin.
          </p>
          <Button asChild className="mt-8">
            <Link to="/shop">Continue Shopping</Link>
          </Button>
        </div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <div className="bg-olive-50">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-5xl font-cormorant font-bold text-olive-700">
            Checkout
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <form
          onSubmit={handleSubmit}
          className="grid lg:grid-cols-[1.5fr_1fr] gap-12"
        >
          {/* Shipping & Payment */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-cormorant font-bold text-olive-800 mb-4">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" required placeholder="you@example.com" />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-cormorant font-bold text-olive-800 mb-4">
                Shipping Address
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" type="text" required placeholder="First and Last Name" />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="address">Street Address</Label>
                  <Input id="address" type="text" required placeholder="123 Herbal Lane" />
                </div>
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input id="city" type="text" required placeholder="Apothecaryville" />
                </div>
                <div>
                  <Label htmlFor="state">State / Province</Label>
                  <Input id="state" type="text" required placeholder="CA" />
                </div>
                <div>
                  <Label htmlFor="zip">ZIP / Postal Code</Label>
                  <Input id="zip" type="text" required placeholder="90210" />
                </div>
                <div>
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" type="text" required placeholder="United States" />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-cormorant font-bold text-olive-800 mb-4">
                Payment
              </h2>
              <RadioGroup defaultValue="card" className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card">Credit Card</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="paypal" id="paypal" />
                  <Label htmlFor="paypal">PayPal</Label>
                </div>
              </RadioGroup>
              <div className="mt-4 space-y-4">
                <div>
                  <Label htmlFor="card-number">Card Number</Label>
                  <Input id="card-number" placeholder="•••• •••• •••• ••••" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry">Expiration</Label>
                    <Input id="expiry" placeholder="MM / YY" />
                  </div>
                  <div>
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="•••" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <aside className="bg-white p-8 rounded-lg shadow-md lg:sticky lg:top-28 lg:self-start">
            <h2 className="text-2xl font-cormorant font-bold text-olive-800 border-b pb-4">
              Your Order
            </h2>
            <div className="mt-6 space-y-4">
              {cart.map((item) => (
                <div key={item.product.id} className="flex items-center gap-4">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="h-16 w-16 rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-semibold">{item.product.name}</p>
                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <p className="font-semibold">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
            <dl className="mt-6 pt-6 border-t space-y-4 text-sm">
              <div className="flex justify-between">
                <dt>Subtotal</dt>
                <dd>${total.toFixed(2)}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Shipping</dt>
                <dd>Free</dd>
              </div>
              <div className="border-t pt-4 mt-4 flex justify-between font-bold text-lg">
                <dt>Total</dt>
                <dd>${total.toFixed(2)}</dd>
              </div>
            </dl>
            <Button
              type="submit"
              size="lg"
              className="w-full mt-6 bg-olive-500 hover:bg-olive-600"
            >
              Place Order
            </Button>
          </aside>
        </form>
      </div>
    </SiteLayout>
  );
}
