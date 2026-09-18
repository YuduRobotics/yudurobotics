"use client";

import dynamic from "next/dynamic";

const FAQs = dynamic(() => import("@/components/ui/home/faqs"), {
  ssr: false,
});

export default function FAQsClient(props: { product: string }) {
  return <FAQs {...props} />;
}
