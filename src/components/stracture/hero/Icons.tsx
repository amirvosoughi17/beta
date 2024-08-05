import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Dock, DockIcon } from "@/components/magicui/dock";
import linkedinImage from "@/assets/LinkedIn_iconpng.png";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function HeroIcons() {
  return (
    <div className="relative mt-1">
      <Dock magnification={60} distance={100}>
        <DockIcon className="bg-black/10 dark:bg-white/10 px-1.5 py-1.5">
          <Link target="_blank" href="https://www.linkedin.com/company/wixelorg">
            <Image
              src={linkedinImage}
              width={50}
              height={50}
              alt=""
              className="w-[30px] h-[30px]"
            />
          </Link>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10 px-2 py-1.5">
          <Link target="_blank" href="https://t.me/vosooughi">
            <Image
              src="/telegram.svg"
              width={50}
              height={50}
              alt=""
              className="w-[30px] h-[30px]"
            />
          </Link>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10 px-1.5 py-2">
          <Link target="_blank" href="https://www.instagram.com/wixel_org?igsh=MWc5eWVqaWluc2oxbQ==">
            <Image
              src="/Instagram.png"
              width={50}
              height={50}
              alt=""
              className="w-[25px] h-[25px]"
            />
          </Link>
        </DockIcon>
      </Dock>
    </div>
  );
}
