"use client";
import renderImg from "@/imgImport";
import React, { memo } from "react";
import { Button } from "./view-products-buttons";
import Image from "next/image";
import { sendGAEvent, sendGTMEvent } from "@next/third-parties/google";

const GetInTouch = () => {
  return (
    <div className="flex flex-col space-y-6 justify-center items-center">
      <Image
        width={100}
        height={100}
        alt=""
        src={renderImg("avtarGroup")}
        className="w-24 h-12"
      />
      <div className="flex flex-col space-y-1 items-center text-center">
        <h1 className="text-base font-tthoves-semiBold sm:text-sm md:text-base lg:text-lg xl:text-xl ">
          Still have questions?
        </h1>
        <p className="text-secondary-foreground font-tthoves sm:text-sm md:text-base lg:text-lg xl:text-xl ">
          Can&apos;t find the answer you&apos;re looking for? Please chat to our
          friendly team
        </p>
      </div>

      <a href="#footer-contact-form-component">
        <Button
          className="rounded-full"
          onClick={() => {
            sendGTMEvent({ event: "buttonClicked", value: "whatsapp clicks" });
            sendGAEvent({ event: "buttonClicked", value: "whatsapp clicks" });
          }}
        >
          Get in touch
        </Button>
      </a>
    </div>
  );
};

export default memo(GetInTouch);
