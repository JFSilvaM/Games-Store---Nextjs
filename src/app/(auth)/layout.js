import { XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({ children }) {
  return (
    <div className="flex h-screen max-h-screen flex-row justify-between">
      <div className="absolute top-0 left-0 flex w-full justify-between p-4">
        <Link href="/">
          <Image src="/logo.png" alt="Gaming" width={165} height={165} />
        </Link>

        <Link href="/">
          <XMarkIcon className="m-0 h-7 w-7 text-orange-600" />
        </Link>
      </div>

      <div className="flex w-1/2 items-center justify-center">{children}</div>

      <div className="h-full w-1/2 bg-[url(/sign-wallpaper.jpg)] bg-cover bg-center" />
    </div>
  );
}
