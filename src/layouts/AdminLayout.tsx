import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/crew/AdminSidebar";

export default function AdminLayout() {

    const [collapsed, setCollapsed] = useState(false);

    return (

        <div className="flex h-screen">

            <AdminSidebar
                collapsed={collapsed}
                setCollapsed={setCollapsed}
            />

            <main className="flex-1 overflow-auto bg-gray-50">

                <Outlet />

            </main>

        </div>

    );
}