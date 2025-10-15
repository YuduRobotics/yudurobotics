"use client";
// components/ui/FloatingWhatsApp.tsx
import React, { useEffect, useState } from "react";
import renderSvg from "@/svgImport";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ContactForm from "./contact-us-form";
import { X } from "lucide-react";
import { sendGAEvent, sendGTMEvent } from "@next/third-parties/google";

const FloatingWhatsApp = () => {
  // const router = useRouter();
  const phoneNumber = "919606755032";
  const [isOpen, setIsOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    const hasShownPopup = sessionStorage.getItem("whatsappPopupShown");

    if (!hasShownPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("whatsappPopupShown", "true");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClick = () => {
    sendGTMEvent({ event: "buttonClicked", value: "whatsapp clicks" });
    sendGAEvent({ event: "buttonClicked", value: "whatsapp clicks" });
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          onClick={handleClick}
          className="fixed bottom-20 sm:right-4 right-2 outline-none"
          style={{ zIndex: 50 }}
        >
          <div>{renderSvg("floatingWhatsApp")}</div>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0 bg-gray-50 mr-2 md:mr-4 rounded-lg font-cobaltRidge">
        <div className="flex justify-between items-center bg-primary p-3 text-white rounded-t-lg">
          <h4 className="font-medium">Chat with us!</h4>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="hover:bg-green-700 rounded-full p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="p-4 space-y-4">
          <div className="bg-white rounded-lg p-3 shadow-sm font-tthoves">
            <p className="text-sm text-gray-600 mb-1">Hi! 👋</p>
            <p className="text-sm text-gray-600">How can i help you</p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleClick}
              className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
            >
              WhatsApp
            </button>
            <button
              type="button"
              onClick={() => {
                setShowContactForm(true);
              }}
              className="w-full bg-muted/90 text-white py-2 px-4 rounded-md hover:bg-secondary transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </PopoverContent>

      {/* Add Dialog for Contact Form */}
      <Dialog open={showContactForm} onOpenChange={setShowContactForm}>
        <DialogContent className="sm:max-w-[600px] p-1 bg-white border-none">
          <div className="flex justify-end  absolute top-2 right-2">
            <button
              type="button"
              name="close"
              onClick={() => setShowContactForm(false)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="h-4 w-4" color="black" />
            </button>
          </div>
          <ContactForm />
        </DialogContent>
      </Dialog>
    </Popover>
  );
};

export default FloatingWhatsApp;
