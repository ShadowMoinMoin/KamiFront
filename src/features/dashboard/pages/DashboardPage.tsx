import { useState } from "react";
import { useOrders } from "../../orders/hooks/useOrders";
import DashboardStats from "../components/DashboardStats";
import OrdersOverview from "../components/OrdersOverview";
import RecentOrders from "../components/RecentOrders";
import TopEmployees from "../components/TopEmployees";
import { useDashboard } from "../hooks/useDashboard";
import type { TopEmployee } from "../../../shared/types/dashboard";
import EmployeePerformanceModal from "../components/EmployeePerformanceModal";
import SalesChart from "../components/charts/SalesChart";
import PaymentMethodsChart from "../components/charts/PaymentMethodsChart";
import OrderTypesChart from "../components/charts/OrderTypesChart";
export default function DashboardPage() {
    const {
        data: orders = [],
        isLoading,
    } = useOrders();
    const {
        data: dashboard,
        isLoading: dashboardLoading,
    } = useDashboard();
    const [selectedEmployee, setSelectedEmployee] =
        useState<TopEmployee | null>(null);
    if (isLoading || dashboardLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-background text-white/70">
                Cargando dashboard...
            </div>
        );
    }
    return (
        <div className="min-h-screen bg-background p-8 text-white">
            <div className="mx-auto max-w-7xl space-y-8">
                <header className="space-y-1">
                    <h1 className="text-3xl font-bold">
                        Dashboard
                    </h1>
                    <p className="text-sm text-white/60">
                        Resumen general de pedidos y estado del sistema
                    </p>
                </header>
                <DashboardStats summary={dashboard?.summary} />
                <OrdersOverview orders={orders} />
                <SalesChart
                    data={
                        dashboard?.dailySales ?? []
                    } />
                <div className=" grid gap-6 lg:grid-cols-2">
                    <PaymentMethodsChart data={dashboard?.paymentMethods ?? []} />
                    <OrderTypesChart data={dashboard?.orderTypes ?? []} />
                </div>
                <RecentOrders orders={orders} />
                <TopEmployees employees={dashboard?.topEmployees} onSelect={setSelectedEmployee} />
            </div>
            {selectedEmployee && (
                <EmployeePerformanceModal
                    employee={selectedEmployee}
                    onClose={() => setSelectedEmployee(null)}
                />
            )}
        </div>
    );
}