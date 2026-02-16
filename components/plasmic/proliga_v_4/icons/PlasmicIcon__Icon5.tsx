/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon5Icon(props: Icon5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4 14.885h-.75H4zm2.733 3.198l.103-.742-.103.742zm10.186 0l-.103-.742.103.742zM4.466 13.187l-.644-.384.644.384zm2.023-5.1a5.337 5.337 0 015.337-5.337v-1.5A6.837 6.837 0 004.99 8.087h1.5zm0 2.093V8.087h-1.5v2.093h1.5zM4.75 14.885c0-.481.132-.93.36-1.314l-1.288-.768a4.054 4.054 0 00-.572 2.082h1.5zm2.086 2.455c-1.2-.166-2.086-1.209-2.086-2.455h-1.5c0 1.96 1.404 3.667 3.38 3.941l.206-1.486zm4.99.432c-1.492 0-3.42-.214-4.99-.431l-.206 1.485c1.583.22 3.595.446 5.196.446v-1.5zm4.99-.431c-1.57.217-3.498.431-4.99.431v1.5c1.6 0 3.614-.226 5.196-.446l-.206-1.486zm2.086-2.456c0 1.246-.886 2.29-2.086 2.455l.206 1.486c1.976-.274 3.38-1.981 3.38-3.94h-1.5zm-.36-1.314c.228.384.36.833.36 1.314h1.5c0-.76-.209-1.472-.572-2.082l-1.288.768zm-1.379-5.484v2.093h1.5V8.087h-1.5zM11.826 2.75a5.337 5.337 0 015.337 5.337h1.5a6.837 6.837 0 00-6.837-6.837v1.5zm8.004 10.053c-.309-.518-.59-.933-.82-1.396-.222-.444-.347-.84-.347-1.227h-1.5c0 .712.23 1.348.504 1.897.264.529.62 1.067.874 1.494l1.289-.768zM4.99 10.18c0 .387-.125.783-.347 1.227-.231.463-.512.878-.82 1.396l1.288.768c.254-.427.61-.965.874-1.494.274-.55.504-1.185.504-1.897h-1.5z"
        }
        fill={"#fff"}
      ></path>

      <path
        d={"M14 20.834A2.606 2.606 0 0111.826 22a2.606 2.606 0 01-2.174-1.166"}
        stroke={"#fff"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Icon5Icon;
/* prettier-ignore-end */
