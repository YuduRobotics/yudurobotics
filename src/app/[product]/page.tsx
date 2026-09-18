/* eslint-disable @typescript-eslint/no-explicit-any */
// import dynamic from "next/dynamic";
import { mockData } from "@/data/mockData";
import { notFound } from "next/navigation";
import Plode from "@/page/Plode";
import Zing from "@/page/Zing";
import Peecee from "@/page/Peecee";
import Roboki from "@/page/Roboki";
import CrawlE from "@/page/CrawlE";
import KlawB from "@/page/KlawB";

// const FAQs = dynamic(() => import("@/components/ui/home/faqs"), {
//   ssr: false, // This disables server-side rendering for the FAQ component
// });

export async function generateStaticParams() {
  // Fetch or define the list of product slugs/IDs
  const products = ["roboki", "peecee", "zing", "crawl_e", "klaw_b", "plode"]; // Example product slugs

  return products.map((product) => ({
    product, // This will create paths like /roboki, /peecee, etc.
  }));
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export default async function ProductPage({ params }: any) {
  const { product } = await params;

  const data = mockData[product as keyof typeof mockData];

  if (!data) {
    // Redirect or render 404 page when the product doesn't exist
    notFound();
  }
  const route = ["peecee", "roboki", "zing", "crawl_e", "klaw_b", "plode"];

  const index = route.indexOf(product);

  // const ishorizontal: string = "true";
  // const text1: string = "I'm here to";
  // const text2: string = "Join Forces";
  // const bgColor: string = "#2CF7A4";
  // const textColor: string = "#0A4029";

  interface Style {
    text1: string;
    text2: string;
    bgColor: string;
    textColor: string;
  }

  const styles: Record<number, Style> = {
    0: {
      text1: "I’m here to",
      text2: "Join Forces",
      bgColor: "#2CF7A4",
      textColor: "#0A4029",
    },
    1: {
      text1: "Own One",
      text2: "Now!",
      bgColor: "#602CF7",
      textColor: "#FAF9FE",
    },
    2: {
      text1: "Own One",
      text2: "Now!",
      bgColor: "#602CF7",
      textColor: "#FAF9FE",
    },
    3: {
      text1: "Own One",
      text2: "Now!",
      bgColor: "#F72D3E",
      textColor: "#FEF9F9",
    },
    4: {
      text1: "Own One",
      text2: "Now!",
      bgColor: "#F72D3E",
      textColor: "#FEF9F9",
    },
    5: {
      text1: "Own One",
      text2: "Now!",
      bgColor: "#F7812D",
      textColor: "#FEFBF9",
    },
    6: {
      text1: "Button",
      text2: "CTA",
      bgColor: "#2CF7A4",
      textColor: "#0A4029",
    },
  };

  if (index >= 0 && index in styles) {
    // const {
    //   text1: newText1,
    //   text2: newText2,
    //   bgColor: newBgColor,
    //   textColor: newTextColor,
    // } = styles[index];
    // text1 = newText1;
    // text2 = newText2;
    // bgColor = newBgColor;
    // textColor = newTextColor;
  }
  switch (index) {
    case 0:
      return <Peecee />;
    case 1:
      return <Roboki />;
    case 2:
      return <Zing />;
    case 3:
      return <CrawlE />;
    case 4:
      return <KlawB />;
    case 5:
      return <Plode />;
    default:
      return null; // or handle the default case if necessary
  }
}
