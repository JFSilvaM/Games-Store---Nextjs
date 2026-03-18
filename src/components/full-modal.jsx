import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";

const FullModal = ({ isOpen, onOpenClose, children }) => (
  <Dialog
    open={isOpen}
    as="div"
    className="fixed inset-0 z-10"
    onClose={onOpenClose}
  >
    <DialogPanel transition className="bg-background h-screen w-screen">
      <DialogTitle as="h3" className="absolute top-0 right-0 z-10 p-6">
        <XMarkIcon
          onClick={onOpenClose}
          className="size-9 cursor-pointer text-orange-600"
        />
      </DialogTitle>

      {children}
    </DialogPanel>
  </Dialog>
);

export default FullModal;
