"use client";

import { useAuth } from "@/hooks/use-auth";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AuthLayout = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) router.push("/");
  }, [user, router]);

  return user ? null : (
    <div className="flex h-screen max-h-screen flex-row justify-between">
      <div className="absolute top-0 left-0 flex w-full justify-between p-4">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Gaming"
            width={165}
            height={165}
            className="h-auto w-auto"
          />
        </Link>

        <Link href="/">
          <XMarkIcon className="m-0 size-7 text-orange-600" />
        </Link>
      </div>

      <div className="flex w-1/2 items-center justify-center">{children}</div>

      <div className="h-full w-1/2 bg-[url(/sign-wallpaper.jpg)] bg-cover bg-center" />
    </div>
  );
};

export default AuthLayout;
