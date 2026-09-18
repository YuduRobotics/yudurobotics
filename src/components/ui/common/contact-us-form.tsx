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
import FloatingField from "./floating-field";
import { Check, Loader2 } from "lucide-react";

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
  const [errors, setErrors] = useState<Record<string, string>>({});

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
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? target.checked : value,
    }));
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};

    if (!formData["entry.1725892135"].trim()) {
      nextErrors["entry.1725892135"] = "Please enter your full name.";
    }

    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!formData["entry.2098983406"].trim()) {
      nextErrors["entry.2098983406"] = "Please enter your email.";
    } else if (!emailRegex.test(formData["entry.2098983406"])) {
      nextErrors["entry.2098983406"] = "Enter a valid email address.";
    }

    const phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if (!formData["entry.1155783579"].trim()) {
      nextErrors["entry.1155783579"] = "Please enter your phone number.";
    } else if (!phoneRegex.test(formData["entry.1155783579"])) {
      nextErrors["entry.1155783579"] = "Enter a valid phone number.";
    }

    if (!formData["entry.1655141018"]) {
      nextErrors["entry.1655141018"] = "Please select an enquiry type.";
    }

    if (!formData["entry.557944683"].trim()) {
      nextErrors["entry.557944683"] = "Please enter a message.";
    }

    if (!formData.privacyPolicy) {
      nextErrors.privacyPolicy = "Please accept the privacy policy.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

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

      await new Promise((resolve) => setTimeout(resolve, 3000));
      setIsSubmitting(false);
      setSubmitSuccess(true);
    } catch {
      setIsSubmitting(false);
      setErrors({ form: "Submission failed. Please try again." });
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
        {submitSuccess ? (
          <div className="flex flex-col items-center justify-center gap-3 rounded-md border border-primary/20 bg-primary/5 px-6 py-10 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Check className="h-6 w-6 text-primary" />
            </span>
            <h3 className="font-tthoves-semiBold text-lg text-secondary-foreground">
              Thank you for reaching out!
            </h3>
            <p className="font-tthoves text-sm text-secondary-foreground">
              Your message has been sent. Our team will get back to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <FloatingField
              name="entry.1725892135"
              label="Full Name"
              value={formData["entry.1725892135"]}
              onChange={handleChange}
              error={errors["entry.1725892135"]}
              required
            />

            <FloatingField
              type="email"
              name="entry.2098983406"
              label="Email"
              value={formData["entry.2098983406"]}
              onChange={handleChange}
              error={errors["entry.2098983406"]}
              required
            />

            <FloatingField
              type="tel"
              name="entry.1155783579"
              label="Phone"
              value={formData["entry.1155783579"]}
              onChange={handleChange}
              error={errors["entry.1155783579"]}
              required
            />

            <FloatingField
              as="select"
              name="entry.1655141018"
              label="Enquiry Type"
              value={formData["entry.1655141018"]}
              onChange={handleChange}
              error={errors["entry.1655141018"]}
              disabled={defaultEnquiryType !== ""}
              required
              options={[
                { value: "Partner", label: "Partner" },
                { value: "Product Enquiry", label: "Product Enquiry" },
                { value: "Book a free demo", label: "Book a free demo" },
                { value: "Others", label: "Others" },
              ]}
            />

            <FloatingField
              as="textarea"
              name="entry.557944683"
              label="Message"
              value={formData["entry.557944683"]}
              onChange={handleChange}
              error={errors["entry.557944683"]}
              required
            />

            <div>
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="privacyPolicy"
                    name="privacyPolicy"
                    type="checkbox"
                    checked={formData.privacyPolicy}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-secondary-foreground text-primary focus:ring-primary"
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
                        e.preventDefault();
                        handleDialogOpen("privacy");
                      }}
                      className="font-tthoves text-primary underline underline-offset-2"
                    >
                      privacy policy
                    </button>
                    .
                  </label>
                </div>
              </div>
              {errors.privacyPolicy && (
                <p className="mt-1 px-1 text-xs text-red-500">
                  {errors.privacyPolicy}
                </p>
              )}
            </div>

            {errors.form && (
              <p className="text-sm text-red-500">{errors.form}</p>
            )}

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-tthoves-medium text-lg text-primary-foreground shadow-lg transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
              disabled={isSubmitting}
            >
              {isSubmitting && <Loader2 className="h-5 w-5 animate-spin" />}
              {isSubmitting ? "Submitting..." : submitButtonText}
            </button>
          </form>
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
