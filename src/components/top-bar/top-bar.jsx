import Account from "@/components/top-bar/components/account";
import Image from "next/image";
import Link from "next/link";

const TopBar = ({ isOpenSearch }) => (
  <div className="z-(5) fixed flex w-full items-center p-5">
    <div className="w-1/5">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Gaming"
          width={120}
          height={120}
          className="h-auto w-auto"
        />
      </Link>
    </div>

    <div className="flex w-3/5 justify-center">
      <span>MENU</span>
    </div>

    <div className="flex w-1/5 justify-end">
      <Account />
    </div>
  </div>
);

export default TopBar;
