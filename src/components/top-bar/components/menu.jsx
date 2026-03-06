"use client";

import { ENV } from "@/config/env";
import { getAllPlatforms } from "@/lib/platform";
import { Button, Input } from "@headlessui/react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Menu = ({ isOpenSearch }) => {
  const [platforms, setPlatforms] = useState(null);
  const [showSearch, setShowSearch] = useState(false);

  const openCloseSearch = () => setShowSearch((prevState) => !prevState);

  useEffect(() => {
    (async () => {
      try {
        const response = await getAllPlatforms();
        setPlatforms(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="relative flex items-end justify-end rounded-l-full bg-neutral-900/10 pr-12 pl-5 backdrop-blur-xl">
      {platforms?.map((platform) => (
        <Link
          key={platform.documentId}
          href={`/games/${platform.slug}`}
          className="flex items-center px-3.5 py-5"
        >
          <Image
            src={`${ENV.SERVER_HOST}${platform.icon.url}`}
            alt={platform.icon.name}
            width={165}
            height={165}
            className="brightness[0] h-4 w-auto pr-2.5 invert-[1]"
          />

          {platform.title}
        </Link>
      ))}

      <Button
        onClick={openCloseSearch}
        className="absolute -right-8 z-10 flex h-full w-16 cursor-pointer items-center justify-center rounded-full bg-orange-600 hover:bg-orange-400"
      >
        {showSearch ? (
          <XMarkIcon className="m-0 size-6" />
        ) : (
          <MagnifyingGlassIcon className="m-0 size-6" />
        )}
      </Button>

      <div
        className={`absolute top-0 left-0 h-full rounded-full bg-orange-600 ${showSearch ? "flex w-[calc(100%+30px)]" : "hidden"}`}
      >
        <Input
          id="search-games"
          placeholder="Buscador"
          className="text-md placeholder:text-foreground/70 w-full overflow-hidden py-2.5 pr-20 pl-7 data-focus:outline-none"
        />
      </div>
    </div>
  );
};

export default Menu;
