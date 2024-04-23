"use client";

import { LoaderCircle } from "lucide-react";
import { useFormStatus } from "react-dom";

import { StyledButton } from "./styledButton";

export const ButtonSubmit = ({ content, className }: { content: string, className?:string }) => {
  const { pending } = useFormStatus();
  return (
    <>
      <StyledButton
        option="primary"
        icon={{
          element: pending ? <LoaderCircle className="animate-spin" /> : null,
          direction: "right",
        }}
        className={`justify-self-end px-5 py-2.5 md:text-sm  ${className}`}
        type="submit"
      >
        {content}
      </StyledButton>
    </>
  );
};
