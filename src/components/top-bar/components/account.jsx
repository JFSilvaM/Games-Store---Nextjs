"use client";

import { useAuth } from "@/hooks/use-auth";
import { Button } from "@headlessui/react";
import { UserIcon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

const total = 5;

const Account = () => {
  const { user } = useAuth();
  const router = useRouter();

  const goToCart = () => {
    if (!user) return router.push("/login");
    router.push("/cart");
  };

  const goToAccount = () => {
    if (!user) return router.push("/login");
    router.push("/account");
  };

  return (
    <div className="flex gap-7">
      <Button className="relative cursor-pointer text-white hover:text-orange-600">
        <ShoppingCartIcon onClick={goToCart} className="size-6" />

        {total > 0 && (
          <span className="absolute -top-0.5 -right-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-orange-600 text-xs text-white">
            {total}
          </span>
        )}
      </Button>

      <Button
        className={`cursor-pointer p-1.5 text-white ${user ? "rounded-lg border-2 border-neutral-800 bg-neutral-800 hover:border-orange-600" : "hover:text-orange-600"}`}
      >
        <UserIcon onClick={goToAccount} className="size-6" />
      </Button>
    </div>
  );
};

export default Account;
