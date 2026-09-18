import CeoReviewsContainer from "@/components/ui/ceo-reviews";
import GlobalAwards from "@/components/ui/home/global-awards";
import renderImg from "@/imgImport";
// import JumpingButtons from "../../components/ui/common/jumping-buttons";
import SubscribeSection from "@/components/ui/home/subscribe-section";
import dynamic from "next/dynamic";
import { mockData } from "@/data/mockData";

import GetInTouch from "@/components/ui/common/get-in-touch";
import renderSvg from "@/svgImport";
import { highlightWords } from "../utility/highlightWords";
import TestimonialBanner from "@/components/ui/common/testimonial-banner";
import Curious from "@/components/ui/common/Curious";
import Image from "next/image";
// import BlurText from "../../components/bits/BlurText";
import { TextAnimate } from "@/components/magicui/text-animate";
import AnimatedContent from "@/components/bits/AnimatedContent";
import type { PartnerDetail } from "@/lib/types";
// import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import JumpingButtonsSection from "@/components/ui/home/jumping-buttons-section";

const ProductCatalog = dynamic(
  () => import("@/components/ui/productsComponents/product-catalog"),
  {
    loading: () => (
      <div className="h-64 w-full animate-pulse bg-gray-200 rounded-lg" />
    ),
  }
);

const ProductCategories = dynamic(
  () => import("@/components/ui/productsComponents/product-categories"),
  {
    loading: () => (
      <div className="h-64 w-full animate-pulse bg-gray-200 rounded-lg" />
    ),
  }
);
const ProductFeatures = dynamic(
  () => import("@/components/ui/home/product-features"),
  {
    loading: () => (
      <div className="h-64 w-full animate-pulse bg-gray-200 rounded-lg" />
    ),
    ssr: true,
  }
);
const FAQs = dynamic(() => import("@/components/ui/home/faqs-client"));
// Add this interface before the HomePage component

export default async function HomePage() {
  const data = mockData.home;
  const partnerDetails: PartnerDetail[] = [
    {
      name: "Mr Filepe Gracia",
      company: "Inroprin - Peru",
      designation: "Marketing Head",
      src: "filepe",
      desc: "Impressed by the quality of the kits and program, happy with the services and looking forward to expand in Peru markets.",
    },
  ]; // the partner list is defined here as an array because in future if there is multiple partner we can add them here
  return (
    <>
      <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-28 bg-primary pt-16 sm:pt-20 md:pt-16 lg:pt-20 xl:pt-24 relative">
        {/* Grid background with lower z-index */}
        <div className="absolute inset-0 dark:bg-grid-white/[0.2] bg-grid-black/[0.2] z-0" />

        {/* Gradient overlay with higher z-index */}
        <div className="absolute pointer-events-none inset-0 bg-primary [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] z-10" />

        {/* Content with highest z-index */}
        <div className="relative z-20 flex flex-col space-y-16 lg:flex-row lg:space-y-0 justify-between py-10">
          <div className="w-full">
            {/* <a href="#product-features-component" className="mb-6 ">
              <NewFeaturesCard />
            </a> */}

            {/* Main Text */}

            <div className="space-y-4 border">
              {/* Main Headline */}
              <div className="font-cobaltRidge w-full text-wrap text-4xl md:text-6xl lg:text-7xl text-primary-foreground text-center md:text-left  md:w-[95%] leading-8">
                {/* <FlipText className="text-4xl font-bold -tracking-widest text-black dark:text-white md:text-7xl md:leading-[5rem]"> */}
                {/* <TextGenerateEffect
                  duration={0.4}
                  words= /> */}
                {highlightWords(
                  data.heading,
                  data.wordsToHighlight.text1,
                  "text-destructive"
                )}

                {/* </FlipText> */}

                {/* <BlurText
                  text=
                  delay={50}
                  animateBy="words"
                  direction="top"
                  className="font-cobaltRidge w-full text-wrap text-4xl md:text-6xl lg:text-7xl text-primary-foreground text-center md:text-left  md:w-[95%] leading-8"
                /> */}
                {/* {highlightWords(
                  data.heading,
                  data.wordsToHighlight.text1,
                  "text-destructive"
                )} */}
              </div>

              {/* Subtext */}
              <div className="text-[#F2D8FE] text-lg md:text-lg lg:text-xl font-tthoves font-medium w-[100%] lg:w-[50%] text-center md:text-left">
                <TextAnimate animation="slideUp" by="line">
                  {data.subheading}
                </TextAnimate>
              </div>
            </div>
          </div>

          {/* Replace the JumpingButtons with JumpingButtonsSection */}
          <JumpingButtonsSection />
        </div>
        <div className="py-10">
          {/* <a href=""> */}
          <Image
            src={renderImg("homeImage")}
            width={1000}
            height={1000}
            alt="home-image"
            className="w-full h-96 md:h-full object-cover md:object-contain rounded-xxl relative z-40"
            priority // Already correctly set for LCP optimization
            sizes="(max-width: 768px) 100vw, 1000px" // Add sizes attribute
          />
          {/* </a> */}
        </div>
        <div className="py-8 lg:py-16 relative z-40">
          <CeoReviewsContainer data={partnerDetails[0]} />
        </div>
      </div>
      <div className="w-full -mt-1">
        {/* <img src={renderImg("headerSection")} className="w-full" /> */}
        {renderSvg("headerSection")}
      </div>
      {/* Middle Part */}
      <div className="px-4 md:px-12 lg:px-16 text-black py-5 lg:py-10 xl:px-28 max-w-screen overflow-hidden">
        <div className="py-5 lg:py-10">
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <GlobalAwards />
          </AnimatedContent>
        </div>
        <div id="product-features-component" className=" lg:mx-0 lg:py-10">
          <AnimatedContent
            distance={100} // Reduced from 150
            direction="vertical"
            reverse={false}
            config={{ tension: 60, friction: 14 }} // Optimized spring physics
            initialOpacity={0.4} // Increased from 0.2
            animateOpacity
            scale={1.05} // Reduced from 1.1
            threshold={0.1} // Lower threshold for earlier animation
          >
            <ProductFeatures />
          </AnimatedContent>
        </div>
        <div>
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <ProductCatalog />
          </AnimatedContent>
        </div>
        <div className="py-6 w-full">
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            {/* <GlobalAwards /> */}
            <ProductCategories />
          </AnimatedContent>
        </div>
        <div className="w-screen -mx-4 md:-mx-12 lg:-mx-16 xl:-mx-28">
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <TestimonialBanner />
          </AnimatedContent>
        </div>
        <div className=" sm:mx-0">
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <SubscribeSection />
          </AnimatedContent>
        </div>

        {/* <div className="py-10 lg:py-20">
          <Ourteam />
        </div> */}
        {/* <div>
          <LatestPosts />
        </div> */}

        <div className="py-5 lg:py-20  sm:mx-0">
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <FAQs product="home" />
          </AnimatedContent>
        </div>

        <div className="sm:mb-24 ">
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <GetInTouch />
          </AnimatedContent>
        </div>
        <div>
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <Curious jumppingButton={data?.jumppingButton || []} />
          </AnimatedContent>
        </div>
      </div>
    </>
  );
}
