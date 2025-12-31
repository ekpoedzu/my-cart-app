
//my current  Stripe Checkout Form Component
/*const StripeCheckoutForm = ({ saveOrder, totalPrice }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleStripePay = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: window.location.origin + "/success" },
      redirect: "if_required",
    });

    setLoading(false);

    if (error) {
      console.error("❌ Stripe payment error:", error);
      alert(error.message);
    } else if (paymentIntent.status === "succeeded") {
      console.log("✅ Stripe payment succeeded:", paymentIntent);
      await saveOrder(paymentIntent);
    }
  };

  return (
    <form onSubmit={handleStripePay}>
      <CardElement className="p-2 border mb-2" />
      <button
        type="submit"
        disabled={!stripe || loading}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {loading ? "Processing..." : `Pay $${totalPrice.toFixed(2)}`}
      </button>
    </form>
  );
};
export default StripeCheckoutForm;*/



import React, { useState, useEffect } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const StripeCheckoutForm = ({ saveOrder, totalPrice }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  // 1️⃣ Create PaymentIntent when component mounts
  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const { data } = await axios.post(
          "/api/stripe/create-payment-intent",
          { amount: Math.round(totalPrice * 100) }, // amount in cents
          {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          }
        );
        setClientSecret(data.clientSecret);
      } catch (err) {
        console.error("❌ Failed to create payment intent:", err);
        alert("Failed to initialize payment");
      }
    };

    createPaymentIntent();
  }, [totalPrice]);

  // 2️⃣ Handle payment submission
  const handleStripePay = async (e) => {
    e.preventDefault();
    if (!stripe || !elements || !clientSecret) return;

    setLoading(true);

    const cardElement = elements.getElement(CardElement);

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card: cardElement },
    });

    setLoading(false);

    if (error) {
      console.error("❌ Stripe payment error:", error);
      alert(error.message);
    } else if (paymentIntent.status === "succeeded") {
      console.log("✅ Stripe payment succeeded:", paymentIntent);
      await saveOrder(paymentIntent);
      alert("Payment successful!");
    }
  };

  return (
    <form onSubmit={handleStripePay}>
      <CardElement className="p-2 border mb-2" />
      <button
        type="submit"
        disabled={!stripe || !clientSecret || loading}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {loading ? "Processing..." : `Pay $${totalPrice.toFixed(2)}`}
      </button>
    </form>
  );
};

export default StripeCheckoutForm;






