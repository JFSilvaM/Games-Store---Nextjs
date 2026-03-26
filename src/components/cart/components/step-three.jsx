import { Button } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const StepThree = () => (
  <div className="flex flex-col items-center gap-6 py-10">
    <CheckCircleIcon className="size-20 text-green-500" />

    <h2 className="text-xl font-semibold">¡Compra exitosa!</h2>

    <Link href="/profile">
      <Button className="text-foreground cursor-pointer rounded-md bg-orange-600 px-10 py-2 outline-none hover:bg-orange-400">
        Ver pedido
      </Button>
    </Link>
  </div>
);

export default StepThree;
