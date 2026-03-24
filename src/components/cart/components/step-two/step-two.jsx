import Addresses from "@/components/cart/components/step-two/components/addresses";
import Payment from "@/components/cart/components/step-two/components/payment";
import Resume from "@/components/cart/components/step-two/components/resume";
import { ENV } from "@/config/env";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

const stripeInit = loadStripe(ENV.STRIPE_TOKEN);

const StepTwo = ({ games }) => {
  const [addressSelected, setAddressSelected] = useState(null);

  return (
    <Elements stripe={stripeInit}>
      <div className="grid grid-cols-3 gap-4 py-5 pb-10">
        <div className="col-span-2 flex flex-col gap-10">
          <Addresses
            addressSelected={addressSelected}
            setAddressSelected={setAddressSelected}
          />

          {addressSelected && <Payment />}
        </div>

        <Resume games={games} addressSelected={addressSelected} />
      </div>
    </Elements>
  );
};

export default StepTwo;
