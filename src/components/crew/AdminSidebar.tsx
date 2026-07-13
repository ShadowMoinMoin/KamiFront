import { LayoutDashboard, ChefHat, Truck, Package, Menu, X, ReceiptText, UserCircle2Icon } from "lucide-react";

import { Link, useLocation } from "react-router-dom";
import { cn } from "../../shared/utils/cn";
import Logo from "../shared/Logo";

interface Props {
    collapsed: boolean;
    setCollapsed: (v: boolean) => void;
}

export default function AdminSidebar({
    collapsed,
    setCollapsed,
}: Props) {

    const location = useLocation();

    const items = [
        { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
        { icon: ChefHat, label: "Cocina", path: "/kitchen" },
        { icon: Truck, label: "Delivery", path: "/delivery" },
        { icon: Package, label: "Pedidos", path: "/orders" },
        { icon: ReceiptText, label: "Carta", path: "/admin/menu" },
        { icon: UserCircle2Icon, label: "Personal", path: "/admin/user" },
    ];

    return (
        <aside
            className={cn(
                "h-full bg-surface border-r border-border text-white flex flex-col transition-all duration-300",
                collapsed ? "w-20" : "w-64"
            )}
        >
            <div className="flex items-center justify-between border-b border-border p-4">

                {!collapsed && (
                    <Logo/>
                )}

                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="rounded-lg p-2 text-white/70 transition hover:bg-white/5 hover:text-white"
                >
                    {collapsed ? <Menu size={18} /> : <X size={18} />}
                </button>
            </div>

            <nav className="flex-1 space-y-1 p-2">

                {items.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;

                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            title={collapsed ? item.label : undefined}
                            className={cn(
                                "group flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition",
                                isActive
                                    ? "bg-accent/10 text-accent border border-accent/20"
                                    : "text-white/70 hover:bg-white/5 hover:text-white"
                            )}>
                            <Icon size={18} className={cn("shrink-0 transition", isActive ? "text-accent" : "text-white/60 group-hover:text-white")}/>
                            {!collapsed && (
                                <span>{item.label}</span>
                            )}
                        </Link>
                    );
                })}

            </nav>
        </aside>
    );
}