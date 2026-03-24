import { CardElement } from "@stripe/react-stripe-js";

const Payment = () => {
  const cardStyle = {
    style: {
      base: {
        color: "#fff",
        fontSize: "16px",
        "::placeholder": {
          color: "#909090",
        },
      },
    },
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-bold">Métodos de pago</h2>

      <div className="rounded-md bg-neutral-700 p-5">
        <CardElement options={cardStyle} />
      </div>
    </div>
  );
};

export default Payment;
