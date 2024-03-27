import {Link} from "react-router-dom";
import {motion} from "framer-motion";

const SecondaryBtn = ({link, text}) => {
  return (
    <Link to={link}>
      <motion.button
        initial={{x: "-100vw"}}
        animate={{x: 0}}
        transition={{type: "spring", stiffness: 120}}
        whileHover={{
          boxShadow: "0 0 8px rgb(255,255,255)",
          textShadow: "0 0 8px rgb(255,255,255)",
          scale: 1.1,
          transition:{duration:0}
        }}
        className="capitalize text-white/[0.5] font-light border-[1.5px] rounded-3xl py-1.5 px-6 text-sm border-white/[0.5] tracking-wider my-0 "
      >
        {text}
      </motion.button>
    </Link>
  );
};
export default SecondaryBtn;
