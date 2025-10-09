/* eslint-disable @typescript-eslint/no-explicit-any */
// components/ContactForm.tsx
"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import PrivacyContent from "../../ui/footer/PrivacyContent";
import TermsContent from "../../ui/footer/TermsContent";
import { cn } from "@/lib/utils";

// Add these props to the component
interface ContactFormProps {
  submitButtonText?: string;
  defaultEnquiryType?: string;
  className?: string;
  classNameInner?: string;
}

export default function ContactForm({
  submitButtonText = "Send message",
  defaultEnquiryType = "",
  className = "",
  classNameInner = "",
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [formData, setFormData] = useState({
    "entry.1725892135": "", // Full Name
    "entry.2098983406": "", // Email
    "entry.1155783579": "", // Phone
    "entry.1655141018": defaultEnquiryType, // Enquiry Type with default value
    "entry.557944683": "", // Message
    privacyPolicy: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation checks
    if (
      !formData["entry.1725892135"] ||
      !formData["entry.2098983406"] ||
      !formData["entry.1155783579"] ||
      !formData["entry.1655141018"] ||
      !formData["entry.557944683"]
    ) {
      alert("Please fill all required fields!");
      setIsSubmitting(false);
      return;
    }

    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegex.test(formData["entry.2098983406"])) {
      alert("Enter a valid email address!");
      setIsSubmitting(false);
      return;
    }

    const phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if (!phoneRegex.test(formData["entry.1155783579"])) {
      alert("Enter a valid phone number!");
      setIsSubmitting(false);
      return;
    }

    const transformedData: Record<string, string> = {
      "entry.1725892135": formData["entry.1725892135"], // Full Name field
      "entry.2098983406": formData["entry.2098983406"], // Email field
      "entry.1155783579": formData["entry.1155783579"], // Phone field
      "entry.1655141018": formData["entry.1655141018"], // Enquiry Type
      "entry.557944683": formData["entry.557944683"], // Message field
      privacyPolicy: formData.privacyPolicy.toString(), // Convert boolean to string
    };

    // Convert to URLSearchParams for submission
    const formDataStr = new URLSearchParams(transformedData).toString();
    const url =
      "https://docs.google.com/forms/d/e/1FAIpQLSeehS-RjlfQrM6CaPUBqEWNkqIvAquMViMqa6mDAJcVDW9q1A/formResponse";

    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formDataStr,
        mode: "no-cors",
      });

      // Simulate delay for UX purposes
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setIsSubmitting(false);
      setSubmitSuccess(true);
    } catch (error) {
      setIsSubmitting(false);
      alert("Submission failed. Please try again.");
    }
  };

  const [activeDialog, setActiveDialog] = useState(null);

  // Function to handle opening of the dialog content
  const handleDialogOpen = (dialogType: any) => {
    //e.preventDefault();
    setActiveDialog(dialogType);
  };

  const handleDialogClose = () => {
    setActiveDialog(null);
  };

  return (
    <div className={`flex items-center w-full ${className}`}>
      <div className={cn("w-full mx-auto", classNameInner)}>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Updated Form Fields with floating labels */}
          <div className="relative">
            <input
              type="text"
              name="entry.1725892135"
              value={formData["entry.1725892135"]}
              onChange={handleChange}
              placeholder=" "
              required
              className="block px-4 py-3 w-full text-sm text-secondary-foreground bg-white border border-[#D6D6D8] rounded-sm appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            />
            <label className="absolute text-sm text-secondary-foreground duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
              Full Name
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              name="entry.2098983406"
              value={formData["entry.2098983406"]}
              onChange={handleChange}
              placeholder=" "
              required
              className="block px-4 py-3 w-full text-sm text-secondary-foreground bg-white border border-[#D6D6D8] rounded-sm appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            />
            <label className="absolute text-sm text-secondary-foreground duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
              Email
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              name="entry.1155783579"
              value={formData["entry.1155783579"]}
              onChange={handleChange}
              placeholder=" "
              required
              className="block px-4 py-3 w-full text-sm text-secondary-foreground bg-white border border-[#D6D6D8] rounded-sm appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            />
            <label className="absolute text-sm text-secondary-foreground duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
              Phone
            </label>
          </div>

          <div className="relative">
            <select
              name="entry.1655141018"
              value={formData["entry.1655141018"]}
              onChange={handleChange}
              required
              disabled={defaultEnquiryType !== ""}
              className="block px-4 py-3 w-full text-sm text-secondary-foreground bg-white border border-[#D6D6D8] rounded-sm appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            >
              <option value="" disabled />
              <option value="Partner">Partner</option>
              <option value="Product Enquiry">Product Enquiry</option>
              <option value="Book a free demo">Book a free demo</option>
              <option value="Others">Others</option>
            </select>
            <label className="absolute text-sm text-secondary-foreground duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
              Enquiry Type
            </label>
          </div>

          <div className="relative">
            <textarea
              name="entry.557944683"
              value={formData["entry.557944683"]}
              onChange={handleChange}
              placeholder=" "
              rows={4}
              required
              className="block px-4 py-3 w-full text-sm text-secondary-foreground bg-white border border-[#D6D6D8] rounded-sm appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            />
            <label className="absolute text-sm text-secondary-foreground duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
              Message
            </label>
          </div>

          {/* Privacy Policy */}
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="privacyPolicy"
                name="privacyPolicy"
                type="checkbox"
                checked={formData.privacyPolicy}
                onChange={handleChange}
                className="focus:ring-primary h-4 w-4 border-secondary-foreground text-sm text-secondary-foreground rounded-lg"
                required
              />
            </div>
            <div className="ml-2 text-sm">
              <label
                htmlFor="privacyPolicy"
                className="font-tthoves text-secondary-foreground"
              >
                You agree to our friendly{" "}
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent form submission
                    handleDialogOpen("privacy");
                  }}
                  className="font-tthoves text-secondary-foreground underline"
                >
                  privacy policy
                </button>
                .
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-primary cursor-pointer text-primary-foreground rounded-md shadow-lg font-tthoves-medium text-lg hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : submitButtonText}
            </button>
          </div>
        </form>
        {submitSuccess && (
          <p className="text-primary mt-4">Form submitted successfully!</p>
        )}
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
                : "Terms & Conditions"}
            </DialogTitle>
            <DialogDescription className="text-black">
              {activeDialog === "privacy"
                ? "Last Updated: 31st October 2024"
                : "Last Updated: 31st October 2024"}
            </DialogDescription>
          </DialogHeader>

          <div className="text-black ">
            {activeDialog === "privacy" && <PrivacyContent />}
            {activeDialog === "terms" && <TermsContent />}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
