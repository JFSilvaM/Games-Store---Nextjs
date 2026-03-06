import AddressForm from "@/components/profile/tabs/components/address/components/address-form";
import AddressList from "@/components/profile/tabs/components/address/components/address-list";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Address = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [reload, setReload] = useState(false);

  const onOpenClose = () => setIsOpen((prev) => !prev);

  const onReload = () => setReload((prev) => !prev);

  return (
    <>
      <div className="flex justify-end">
        <Button
          onClick={onOpenClose}
          className="flex cursor-pointer gap-2 rounded-md bg-orange-600 px-5 py-1.5 font-semibold outline-none"
        >
          <PlusIcon className="size-6" />
          Añadir dirección
        </Button>
      </div>

      <Dialog
        open={isOpen}
        as="div"
        className="fixed inset-0 z-10 flex items-center justify-center p-4"
        onClose={onOpenClose}
      >
        <DialogPanel
          transition
          className="flex min-w-2xl flex-col gap-3 rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
        >
          <DialogTitle as="h3" className="text-3xl">
            Nueva dirección
          </DialogTitle>

          <AddressForm onOpenClose={onOpenClose} onReload={onReload} />
        </DialogPanel>
      </Dialog>

      <AddressList reload={reload} onReload={onReload} />
    </>
  );
};

export default Address;
