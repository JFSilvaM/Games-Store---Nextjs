import Addresses from "@/components/cart/components/step-two/components/addresses";
import { useState } from "react";

const StepTwo = () => {
  const [addressSelected, setAddressSelected] = useState(null);

  return (
    <div className="grid grid-cols-3 gap-4 py-5 pb-10">
      <div className="col-span-2 flex flex-col gap-10">
        <Addresses
          addressSelected={addressSelected}
          setAddressSelected={setAddressSelected}
        />

        {addressSelected && <p>Payment</p>}
      </div>

      <div>Resume</div>
    </div>
  );
};

export default StepTwo;
