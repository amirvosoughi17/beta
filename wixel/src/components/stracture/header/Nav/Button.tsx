import { motion } from "framer-motion";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";

export default function AnimateButton({ isActive, toggleMenu }: any) {
  return (
    <div className="absolute top-0 left-0 w-[45px] h-[45px] cursor-pointer rounded-[10px] overflow-hidden">
      <motion.div
        className="relative w-full h-full "
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <Button
        size="icon"
        variant="secondary"
          className="w-full h-full bg-[#4b4b4b]"
          onClick={() => {
            toggleMenu();
          }}
        >
          <PerspectiveText>
          <span className="">
              <AiOutlineMenu className="w-full text-[25px]  text-white" />
            </span>
          </PerspectiveText>
        </Button>
        <Button
        variant='secondary'
        size='icon'
          onClick={() => {
            toggleMenu();
          }}
        >
          <PerspectiveText>
            <span className="">
              <IoCloseOutline className="w-full text-[40px] text-white" />
            </span>
          </PerspectiveText>
        </Button>
      </motion.div>
    </div>
  );
}

function PerspectiveText({ children }: any) {
  return (
    <div className="">
      <p>{children}</p>
    </div>
  );
}
