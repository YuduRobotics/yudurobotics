"use client";
import React, { useEffect, useState, type JSX } from "react";
// import JumpingButtons from "../common/jumping-buttons";
import renderImg from "@/imgImport";
// import ContactForm from "../common/contact-us-form";
import BottomFooter from "./bottom-footer";
import renderSvg from "@/svgImport";
import { usePathname } from "next/navigation";
// import { tree } from "next/dist/build/templates/app-page";
import FooterIcon from "./fotterIcon";
import Link from "next/link";
import { Hourglass } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const route = [
    "home",
    "peecee",
    "roboki",
    "zing",
    "crawl_e",
    "klaw_b",
    "plode",
    "products",
    "partner",
  ];
  const iconColor = [
    "#BBA5FE",
    "#B3A61A",
    "#B3A61A",
    "#A5E8FE",
    "#A5E8FE",
    "#1AB374",
    "#BBA5FE",
    "#BBA5FE",
    "#BBA5FE",
  ];

  const social_share = [
    { name: "twitterIcon", link: "https://twitter.com/YuduRobotics/" },
    {
      name: "linkedInIcon",
      link: "https://www.linkedin.com/company/yudurobotics/posts/?feedView=all",
    },
    // { name: "fbIcon", link: "" },
    { name: "instaIcon", link: "https://www.instagram.com/yudurobotics/" },
    { name: "ytIcon", link: "https://www.youtube.com/@YuduRobotics" },
    // { name: "googleIcon", link: "" },
  ];
  const pathname = usePathname();
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(`${window.location.origin}${pathname}`);
    }
  }, [pathname]);
  const lastSegment = currentUrl.split("/").pop() || "-1";

  const index =
    route.indexOf(lastSegment) !== -1 ? route.indexOf(lastSegment) : -1;

  // const ishorizontal: string = "true";
  // let text1: string = "I'm here to";
  // let text2: string = "Join Forces";
  // let bgColor: string = "#2CF7A4";
  // let textColor: string = "#0A4029";

  interface Style {
    bgColor: string;
    textColor: string;
  }

  const styles: Record<number, Style> = {
    0: { bgColor: "#2CF7A4", textColor: "#0A4029" },
    1: { bgColor: "#602CF7", textColor: "#FAF9FE" },
    2: { bgColor: "#602CF7", textColor: "#FAF9FE" },
    3: { bgColor: "#F72D3E", textColor: "#FEF9F9" },
    4: { bgColor: "#F72D3E", textColor: "#FEF9F9" },
    5: { bgColor: "#F7812D", textColor: "#FEFBF9" },
    6: { bgColor: "#2CF7A4", textColor: "#0A4029" },
    7: { bgColor: "#2CF7A4", textColor: "#0A4029" },
    8: { bgColor: "#2CF7A4", textColor: "#0A4029" },
  };
  const contact_options = [
    {
      type: "Sales",
      text: "For all your business needs.",
      contact_by: "business@yudurobotics.com",
      contact_by2: "+91 960 604 7527",
      icon_image: <FooterIcon iconType="mail" color={iconColor[index]} />,
    },
    {
      type: "Technical Support",
      text: "Our friendly team is here to help.",
      contact_by: "support@yudurobotics.com",
      contact_by2: "+91 910 849 4203",
      icon_image: <FooterIcon iconType="mail" color={iconColor[index]} />,
    },
    {
      type: "Live chat",
      text: "Our friendly team is here to help.",
      contact_by: "start new chat",
      icon_image: <FooterIcon iconType="livechat" color={iconColor[index]} />,
    },
    {
      type: "Working hours",
      text: "Come say hello at our office HQ.",
      contact_by: "Monday to Friday 9:00 AM to 6:00 PM",
      icon_image: <Hourglass color={iconColor[index]} />,
    },
    // {
    //   type: "Phone",
    //   text: "",
    //   contact_by: "+91 960 675 5032",
    //   icon_image: <FooterIcon iconType="phone" color={iconColor[index]} />,
    // },
  ];

  if (index in styles) {
    // const { bgColor: newBgColor, textColor: newTextColor } = styles[index];
    // bgColor = newBgColor;
    // textColor = newTextColor;
    // text1 = "I'm Ready to";
    // text2 = "Join Forces";
  }

  const handleClick = () => {
    window.open("https://wa.me/917975705131", "_blank");
  };

  return (
    <div className="text-primary-foreground flex flex-col justify-around">
      {/* First Section */}
      {/* <div className="flex flex-col space-y-16 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center text-start items-center lg:items-start lg:text-start">
          <h1 className="font-cobaltRidge text-4xl lg:text-6xl">
            Ready to Innovate Together?
          </h1>
          <h1 className=" py-4 opacity-70 font-tthoves">
            Partner with us and drive the future of robotics.
          </h1>
        </div>
        <div className="flex">
          {index !== -1 && (
            <JumpingButtons
              ishorizontal={ishorizontal}
              text1={text1}
              text2={text2}
              bgColor={bgColor}
              textColor={textColor}
              link="/partner"
            />
          )}
        </div>
      </div> */}
      {/* Contact us Section */}
      <div className="py-20">
        <div className="flex flex-col  lg:items-start">
          <h1 className="font-tthoves">Contact us</h1>

          <h1 className="font-cobaltRidge text-3xl lg:text-4xl ">
            Chat to our friendly team
          </h1>
          <h1 className="font-tthoves py-4 opacity-70">
            We’d love to hear from you. Please fill out this form or shoot us an
            email.
          </h1>
        </div>

        <div
          id="footer-map"
          className="flex flex-col space-y-8 lg:flex-row lg:space-y-0 justify-between py-4 lg:py-20 "
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-4 lg:w-[50%] ">
            {contact_options.map(
              (
                value: {
                  type: string;
                  text: string;
                  contact_by: string;
                  icon_image: JSX.Element;
                  contact_by2?: string;
                },
                key: number
              ) => (
                <button
                  type="button"
                  key={key}
                  className={`flex flex-col space-y-2 text-left ${
                    value.type === "Live chat"
                      ? "cursor-pointer"
                      : "cursor-default"
                  }`}
                  onClick={() => {
                    if (value.type === "Live chat") {
                      handleClick(); // Trigger the Live Chat click event
                    }
                  }}
                >
                  <div>{value.icon_image}</div>
                  <h1 className="font-tthoves">{value.type}</h1>
                  <p className="font-tthoves opacity-70">{value.text}</p>
                  <p className="w-[70%] xl:text-lg md:text-base font-tthoves">
                    {value.contact_by}
                  </p>
                  <p className="w-[70%] xl:text-lg md:text-base font-tthoves">
                    {value.contact_by2}
                  </p>
                </button>
              )
            )}
          </div>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.7277701730914!2d77.6595308!3d12.860851499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6d68e15b4c7f%3A0x26b1f4d88e3e6927!2sYudu%20Robotics!5e0!3m2!1sen!2sin!4v1740458636266!5m2!1sen!2sin"
            // width="600"
            height="450"
            className="rounded-xl max-w-[600px] w-full "
            style={{ border: 0 }}
            // allowFullScreen=""
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          />
          {/* <ContactForm /> */}
        </div>
      </div>

      {/* Footer-Bottom */}
      <div className="flex flex-col space-y-12">
        <div className="flex justify-between">
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-3 justify-start items-center">
              {renderSvg("logoYudoRobo")}
            </div>
            <p className="font-tthoves opacity-70 w-[70%] text-xl">
              Empowering innovation and creativity through cutting-edge
              robotics.
            </p>
          </div>

          {/* <div className="hidden sm:flex flex-col  space-y-4 ">
            <h1 className="text-lg font-tthoves opacity-70">
              Get the Plode app
            </h1>
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
          </div> */}
        </div>

        <BottomFooter />

        <div className="flex flex-col space-y-4 lg:space-x-32 justify-start lg:justify-start lg:flex-row lg:space-y-0 ">
          <p className="text-xs lg:text-lg font-tthoves opacity-70">
            © 2026 Yudu Robotics. A division of Evobi Automations Pvt.Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {social_share.map((item, key) => (
              <div key={key}>
                <Link href={item.link} target="_blank" className="opacity-70">
                  {renderSvg(item.name)}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-[90vh]  w-full flex justify-center items-center">
        <Image
          width={1000}
          height={1000}
          src={renderImg("madeInIndia")}
          alt=""
          className=" w-auto h-36 object-contain"
        />
      </div>
    </div>
  );
};

export default Footer;
