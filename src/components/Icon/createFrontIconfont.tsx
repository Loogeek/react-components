import { forwardRef } from "react";
import { Icon, type IconProps } from ".";

const loadScripts = new Set<string>();

export function createFrontIconfont(scriptUrl: string) {
  if (
    typeof scriptUrl === "string" &&
    scriptUrl.length > 0 &&
    !loadScripts.has(scriptUrl)
  ) {
    const script = document.createElement("script");
    script.setAttribute("src", scriptUrl);
    script.setAttribute("data-namespace", scriptUrl);

    document.body.appendChild(script);

    loadScripts.add(scriptUrl);
  }

  return forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    const { type, ...restProps } = props;
    return (
      <Icon ref={ref} {...restProps}>
        {type ? <use xlinkHref={`#${type}`} /> : null}
      </Icon>
    );
  });
}
