import type { Metadata } from "next";
import "../globals.css";
import Footer from "@/components/ui/footer/footer";
import renderSvg from "@/svgImport";
import ProductInteractiveLayout from "@/app/ProductInteractiveLayout";
import { productMetadata } from "@/lib/product-metadata";

// Generate metadata at request time
export async function generateMetadata({
  params,
}: {
  params: Promise<{ product: string }>;
}): Promise<Metadata> {
  const { product } = await params;
  const actualProduct =
    product === "roboki" ? "peecee" : product === "crawl_e" ? "zing" : product;

  if (!(actualProduct in productMetadata)) {
    return {
      title: "Product Not Found | Yudu Robotics",
      description: "The requested product could not be found.",
      openGraph: {
        title: "Product Not Found",
        description: "Product not found",
      },
      twitter: {
        card: "summary",
        title: "Product Not Found",
        description: "Product not found",
      },
    };
  }

  const metadata =
    productMetadata[actualProduct as keyof typeof productMetadata];
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.openGraph.title,
      description: metadata.openGraph.description,
      images: metadata.openGraph.images,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.twitter.title,
      description: metadata.twitter.description,
      images: metadata.twitter.images,
    },
  };
}

export default async function ProductLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ product: string }>;
}) {
  const { product } = await params;
  let currentProduct = product === "roboki" ? "peecee" : product;
  currentProduct = currentProduct === "crawl_e" ? "zing" : currentProduct;

  return (
    <div className={currentProduct === "klaw_b" ? "klaw" : currentProduct}>
      <ProductInteractiveLayout>
        {children}
        <div className="w-full -mb-1 mt-24 pt-24">
          {renderSvg("bottomSection")}
        </div>
        <div className="px-8 lg:px-28 py-4 bg-primary">
          <Footer />
        </div>
      </ProductInteractiveLayout>
    </div>
  );
}
