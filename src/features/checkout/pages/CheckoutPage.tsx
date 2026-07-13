import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useCheckout } from "../hooks/useCheckout";
import { useAuthStore } from "../../auth/store/authStore";

import CheckoutForm from "../components/CheckoutForm";
import OrderSummary from "../components/OrderSummary";
import PaymentMethodModal from "../components/PaymentMethodModal";
import PaymentSuccessModal from "../components/PaymentSuccessModal";
import AuthModal from "../../auth/components/AuthModal";

export default function CheckoutPage() {
    const checkout = useCheckout();

    const navigate = useNavigate();
    const { isAuthenticated } = useAuthStore();
    const [paymentOpen, setPaymentOpen] = useState(false);
    const [successOpen, setSuccessOpen] = useState(false);
    const [authOpen, setAuthOpen] = useState(false)
    const handleContinue = async () => {
        if (!isAuthenticated()) {
            setAuthOpen(true);
            return;
        }
        try {
            await checkout.createOrderDraft();
            setPaymentOpen(true);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <div className="mx-auto max-w-7xl px-6 py-28">

                <h1 className="mb-10 font-display text-4xl text-white">
                    Confirmar pedido
                </h1>

                <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">

                    <CheckoutForm
                        orderType={checkout.orderType}
                        setOrderType={checkout.setOrderType}

                        deliveryAddress={checkout.deliveryAddress}
                        setDeliveryAddress={checkout.setDeliveryAddress}

                        observations={checkout.observations}
                        setObservations={checkout.setObservations}
                    />

                    <OrderSummary
                        items={checkout.items}
                        total={checkout.total}
                        loading={checkout.loading}
                        onContinue={handleContinue}
                    />

                </div>

            </div>
            <AuthModal
                open={authOpen}
                onClose={() => setAuthOpen(false) }
            />
            <PaymentMethodModal
                open={paymentOpen}
                checkout={checkout}
                onClose={() => setPaymentOpen(false)}
                onSuccess={() => {
                    setPaymentOpen(false);
                    setSuccessOpen(true);
                }}
            />

            <PaymentSuccessModal
                open={successOpen}
                orderId={checkout.orderId}
                onClose={() => {
                    checkout.reset();
                    navigate("/profile");
                }}
            />
        </>
    );
}