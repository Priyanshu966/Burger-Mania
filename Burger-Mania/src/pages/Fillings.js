import {Link} from "react-router-dom";
import {MdKeyboardArrowRight} from "react-icons/md";
import { SecondaryBtn} from "../components";
import { pageVariant,listVariant } from "../utils/variance";
import { motion } from "framer-motion";

const Fillings = ({isFillings, handleFillings}) => {
  const fillings = [
    "mayonnaise",
    "peppers",
    "onions",
    "cabbage",
    "extra cheese",
    "tomatoes",
  ];
  return (
    <div className="container">
      <motion.div variants={pageVariant} initial="initial" animate="animate" transition={pageVariant.transition}>
        <div className="mb-5 h-fit min-w-60">
          <h3 className="py-1.5 w-[95%] text-primary capitalize text-lg line pr-10">
            step 2: choose fillings
          </h3>
          <div className="grid justify-start gap-y-2 text-secondary py-3 px-2">
            {fillings.map((item) => {
              const isActive = isFillings.includes(item);
              return (
                <motion.button whileHover={listVariant.whileHover} transition={listVariant.transition}
                  onClick={() => handleFillings(item)}
                  className={`${
                    isActive && "text-primary"
                  } capitalize items-center flex hover:text-yellow-500`}
                >
                  {isActive && <MdKeyboardArrowRight className="text-lg" />}
                  {item}
                </motion.button>
              );
            })}
          </div>
        </div>
        {isFillings.length > 0 && <SecondaryBtn link="/order" text="next" />}
      </motion.div>
    </div>
  );
};
export default Fillings;
