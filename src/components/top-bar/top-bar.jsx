import Account from "@/components/top-bar/components/account/account";
import Menu from "@/components/top-bar/components/menu";
import Image from "next/image";
import Link from "next/link";

const TopBar = ({ isOpenSearch }) => (
  <div className="fixed z-10 flex w-full items-center justify-between p-5">
    <Link href="/">
      <Image
        src="/logo.png"
        alt="Gaming"
        width={120}
        height={120}
        className="h-auto w-auto"
      />
    </Link>

    <div className="flex w-3/5 justify-center">
      <Menu isOpenSearch={isOpenSearch} />
    </div>

    <div className="flex w-1/5 justify-end">
      <Account />
    </div>
  </div>
);

export default TopBar;
