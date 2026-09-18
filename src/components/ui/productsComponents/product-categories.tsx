"use client";
import React, { useEffect, useState, useMemo } from "react";
import ProductGrid from "./product-grid";
import Link from "next/link";
import { products } from "@/data/mockData";
import Image from "next/image";
import { Check } from "lucide-react";

interface Products {
  name: string;
  description: string;
  image: string;
  category: string;
  type: string;
  ageGroup: string;
  link: string;
  features?: string[];
}

export default function ProductCategories() {
  const product_categories = ["Codable", "Animatronics", "Mechanical"];

  const initialFilters = useMemo(
    () => [
      { name: "Hardware", active: false },
      { name: "Software", active: false },
      { name: "Curriculum", active: false },
    ],
    []
  );

  const initialAgeGroups = useMemo(
    () => [
      { name: "Age 5-8", active: false },
      { name: "Age 9-12", active: false },
      { name: "Age 12+", active: false },
    ],
    []
  );

  const initialProductDetails = useMemo(
    () => ({
      name: "",
      description: "",
      image: "",
      category: "",
      type: "",
      ageGroup: "",
      link: "",
      features: [],
    }),
    []
  );

  const [filters, setFilters] = useState(initialFilters);
  const [ageGroups, setAgeGroups] = useState(initialAgeGroups);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    product_categories[0]
  );
  const [productDetails, setProductDetails] = useState<Products>(
    initialProductDetails
  );
  const [selectedProduct, setSelectedProduct] = useState<number>(0);
  const allowedProductNames = ["TED", "Roboki", "Zing", "Crawl-e", "Klaw-b"];
  const [isAllowedFlag, setIsAllowedFlag] = useState<boolean>(true);

  // Get the active filter (type)
  const activeFilter = filters.find((filter) => filter.active)?.name;

  // Get the active age group
  const activeAgeGroup = ageGroups.find((ageGroup) => ageGroup.active)?.name;

  // Filter products based on selected category, active type filter, and active age group
  const filteredProducts = useMemo(
    () =>
      products.filter(
        (product) =>
          (!selectedCategory || product.category === selectedCategory) &&
          (!activeFilter || product.type === activeFilter) &&
          (!activeAgeGroup || product.ageGroup === activeAgeGroup)
      ),
    [selectedCategory, activeFilter, activeAgeGroup]
  );

  const limitedProducts = useMemo(
    () => filteredProducts.slice(0, 4),
    [filteredProducts]
  );

  // Update product details when the category or other filters change
  useEffect(() => {
    if (filteredProducts.length > 0) {
      setIsAllowedFlag(filteredProducts.length !== 1);
      setProductDetails(filteredProducts[0]);
    } else {
      setProductDetails(initialProductDetails);
    }
  }, [filteredProducts, initialProductDetails]);

  // handle ProductClick
  const handleProductClick = (index: number, product: Products) => {
    setProductDetails(product);
    setSelectedProduct(index);
    const isAllowed = allowedProductNames.includes(product.name);
    setIsAllowedFlag(isAllowed);
  };

  // Handle category selection
  const handleCategorySelection = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  return (
    <div className="flex flex-col space-y-10 lg:space-y-20 py-7 lg:py-14">
      <div className="flex flex-col space-y-2 lg:flex-row">
        <div className="flex flex-col space-y-2 lg:space-y-6 w-[100%] md:w-[35%] lg:w-[40%] font-tthoves-semiBold">
          <p className="text-primary font-tthoves-semiBold text-xs lg:text-start">
            Product Categories
          </p>
          <div className="flex flex-col space-y-3 lg:ml-0 xl:ml-4 items-center ">
            {product_categories.map((category: string, i: number) => (
              <button
                type="button"
                key={category}
                className={`flex justify-start rounded-sm w-full sm:p-2  items-center font-tthoves-semiBold sm:font-bold text-sm lg:text-base cursor-pointer ${
                  selectedCategory === category ||
                  (selectedCategory === null && i === 0)
                    ? "text-primary bg-purple-100"
                    : "hover:text-primary hover:bg-purple-50"
                }`}
                onClick={() => handleCategorySelection(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        {limitedProducts.length > 0 && (
          <>
            <div className="flex flex-col ">
              <div className="container">
                {limitedProducts.length > 0 && (
                  <ProductGrid
                    products={limitedProducts}
                    handleProductClick={handleProductClick}
                    selectedProduct={selectedProduct}
                  />
                )}
              </div>
            </div>
            <div className="hidden md:flex flex-col space-y-4 bg-card-foreground rounded-xlg lg:w-[90%] p-8 ">
              <div>
                {productDetails.image && (
                  <Image
                    width={500}
                    height={500}
                    alt={productDetails.name || "Product image"}
                    src={productDetails.image}
                    className="w-[100%]"
                  />
                )}
              </div>
              <div>
                <h1 className="font-tthoves-semiBold text-xl">
                  {productDetails.name}
                </h1>
                <p className="font-tthoves text-lg py-1">
                  {productDetails.description}
                </p>

                {Array.isArray(productDetails.features) &&
                  productDetails.features.length > 0 && (
                    <ul className="mt-4">
                      {productDetails.features.map((feature, i) => (
                        <li
                          key={`feature-${i}`}
                          className="flex items-center space-x-2 py-1"
                        >
                          <span className="bg-white rounded-full p-2">
                            <Check className="text-primary" size={12} />
                          </span>
                          <span className="font-tthoves text-base">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                {isAllowedFlag ? (
                  <Link
                    href={productDetails.link}
                    className="text-primary mt-4 text-base font-bold hover:scale-125"
                  >
                    <div className="flex space-x-2 mt-4 items-center">
                      <div>Learn More</div>
                      <div>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                        >
                          <title>Arrow right</title>
                          <path
                            d="M1.16699 7.00008H12.8337M12.8337 7.00008L7.00033 1.16675M12.8337 7.00008L7.00033 12.8334"
                            stroke="#4A1FCC"
                            strokeWidth="1.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="text-primary text-base font-bold flex space-x-2 mt-4 items-center">
                    
                  </div>
                )}
              </div>
            </div>
          </>
        )}
        {limitedProducts.length === 0 && (
          <div className="flex justify-end items-end font-tthoves py-20">
            New Products Coming Soon...
          </div>
        )}
        <Link
          href="/products"
          className="flex items-center justify-center space-x-3 md:hidden pt-6"
        >
          <div className="font-tthoves-semiBold text-[#4A1FCC] font-md">
            View all products
          </div>
          <div>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
            >
              <title>Arrow right</title>
              <path
                d="M1.16699 7.00008H12.8337M12.8337 7.00008L7.00033 1.16675M12.8337 7.00008L7.00033 12.8334"
                stroke="#4A1FCC"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Link>
      </div>
      <div className="border-b border-gray-300 flex-grow pt-6" />
    </div>
  );
}
