import clsx from "clsx";
import React from "react";
import { BUTTON_VARIANT } from "@/utils/enum";

const Button = ({ className, variant = BUTTON_VARIANT.PRIMARY, children }) => {
  return (
    <button
      className={clsx(
        variant === BUTTON_VARIANT.PRIMARY && [
          "flex items-center rounded-lg px-8 h-[60px]",
          "text-fx-white text-lg font-medium",
        ],
        variant === BUTTON_VARIANT.LINK && [
          "text-left text-transparent bg-clip-text",
        ],
        "bg-gradient-to-r from-fx-orange via-fx-yellow to-fx-aqua",
        "bg-[length:250%_100%] hover:bg-[100%_0]",
        "transition-all duration-500",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
