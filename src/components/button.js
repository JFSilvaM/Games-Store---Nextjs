import { Button as HeadlessButton } from "@headlessui/react";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { useFormStatus } from "react-dom";

export default function Button({ children, type = "button" }) {
  const { pending } = useFormStatus();

  return (
    <HeadlessButton
      type={type}
      disabled={pending}
      className="cursor-pointer rounded-md bg-orange-600 px-3 py-1.5 text-sm/6 font-semibold"
    >
      {pending ? (
        <ArrowPathIcon className="h-4 w-4 animate-spin" aria-hidden="true" />
      ) : (
        children
      )}
    </HeadlessButton>
  );
}
