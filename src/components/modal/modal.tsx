import { ForwardedRef, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { X } from "lucide-react";

interface IModal {
  children: React.ReactNode;
  setIsComponentVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isComponentVisible: boolean;
  className?: { classNameContainer?: string, classNameContainerBox?: string }
}

export const Modal = forwardRef(function FormModal({
  children,
  isComponentVisible,
  setIsComponentVisible,
  className,
}: IModal, ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <>
      {isComponentVisible && (
        <div
          id="authentication-modal"
          className={`fixed z-30 left-0 top-0 w-screen h-screen text-[#25282A] ${className?.classNameContainerBox}`}
        >
          <div className="relative w-full h-full flex justify-center items-center">
            <div
              className={twMerge(`relative w-full max-w-[30rem] max-h-full mx-auto z-50 bg-white rounded-[1.3rem]`, className?.classNameContainer)}
              ref={ref}
            >
              <div className="relative bg-transparent rounded-[1.7rem] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-[2.5rem] py-[1.75rem]">
                <div className="flex flex-col">
                  <button
                    type="button"
                    className="bg-transparent hover:bg-gray-200 rounded-lg text-sm w-8 h-8 self-end inline-flex justify-center items-center"
                    data-modal-hide="authentication-modal"
                    onClick={() => setIsComponentVisible(false)}
                  >
                    <X className="w-6 h-6" />
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                {children}
              </div>
            </div>
            <span className={` w-screen h-screen absolute bg-[#D9D9D9] opacity-60`} onClick={() => setIsComponentVisible(false)}></span>
          </div>
        </div>
      )}
    </>
  );
})

