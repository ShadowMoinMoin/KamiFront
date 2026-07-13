import { Routes, Route } from "react-router-dom";
import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";
import MenuPage from "../pages/public/MenuPage";
import KitchenPage from "../features/kitchen/pages/KitchenPage";
import TablesPage from "../features/tables/pages/TablesPage";
import CheckoutPage from "../features/checkout/pages/CheckoutPage";
import LandingPage from "../pages/public/LandingPage";
import PublicLayout from "../layouts/PublicLayout";
import OrdersPage from "../pages/client/OrdersPage";
import AdminOrdersPage from "../features/orders/pages/AdminOrdersPage";
import DeliveryPage from "../features/delivery/pages/DeliveryPage";
import DashboardPage from "../features/dashboard/pages/DashboardPage";
import AdminLayout from "../layouts/AdminLayout";
import MenuAdminPage from "../pages/admin/MenuAdminPage";
import About from "../pages/public/About";
import ProtectedRoute from "./ProtectedRoute";
import UsersAdminPage from "../pages/admin/UsersAdminPage";
export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<PublicLayout />}>
                <Route path="/" element={<LandingPage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/tables" element={<TablesPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/profile" element={<OrdersPage />} />
            </Route>

            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />



            <Route
                element={
                    <ProtectedRoute roles={["ADMIN", "COCINA", "DELIVERY"]}>
                        <AdminLayout />
                    </ProtectedRoute>
                }
            >
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute roles={["ADMIN"]}>
                            <DashboardPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/admin/menu"
                    element={
                        <ProtectedRoute roles={["ADMIN"]}>
                            <MenuAdminPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/admin/user"
                    element={
                        <ProtectedRoute roles={["ADMIN"]}>
                            <UsersAdminPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/orders"
                    element={
                        <ProtectedRoute roles={["ADMIN"]}>
                            <AdminOrdersPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/kitchen"
                    element={
                        <ProtectedRoute roles={["ADMIN", "COCINA"]}>
                            <KitchenPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/delivery"
                    element={
                        <ProtectedRoute roles={["ADMIN", "DELIVERY"]}>
                            <DeliveryPage />
                        </ProtectedRoute>
                    }
                />

            </Route>

        </Routes>
    )
}