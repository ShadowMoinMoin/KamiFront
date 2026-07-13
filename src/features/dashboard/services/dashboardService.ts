import api from "../../../shared/services/axios";
import type { DashboardResponse } from "../../../shared/types/dashboard";

export const getDashboard = async () => {
    const response = await api.get<DashboardResponse>("/dashboard")
    return response.data
}