import React, { lazy } from "react";
import Image from "next/image";

interface ImgProps {
  image: string;
}

const Img: React.FC<ImgProps> = ({ image }) => {
  return (
    <div className="w-full h-full">
      <Image src={image}  alt="Parallax Image"   width={50} height={150} className="w-[300px] min-h-[300px] object-cover " />
    </div>
  );
};

export default Img;