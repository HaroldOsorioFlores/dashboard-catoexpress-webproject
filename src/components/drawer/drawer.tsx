"use client";

import { SquarePen, X } from "lucide-react";
import { ForwardedRef, forwardRef } from "react";

import { StyledButton } from "../ui";

interface IDrawer {
  children: React.ReactNode;
  setVisibleComponent: React.Dispatch<React.SetStateAction<boolean>>;
  visibleComponent: boolean;
  className?: { classNameContainer?: string; classNameContainerBox?: string };
}

export const Drawer = forwardRef(function FormModal(
  { children, visibleComponent, setVisibleComponent, className }: IDrawer,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <>
      <div
        className={`w-screen h-screen fixed top-0 z-30 ${
          !visibleComponent && "left-[-800rem]"
        } ${visibleComponent && "-left-3"} transition-all duration-200`}
      >
        <div
          className={`fixed h-screen max-w-xs md:max-w-2xl w-full p-4 overflow-y-auto bg-white z-40 `}
          ref={ref}
        >
          <div className="flex flex-col">
            <StyledButton
              option="onlyIcon"
              className="self-end"
              onClick={() => setVisibleComponent(false)}
              type="button"
            >
              <X className="w-6 h-6" />
              <span className="sr-only">Close modal</span>
            </StyledButton>
          </div>
          {children}
        </div>
        <span
          className={` w-screen h-screen absolute bg-[#D9D9D9] opacity-60 z-30 block`}
          onClick={() => setVisibleComponent(false)}
        ></span>
      </div>
    </>
  );
});
