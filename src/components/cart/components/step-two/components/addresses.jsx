import { useAuth } from "@/hooks/use-auth";
import { getAllAddress } from "@/lib/address";
import { useEffect, useState } from "react";

const Addresses = ({ addressSelected, setAddressSelected }) => {
  const { user } = useAuth();

  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const addressesRes = await getAllAddress(user.id);
        setAddresses(addressesRes.data);
      } catch (error) {
        throw error;
      }
    })();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-bold">Dirección</h2>

      <div className="flex flex-col gap-2">
        {addresses.map((address) => (
          <div
            key={address.id}
            onClick={() => setAddressSelected(address)}
            className={`cursor-pointer rounded-md border border-neutral-400 p-5 hover:border-orange-600 ${addressSelected?.id === address.id ? "border-orange-600" : ""}`}
          >
            <p>
              {address.name} ({address.title})
            </p>

            <p className="text-neutral-400">
              {address.address}, {address.postal_code}, {address.state},{" "}
              {address.city}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Addresses;
