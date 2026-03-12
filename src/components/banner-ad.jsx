import Container from "@/components/container";
import { Button } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

const BannerAd = ({ title, subtitle, btnTitle, btnLink, image }) => (
  <div className="relative mt-20 flex bg-radial-[at_20%_90%] from-sky-400 via-blue-500 to-gray-950 after:absolute after:-bottom-0.5 after:h-16 after:w-full after:bg-neutral-800 after:[clip-path:polygon(0_100%,100%_100%,0_0)]">
    <Container fluid className="flex items-center justify-between pt-8">
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>

          <h3>{subtitle}</h3>
        </div>

        <Link href={btnLink} className="w-fit">
          <Button className="text-foreground cursor-pointer rounded-md bg-orange-600 px-5 py-2 outline-none hover:bg-orange-400">
            {btnTitle}
          </Button>
        </Link>
      </div>

      <Image
        src={image}
        alt="Banner add gaming"
        width={400}
        height={400}
        className="h-auto w-auto"
      />
    </Container>
  </div>
);

export default BannerAd;
