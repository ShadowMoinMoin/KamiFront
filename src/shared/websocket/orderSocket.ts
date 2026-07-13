import { Client } from "@stomp/stompjs";
import type { OrderEvent } from "./orderEvents";

let client: Client | null = null;

export const connectOrderSocket = (
    onMessage: (event: OrderEvent) => void
) => {
    if (client?.active) return;

    client = new Client({
        brokerURL: import.meta.env.VITE_WS_URL,
        reconnectDelay: 5000,

        onConnect: () => {
            client?.subscribe("/topic/orders", (message) => {
                const event: OrderEvent = JSON.parse(message.body);
                onMessage(event);
            });
        },
    });

    client.activate();
};

export const disconnectOrderSocket = () => {
    client?.deactivate();
    client = null;
};