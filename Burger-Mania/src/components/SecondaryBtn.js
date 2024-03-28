import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {secondaryBtnVariant} from "../utils/variance";

const SecondaryBtn = ({link, text}) => {
  return (
    <Link to={link}>
      <motion.button
      variants={secondaryBtnVariant}
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="capitalize text-white/[0.5] font-light border-[1.5px] rounded-3xl py-1.5 px-6 text-sm border-white/[0.5] tracking-wider my-0 "
      >
        {text}
      </motion.button>
    </Link>
  );
};
export default SecondaryBtn;
