"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ContactForm from "./contact-us-form";

interface ContactFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultEnquiryType?: string;
  title?: string;
  description?: string;
}

export default function ContactFormDialog({
  open,
  onOpenChange,
  defaultEnquiryType,
  title = "Get in touch",
  description = "Fill in your details and our team will get back to you shortly.",
}: ContactFormDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="font-cobaltRidge text-2xl text-primary">
            {title}
          </DialogTitle>
          <DialogDescription className="font-tthoves text-secondary-foreground">
            {description}
          </DialogDescription>
        </DialogHeader>
        <ContactForm defaultEnquiryType={defaultEnquiryType} />
      </DialogContent>
    </Dialog>
  );
}
