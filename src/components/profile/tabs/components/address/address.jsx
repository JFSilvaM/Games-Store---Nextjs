import AddressList from "@/components/profile/tabs/components/address/components/address-list";
import AddressModalForm from "@/components/profile/tabs/components/address/components/address-modal-form";
import { Button } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Address = () => {
  const [isOpen, setIsOpenCreate] = useState(false);
  const [reload, setReload] = useState(false);

  const onOpenCloseCreate = () => setIsOpenCreate((prev) => !prev);

  const onReload = () => setReload((prev) => !prev);

  return (
    <>
      <div className="flex justify-end">
        <Button
          onClick={onOpenCloseCreate}
          className="flex cursor-pointer gap-2 rounded-md bg-orange-600 px-5 py-1.5 font-semibold outline-none"
        >
          <PlusIcon className="size-6" />
          Añadir dirección
        </Button>
      </div>

      <AddressModalForm
        isOpen={isOpen}
        onOpenClose={onOpenCloseCreate}
        onReload={onReload}
        title="Nueva dirección"
      />

      <AddressList reload={reload} onReload={onReload} />
    </>
  );
};

export default Address;
