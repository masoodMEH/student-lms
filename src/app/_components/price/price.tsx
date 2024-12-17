import React from "react";
import { Badge } from "../badge/badge";
import Toman from "../icons/src/toman";
import { Size } from "../types/size.type";
import { PriceProps } from "./price.types";

const sizeClasses: Record<Size, { textSize: string; svgSize: number }> = {
  tiny: { textSize: "text-md", svgSize: 16 },
  small: { textSize: "text-xl", svgSize: 18 },
  normal: { textSize: "text-2xl", svgSize: 20 },
  large: { textSize: "text-3xl", svgSize: 22 },
};

export const Price: React.FC<PriceProps> = ({
  size = "normal",
  text = "رایگان",
  price,
  className,
}) => {
  return (
    <>
      {price != null && price > 0 ? (
        <span
          className={`gap-1.5 font-semibold flex items-center text-base dark:text-white/90 ${sizeClasses[size].textSize} ${className}`}
        >
          <div className="mt-1">{price.toLocaleString()}</div>
          <Toman
            strokeWidth={1}
            width={sizeClasses[size].svgSize}
            height={sizeClasses[size].svgSize}
            viewBox="0 0 16 16"
          />
        </span>
      ) : (
        <Badge variant="success" size="small">
          {text}
        </Badge>
      )}
    </>
  );
};
