import React from "react";
import { IKImage } from "imagekitio-react";
const Image = ({ src, className, width, height, alt }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      src={src}
      className={className}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      transformation={[{ width: width, height: height }]}
    />
  );
};

export default Image;
