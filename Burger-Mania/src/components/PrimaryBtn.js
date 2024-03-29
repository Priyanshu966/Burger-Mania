import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {primaryBtnVariant} from "../utils/variance";

const PrimaryBtn = ({text, link}) => {
  return (
    <Link to={link}>
      <motion.button
        variants={primaryBtnVariant}
        whileHover="hover"
        whileTap="tap"
        animate="animate"
        className="px-4 py-2 text-sm md:px-6 md:py-3 font-light capitalize border-2 border-primary text-secondary rounded-[30px] md:text-xl  tracking-wider"
      >
        {text}
      </motion.button>
    </Link>
  );
};
export default PrimaryBtn;
