import React, { forwardRef } from "react";
import { Icon, type IconProps } from ".";

export interface CreateIconOptions {
  content: React.ReactNode;
  iconProps?: IconProps;
  viewBox?: string;
}

export function createIcon(options: CreateIconOptions) {
  const { content, iconProps = {}, viewBox = "0 0 1024 1024" } = options;

  return forwardRef<SVGSVGElement, IconProps>((props, ref) => (
    <Icon ref={ref} viewBox={viewBox} {...iconProps} {...props}>
      {content}
    </Icon>
  ));
}
