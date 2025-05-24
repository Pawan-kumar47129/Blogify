import React from "react";
import { IKImage } from "imagekitio-react";
const Image = ({ src, className, width, heigth, alt }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      src={src}
      className={className}
      alt={alt}
      width={width}
      height={heigth}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      transformation={[{
        width:width,
        height:heigth
      }]}
    />
  );
};

export default Image;
