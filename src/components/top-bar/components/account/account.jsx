"use client";

import SelectMenu from "@/components/top-bar/components/account/components/select-menu";
import { useAuth } from "@/hooks/use-auth";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@headlessui/react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

const Account = () => {
  const { user } = useAuth();
  const { total } = useCart();
  const router = useRouter();

  const goToCart = () => {
    if (!user) return router.push("/login");
    router.push("/cart");
  };

  return (
    <div className="flex gap-7">
      <Button className="relative cursor-pointer hover:text-orange-600">
        <ShoppingCartIcon onClick={goToCart} className="size-6" />

        {total > 0 && (
          <span className="text-foreground absolute -top-0.5 -right-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-orange-600 text-xs">
            {total}
          </span>
        )}
      </Button>

      <SelectMenu />
    </div>
  );
};

export default Account;
