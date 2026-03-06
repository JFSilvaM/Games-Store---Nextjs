import { useAuth } from "@/hooks/use-auth";
import { getAllAddress } from "@/lib/address";
import {
  ArrowPathIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

const AddressList = ({ reload, onReload }) => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [addresses, setAddresses] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await getAllAddress(user.id);
        setAddresses(response.data);
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    })();
  }, [reload]);

  return loading ? (
    <div className="flex justify-center py-4">
      <ArrowPathIcon className="size-6 animate-spin" />
    </div>
  ) : (
    <div className="flex flex-col gap-6 pt-4">
      {addresses?.map((address) => (
        <div
          key={address.documentId}
          className="flex items-center justify-between gap-3 rounded-md bg-neutral-700 p-3"
        >
          <div className="flex gap-1.5">
            <p className="font-semibold">{address.title}:</p>

            <p className="text-neutral-400">
              {address.name}, {address.address}, {address.state}, {address.city}
              , {address.postal_code}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="cursor-pointer rounded-md bg-orange-600 p-2 hover:bg-orange-400">
              <PencilIcon className="size-5" />
            </div>

            <div className="cursor-pointer rounded-md bg-orange-600 p-2 hover:bg-orange-400">
              <TrashIcon className="size-5" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddressList;
