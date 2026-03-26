import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const ConfirmModal = ({ isOpen, onOpenClose, title, content, onAccept }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (!onAccept) return onOpenClose();

    setLoading(true);
    try {
      await onAccept();
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={isOpen}
      as="div"
      className="fixed inset-0 z-10 flex items-center justify-center p-4"
      onClose={onOpenClose}
    >
      <DialogPanel
        transition
        className="flex max-h-[90dvh] min-w-2xl flex-col gap-3 overflow-auto rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
      >
        <DialogTitle as="h3" className="text-3xl uppercase">
          {title}
        </DialogTitle>

        {content}

        <Button
          onClick={handleClick}
          className="cursor-pointer self-end rounded-md bg-orange-600 p-2 outline-none"
        >
          {loading ? (
            <ArrowPathIcon className="size-6 animate-spin" />
          ) : (
            "Confirmar"
          )}
        </Button>
      </DialogPanel>
    </Dialog>
  );
};

export default ConfirmModal;
