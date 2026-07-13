export interface DailySale {
    date: string;
    total: number;
}

export interface PaymentMethod {
    method: string;
    total: number;
}

export interface OrderType {
    orderType: string;
    orders: number;

}

export interface Summary {
    totalSales: number;
    todaySales: number;
    paidOrders: number;
    averageTicket: number;
}

export interface TopEmployee {
    employeeId?: number;
    employeeName: string;
    orders: number;
    totalSales: number;
}

export interface TopProduct {
    productName: string;
    quantity: number;
}

export interface DashboardResponse {
    dailySales: DailySale[];
    summary: Summary;
    topEmployees: TopEmployee[];
    topProducts: TopProduct[];
    paymentMethods: PaymentMethod[];
    orderTypes: OrderType[]
}