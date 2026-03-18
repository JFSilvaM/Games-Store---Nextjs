"use client";

import Container from "@/components/container";
import FullModal from "@/components/full-modal";
import "@/components/game/media/media.css";
import { ENV } from "@/config/env";
import Image from "next/image";
import { useState } from "react";
import ReactPlayer from "react-player";
import Slider from "react-slick";

const Media = ({ gameData }) => {
  const [imageIsOpen, setImageIsOpen] = useState(false);

  const onOpenClose = () => setImageIsOpen(!imageIsOpen);

  const allImagesWithoutFirst = gameData.screenshots.slice(1);

  const sliderSettings = {
    dots: true,
    dotsClass: "slider-dots",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    customPaging: (i) => (
      <Image
        src={`${ENV.SERVER_HOST}${gameData.screenshots[i].url}`}
        alt={gameData.screenshots[i].name}
        width={165}
        height={165}
        unoptimized
        loading="eager"
        className="h-auto w-auto cursor-pointer rounded-md hover:opacity-60"
      />
    ),
  };

  return (
    <>
      <Container fluid className="mt-6 mb-12 flex flex-col gap-12">
        <div className="flex flex-col gap-3 text-2xl">
          <h2>Visuales</h2>

          <ReactPlayer
            src={gameData.video}
            width="100%"
            height={634}
            className="overflow-hidden rounded-xl"
          />
        </div>

        <div className="grid grid-cols-2 gap-5">
          <Image
            src={`${ENV.SERVER_HOST}${gameData.screenshots[0].url}`}
            alt={gameData.screenshots[0].name}
            width={165}
            height={165}
            unoptimized
            loading="eager"
            onClick={onOpenClose}
            className="col-span-1 h-full w-auto cursor-pointer rounded-xl object-cover hover:opacity-60"
          />

          <div className="col-span-1 grid grid-cols-2 gap-5">
            {allImagesWithoutFirst.map((screenshot) => (
              <Image
                key={screenshot.id}
                src={`${ENV.SERVER_HOST}${screenshot.url}`}
                alt={screenshot.name}
                width={165}
                height={165}
                unoptimized
                loading="eager"
                onClick={onOpenClose}
                className="h-auto w-auto cursor-pointer rounded-xl object-cover hover:opacity-60"
              />
            ))}
          </div>
        </div>
      </Container>

      <FullModal isOpen={imageIsOpen} onOpenClose={onOpenClose}>
        <div className="mx-auto max-w-7xl py-8">
          <Slider {...sliderSettings}>
            {gameData.screenshots.map((screenshot) => (
              <div key={screenshot.id}>
                <Image
                  src={`${ENV.SERVER_HOST}${screenshot.url}`}
                  alt={screenshot.name}
                  width={165}
                  height={165}
                  unoptimized
                  loading="eager"
                  className="h-4/5 w-full overflow-hidden rounded-xl object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
      </FullModal>
    </>
  );
};

export default Media;
