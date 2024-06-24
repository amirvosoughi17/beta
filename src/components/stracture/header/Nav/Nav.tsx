import { motion } from "framer-motion";
import { links, footerLinks } from "./data";
import { perspective, slideIn } from "./anime";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex flex-col justify-between pt-[100px] pr-[30px] pb-[50px] pl-[40px] h-full box-border">
      <div className="flex gap-[10px] flex-col ">
        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <div key={`b_${i}`} className=" origin-bottom">
              <motion.div
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <Link href={href} className="text-none text-white text-[46px]">
                  {title}
                </Link>
              </motion.div>
            </div>
          );
        })}
      </div>
      <motion.div className="flex flex-wrap">
        {footerLinks.map((link, i) => {
          const { title, href } = link;
          return (
            <motion.a
              className="w-[50%] mt-[5px]"
              variants={slideIn}
              custom={i}
              initial="initial"
              animate="enter"
              exit="exit"
              key={`f_${i}`}
            >
              {title}
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
}
