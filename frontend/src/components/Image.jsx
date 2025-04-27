import React from "react";
import { IKImage } from "imagekitio-react";
const Image = ({ src, className, width, heigth, alt }) => {
  return (
    <IKImage
      src={src}
      className={className}
      alt={alt}
      width={width}
      height={heigth}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
    />
  );
};

export default Image;
