import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  BarChart3, Box, Calendar, LayoutDashboard, Package, Settings as SettingsIcon, ShoppingCart,
  Store, TrendingUp, Users,
} from "lucide-react";
import { Logo } from "@/components/site/Logo";
import { products } from "@/lib/products";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin — Grandma's Herbals" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: Admin,
});

const tabs = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "products", label: "Products", icon: Package },
  { id: "orders", label: "Orders", icon: ShoppingCart },
  { id: "inventory", label: "Inventory", icon: Box },
  { id: "users", label: "Customers", icon: Users },
  { id: "consultations", label: "Consultations", icon: Calendar },
  { id: "channels", label: "Marketplaces", icon: Store },
  { id: "settings", label: "Settings", icon: SettingsIcon },
] as const;

function Admin() {
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("overview");
  return (
    <div className="min-h-screen bg-sidebar text-sidebar-foreground">
      <div className="grid min-h-screen lg:grid-cols-[260px_1fr]">
        <aside className="border-r border-sidebar-border bg-sidebar p-6">
          <Logo />
          <nav className="mt-10 space-y-1">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                  tab === t.id
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                }`}
              >
                <t.icon className="h-4 w-4" /> {t.label}
              </button>
            ))}
          </nav>
          <Link to="/" className="mt-10 inline-block text-xs text-muted-foreground hover:text-foreground">← Back to storefront</Link>
        </aside>

        <main className="bg-background p-8 lg:p-12">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Admin</p>
              <h1 className="mt-2 font-serif text-4xl text-foreground capitalize">{tabs.find(t => t.id === tab)?.label}</h1>
            </div>
            <div className="flex items-center gap-3">
              <button className="rounded-full border border-border bg-card px-4 py-2 text-sm">Export</button>
              <button className="rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground">+ New</button>
            </div>
          </div>

          {tab === "overview" && <Overview />}
          {tab === "products" && <Products />}
          {tab === "orders" && <Orders />}
          {tab === "inventory" && <Inventory />}
          {tab === "users" && <UsersPanel />}
          {tab === "consultations" && <Consultations />}
          {tab === "channels" && <Channels />}
          {tab === "settings" && <SettingsPanel />}
        </main>
      </div>
    </div>
  );
}

function Stat({ label, value, delta }: { label: string; value: string; delta: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
      <p className="mt-3 font-serif text-3xl text-foreground">{value}</p>
      <p className="mt-2 inline-flex items-center gap-1 text-xs text-sage-deep">
        <TrendingUp className="h-3 w-3" /> {delta}
      </p>
    </div>
  );
}

function Overview() {
  return (
    <div className="space-y-8">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Revenue · 30d" value="$28,940" delta="+18%" />
        <Stat label="Orders" value="412" delta="+9%" />
        <Stat label="Consultations" value="63" delta="+22%" />
        <Stat label="New customers" value="186" delta="+12%" />
      </div>
      <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-2xl text-foreground">Sales overview</h2>
            <select className="rounded-full border border-border bg-background px-3 py-1.5 text-xs">
              <option>Last 30 days</option><option>Last 90 days</option>
            </select>
          </div>
          <div className="mt-6 flex h-56 items-end gap-2">
            {[40,55,42,68,72,60,80,65,82,90,76,95].map((h, i) => (
              <div key={i} className="flex-1 rounded-t-md bg-gradient-leaf" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
          <h2 className="font-serif text-2xl text-foreground">Top products</h2>
          <ul className="mt-5 space-y-4">
            {products.slice(0, 4).map((p, i) => (
              <li key={p.id} className="flex items-center gap-3">
                <span className="font-serif text-sage-deep">0{i+1}</span>
                <img src={p.image} alt="" className="h-10 w-10 rounded-lg object-cover" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{p.name}</p>
                  <p className="text-xs text-muted-foreground">${p.price}</p>
                </div>
                <span className="text-xs text-muted-foreground">{120 - i * 18} sold</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Products() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
      <table className="w-full text-sm">
        <thead className="bg-secondary text-left text-xs uppercase tracking-[0.16em] text-muted-foreground">
          <tr>
            <th className="px-6 py-4">Product</th>
            <th className="px-6 py-4">Category</th>
            <th className="px-6 py-4">Price</th>
            <th className="px-6 py-4">Stock</th>
            <th className="px-6 py-4">Rating</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {products.map((p, i) => (
            <tr key={p.id} className="hover:bg-secondary/40">
              <td className="flex items-center gap-3 px-6 py-4">
                <img src={p.image} className="h-10 w-10 rounded-lg object-cover" alt="" />
                <span className="font-medium text-foreground">{p.name}</span>
              </td>
              <td className="px-6 py-4 text-muted-foreground">{p.category}</td>
              <td className="px-6 py-4">${p.price}</td>
              <td className="px-6 py-4">{120 - i * 11}</td>
              <td className="px-6 py-4">★ {p.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Orders() {
  const rows = Array.from({ length: 8 }, (_, i) => ({
    id: `GH-${2500 - i}`, customer: ["Elena M.", "Theo K.", "Sienna L.", "Maya R."][i % 4],
    total: 28 + i * 14, status: ["Pending", "Shipped", "Delivered", "Processing"][i % 4],
  }));
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
      <table className="w-full text-sm">
        <thead className="bg-secondary text-left text-xs uppercase tracking-[0.16em] text-muted-foreground">
          <tr><th className="px-6 py-4">Order</th><th className="px-6 py-4">Customer</th><th className="px-6 py-4">Total</th><th className="px-6 py-4">Status</th></tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((r) => (
            <tr key={r.id} className="hover:bg-secondary/40">
              <td className="px-6 py-4 font-medium">{r.id}</td>
              <td className="px-6 py-4 text-muted-foreground">{r.customer}</td>
              <td className="px-6 py-4">${r.total}</td>
              <td className="px-6 py-4"><span className="rounded-full bg-sage/30 px-3 py-1 text-xs text-sage-deep">{r.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Inventory() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p, i) => (
        <div key={p.id} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
          <div className="flex gap-3">
            <img src={p.image} className="h-14 w-14 rounded-lg object-cover" alt="" />
            <div className="flex-1">
              <p className="font-medium text-foreground">{p.name}</p>
              <p className="text-xs text-muted-foreground">{p.category}</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-xs text-muted-foreground"><span>In stock</span><span>{120 - i * 12}/200</span></div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
              <div className="h-full rounded-full bg-gradient-leaf" style={{ width: `${(120 - i * 12) / 2}%` }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function UsersPanel() {
  const users = Array.from({ length: 6 }, (_, i) => ({
    name: ["Elena Marin", "Theo Klein", "Sienna López", "Maya Rao", "Iris Bloom", "Noor Hadid"][i],
    orders: 14 - i, joined: "2023", spend: 480 - i * 42,
  }));
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {users.map((u) => (
        <div key={u.name} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
          <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-leaf font-serif text-primary-foreground">{u.name[0]}</div>
          <p className="mt-4 font-serif text-lg text-foreground">{u.name}</p>
          <p className="text-xs text-muted-foreground">Joined {u.joined} · {u.orders} orders</p>
          <p className="mt-3 text-sm">Lifetime spend · <span className="font-medium">${u.spend}</span></p>
        </div>
      ))}
    </div>
  );
}

function Consultations() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
      <h2 className="font-serif text-2xl text-foreground">Upcoming sessions</h2>
      <ul className="mt-5 divide-y divide-border">
        {[
          ["Elena Marin", "Mar 18 · 10:00", "Seasonal Companion"],
          ["Theo Klein", "Mar 18 · 14:30", "Single Session"],
          ["Maya Rao", "Mar 19 · 09:00", "Year of Rituals"],
        ].map(([n, t, pkg]) => (
          <li key={n} className="flex items-center justify-between py-4">
            <div><p className="font-medium text-foreground">{n}</p><p className="text-xs text-muted-foreground">{pkg}</p></div>
            <p className="text-sm">{t}</p>
            <button className="rounded-full bg-primary px-4 py-2 text-xs text-primary-foreground">Prepare</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Channels() {
  const channels = [
    { name: "Shopify", status: "Connected", products: 24, color: "bg-sage/30 text-sage-deep" },
    { name: "Amazon", status: "Sync pending", products: 12, color: "bg-clay/20 text-clay" },
    { name: "Etsy", status: "Connected", products: 18, color: "bg-sage/30 text-sage-deep" },
  ];
  return (
    <div className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-3">
        {channels.map((c) => (
          <div key={c.name} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-xl">{c.name}</h3>
              <span className={`rounded-full px-3 py-1 text-xs ${c.color}`}>{c.status}</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{c.products} products synced</p>
            <div className="mt-5 flex gap-2">
              <button className="rounded-full bg-primary px-4 py-2 text-xs text-primary-foreground">Sync now</button>
              <button className="rounded-full border border-border px-4 py-2 text-xs">Settings</button>
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
        <div className="flex items-center gap-3">
          <BarChart3 className="h-5 w-5 text-sage-deep" />
          <h2 className="font-serif text-xl">Multi-channel sales (30d)</h2>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {[["Storefront", 14200], ["Shopify", 8920], ["Amazon + Etsy", 5820]].map(([n, v]) => (
            <div key={String(n)} className="rounded-xl bg-secondary p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{n}</p>
              <p className="mt-2 font-serif text-2xl">${(v as number).toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SettingsPanel() {
  return (
    <div className="max-w-2xl rounded-2xl border border-border bg-card p-8 shadow-soft">
      <h2 className="font-serif text-2xl text-foreground">Store settings</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {[["Store name", "Grandma's Herbals"], ["Support email", "care@grandmasherbals.com"], ["Currency", "USD"], ["Timezone", "Europe/Lisbon"]].map(([k, v]) => (
          <div key={k}>
            <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{k}</label>
            <input defaultValue={v} className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
          </div>
        ))}
      </div>
      <button className="mt-8 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">Save changes</button>
    </div>
  );
}