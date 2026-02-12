import { Button as HeadlessButton } from "@headlessui/react";

export default function Button({ setOpen, children }) {
  return (
    <HeadlessButton
      className="cursor-pointer rounded-md bg-orange-400 px-8 py-4 text-white hover:bg-amber-400 focus:bg-amber-400 active:bg-amber-400"
      onClick={() => setOpen(true)}
    >
      {children}
    </HeadlessButton>
  );
}
