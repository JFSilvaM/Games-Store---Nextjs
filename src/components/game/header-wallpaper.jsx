import { ENV } from "@/config/env";
import Image from "next/image";

const HeaderWallpaper = ({ image }) => (
  <div className="relative h-125 after:absolute after:-bottom-0.5 after:h-16 after:w-full after:bg-neutral-800 after:[clip-path:polygon(0_100%,100%_100%,0_0)]">
    <Image
      src={`${ENV.SERVER_HOST}${image.url}`}
      alt={image.name}
      width={165}
      height={165}
      unoptimized
      loading="eager"
      className="h-full w-full object-cover"
    />
  </div>
);

export default HeaderWallpaper;
