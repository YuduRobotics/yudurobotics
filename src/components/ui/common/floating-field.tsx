"use client";

import type { ChangeEvent } from "react";
import { useId } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type FieldOption = { value: string; label: string };

interface FloatingFieldProps {
  as?: "input" | "textarea" | "select";
  type?: string;
  name: string;
  label: string;
  value: string;
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  required?: boolean;
  disabled?: boolean;
  rows?: number;
  options?: FieldOption[];
  error?: string;
}

export default function FloatingField({
  as = "input",
  type = "text",
  name,
  label,
  value,
  onChange,
  required = false,
  disabled = false,
  rows = 4,
  options = [],
  error,
}: FloatingFieldProps) {
  const id = useId();

  const control = cn(
    "block w-full px-4 py-3 text-sm text-secondary-foreground bg-white border rounded-md appearance-none transition-colors focus:outline-none focus:ring-0 peer disabled:cursor-not-allowed disabled:bg-gray-50",
    error
      ? "border-red-500 focus:border-red-500"
      : "border-[#D6D6D8] focus:border-primary"
  );

  const labelClass = cn(
    "absolute left-2 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-sm duration-300 pointer-events-none",
    error ? "text-red-500" : "text-secondary-foreground",
    as !== "select" &&
      "peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100",
    "peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75",
    !error && "peer-focus:text-primary"
  );

  return (
    <div className="w-full">
      <div className="relative">
        {as === "textarea" && (
          <textarea
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            placeholder=" "
            rows={rows}
            required={required}
            disabled={disabled}
            className={cn(control, "resize-none")}
          />
        )}

        {as === "select" && (
          <>
            <select
              id={id}
              name={name}
              value={value}
              onChange={onChange}
              required={required}
              disabled={disabled}
              className={cn(control, "pr-10")}
            >
              <option value="" disabled />
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-secondary-foreground"
              aria-hidden="true"
            />
          </>
        )}

        {as === "input" && (
          <input
            id={id}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder=" "
            required={required}
            disabled={disabled}
            className={control}
          />
        )}

        <label htmlFor={id} className={labelClass}>
          {label}
          {required && <span className="text-red-500"> *</span>}
        </label>
      </div>
      {error && <p className="mt-1 px-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
