import { RemoveScroll } from "react-remove-scroll";
import { useRef, ReactNode } from "react";

type ModalWrapperProps = {
  children: ReactNode;
  isOpen: boolean;
  onCloseClick: () => void;
};
const ModalWrapper = ({
  children,
  isOpen,
  onCloseClick,
}: ModalWrapperProps) => {
  const backgroundDivRef = useRef(null);
  if (!isOpen) {
    return null;
  }
  return (
    <RemoveScroll>
      <div
        ref={backgroundDivRef}
        onClick={(e) => {
          if (e.target === backgroundDivRef.current) {
            onCloseClick();
          }
        }}
        className=" z-20 fixed backdrop-blur-sm top-0 flex justify-end items-start left-0 w-full h-full bg-black/30"
      >
        <button className="absolute top-0 right-0 p-2 " onClick={onCloseClick}>
          <i className=" text-4xl text-emerald-400 fa-regular fa-circle-xmark"></i>
        </button>
        {children}
      </div>
    </RemoveScroll>
  );
};

export default ModalWrapper;
