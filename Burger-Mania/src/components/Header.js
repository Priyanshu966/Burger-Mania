import Logo from "./Logo";
import {motion} from "framer-motion";

const Header = () => {
  return (
    <div>
      <div className="w-[90vw]  mx-auto  flex items-center ">
        <div className="">
          <Logo />
        </div>
        <motion.h2
          initial={{y: -250}}
          animate={{y: -5}}
          transition={{type: "spring", stiffness: 120, delay: 0.2}}
          className="w-screen py-2 ml-3 line text-primary"
        >
          Burger Mania
        </motion.h2>
      </div>
    </div>
  );
};
export default Header;
