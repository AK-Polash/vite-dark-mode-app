import React from "react";

const Image = ({ className, src, alt }) => {
  return (
    <img
      className={className}
      imgSource={src}
      alt={alt ? alt : "img"}
      loading="lazy"
    />
  );
};

export default Image;
