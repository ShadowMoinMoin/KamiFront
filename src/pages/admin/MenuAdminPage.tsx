import { useState } from "react";

import { useDashboard } from "../../features/dashboard/hooks/useDashboard";

import MenuStats from "./MenuStats";
import TopProducts from "./TopProducts";
import MenuTabs from "./MenuTabs";

import ProductsAdminPage from "./ProductsAdminPage";
import CategoriesAdminPage from "./CategoriesAdminPage";
import TopProductsChart from "./TopProductsChart";

export default function MenuAdminPage() {
    const {
        data: dashboard
    } = useDashboard();

    const [activeTab, setActiveTab] = useState<"products" | "categories">("products");

    return (
        <div className="min-h-screen bg-background p-8 text-white">
            <div className="mx-auto max-w-7xl space-y-8">
                <header>
                    <h1 className="font-bold text-4xl">
                        Administración del menú
                    </h1>
                    <p className="text-white/60">
                        Gestiona productos y categorías.
                    </p>
                </header>
                <MenuStats topProducts={dashboard?.topProducts ?? []} />
                <TopProductsChart products={dashboard?.topProducts ?? []} />
                <TopProducts products={dashboard?.topProducts ?? []} />
                <MenuTabs activeTab={activeTab} onChange={setActiveTab} />
                <div className="rounded-2xl border border-border bg-surface p-6">
                    {activeTab === "products" ? <ProductsAdminPage /> : <CategoriesAdminPage />}
                </div>
            </div>
        </div>
    );
}