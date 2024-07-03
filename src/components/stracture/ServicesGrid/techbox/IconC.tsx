import React from "react";
import Image from "next/image";

interface IconCProps {
  image: string;
}

const IconC: React.FC<IconCProps> = ({ image }) => {
  return (
    <div className="">
      <Image src={image} alt="Parallax Image" width={30} height={50} className="w-[35px]  object-cover *: " />
    </div>
  );
};

export default IconC;