// components/Footer.js
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import PrivacyContent from "./PrivacyContent";
import TermsContent from "./TermsContent";
import WarrantyContent from "./WarrantyContent";
import renderImg from "@/imgImport";
const footerData = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "/products", dialog: "" },
      { name: "TED", href: "/peecee", dialog: "" },
      { name: "Zing", href: "/zing", dialog: "" },
      { name: "Crawl-e", href: "/crawl_e", dialog: "" },
      { name: "Roboki", href: "/roboki", dialog: "" },
      { name: "Klaw-b", href: "/klaw_b", dialog: "" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Terms", href: "#", dialog: "terms" },
      { name: "Privacy", href: "#", dialog: "privacy" },
      { name: "Warranty", href: "#", dialog: "warranty" },
      // { name: "Cookies", href: "#" },
      // { name: "Licenses", href: "#" },
      // { name: "Settings", href: "#" },
      
    ],
  },
  // {
  //   title: "Company",
  //   links: [
  //     { name: "About us", href: "#" },
  //     { name: "Careers", href: "#" },
  //     // { name: "Press", href: "#" },
  //     // { name: "News", href: "#" },
  //     // { name: "Media kit", href: "#" },
  //     { name: "Contact", href: "#" },
  //   ],
  // },
  // {
  //   title: "Resources",
  //   links: [
  //     { name: "Blog", href: "#" },
  //     { name: "Newsletter", href: "#" },
  //     { name: "Events", href: "#" },
  //     { name: "Help centre", href: "#" },
  //     { name: "Tutorials", href: "#" },
  //     { name: "Support", href: "#" },
  //   ],
  // },
  // {
  //   title: "Use cases",
  //   links: [
  //     { name: "Startups", href: "#" },
  //     { name: "Enterprise", href: "#" },
  //     { name: "Government", href: "#" },
  //     { name: "SaaS centre", href: "#" },
  //     { name: "Marketplaces", href: "#" },
  //     { name: "Ecommerce", href: "#" },
  //   ],
  // },
  {
    title: "Social",
    links: [
      { name: "Twitter", href: "https://twitter.com/YuduRobotics/", dialog: "" },
      { name: "LinkedIn", href: "https://www.linkedin.com/company/yudurobotics/posts/?feedView=all", dialog: "" },
      { name: "YouTube", href: "https://www.youtube.com/@YuduRobotics", dialog: "" },
      // { name: "GitHub", href: "#" },
      // { name: "AngelList", href: "#" },
      // { name: "Dribbble", href: "#" },
    ],
  },
];

export default function BottomFooter() {
  const [activeDialog, setActiveDialog] = useState(null);

  // Function to handle opening of the dialog content
  const handleDialogOpen = (dialogType: any) => {
    setActiveDialog(dialogType);
  };

  const handleDialogClose = () => {
    setActiveDialog(null);
  };
  return (
    <footer className="py-6  font-tthoves">
      <div className="">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 item-center">
          {footerData.map((section, index) => (
            <div key={index}>
              <h4 className="font-tthoves-medium opacity-70 mb-4 text-lg sm:text-lg md:text-base lg:text-lg xl:text-xl">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.dialog ? (
                      <button
                        onClick={() => handleDialogOpen(link.dialog)}
                        className="text-primary-foreground  transition-colors duration-200 text-sm lg:text-lg font-tthoves-medium"
                      >
                        {link.name}
                      </button>
                    ) :
                      (
                        <a
                          href={link.href}
                          className="text-primary-foreground transition-colors duration-200 text-sm lg:text-lg font-tthoves-medium"
                        >
                          {link.name}
                        </a>
                      )
                    }
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Dialog open={!!activeDialog} onOpenChange={handleDialogClose}>
        <DialogContent
          className="w-[100%] h-[80vh] overflow-y-auto  text-black mx-auto"
          style={{
            overflowY: "auto",
            WebkitOverflowScrolling: "touch", // Smooth scrolling on iOS
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // Internet Explorer/Edge
          }}
        >
          <DialogHeader>
            <DialogTitle>
              {activeDialog === "privacy"
                ? "Privacy Policy"
                : activeDialog === "terms" ? "Terms of Service" : "Warranty"}
            </DialogTitle>
            <DialogDescription className="text-black">
              {activeDialog === "warranty"
                ? "Last Updated: 25th February 2026"
                : "Last Updated: 31st October 2024"}
            </DialogDescription>
          </DialogHeader>

          <div className="text-black ">
            {activeDialog === "privacy" && <PrivacyContent />}
            {activeDialog === "terms" && <TermsContent />}
            {activeDialog === "warranty" && <WarrantyContent />}
          </div>
        </DialogContent>
      </Dialog>
      {/* <div className=" sm:hidden flex-col space-y-4 mt-4">
        <h1 className="text-xl">Get the Plode app</h1>
        <div className="flex gap-5">
          <a
            href="https://apps.apple.com/us/app/plode/id1580203387"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className=""
              src={renderImg("appStore")}
              alt="Download on the App Store"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.bibox.bisoftsuite&hl=en_IN&pli=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className=""
              src={renderImg("googlePlay")}
              alt="Get it on Google Play"
            />
          </a>
        </div>
      </div> */}
    </footer>
  );
}