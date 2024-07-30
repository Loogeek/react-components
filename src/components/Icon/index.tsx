import React, { PropsWithChildren, forwardRef } from "react";
import clsx from "clsx";

import "./index.scss";

export interface BaseProps {
  className?: string;
  style?: React.CSSProperties;
  size?: string | string[];
  spin?: boolean;
}

export type IconProps = BaseProps &
  Omit<React.SVGAttributes<SVGElement>, keyof BaseProps>;

function getSize(size: IconProps["size"]) {
  if (Array.isArray(size) && size.length === 2) {
    return size;
  }
  const width = (size as string) || "1em";
  const height = (size as string) || "1em";

  return [width, height];
}

export const Icon = forwardRef<SVGSVGElement, PropsWithChildren<IconProps>>(
  (props, ref) => {
    const { className, style, spin, size = "1em", children, ...ret } = props;
    const cls = clsx(
      "icon",
      {
        "icon-spin": spin,
      },
      className
    );
    const [width, height] = getSize(size);

    return (
      <svg
        ref={ref}
        className={cls}
        style={style}
        fill="currentColor"
        width={width}
        height={height}
        {...ret}
      >
        {children}
      </svg>
    );
  }
);

export default Icon;
