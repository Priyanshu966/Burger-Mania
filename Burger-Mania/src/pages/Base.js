import {SecondaryBtn} from "../components";
import {MdKeyboardArrowRight} from "react-icons/md";
import {motion} from "framer-motion";
import {listVariant, pageVariant} from "../utils/variance";

const Base = ({isBase, handleBase}) => {
  const bases = ["classic", "thin & crispy", "thick crust"];

  return (
    <div className="container">
      <div>
        <motion.div
          variants={pageVariant}
          initial="initial"
          animate="animate"
          exit="exit"
          className="mb-5 h-fit min-w-60"
        >
          <h3 className="py-1.5 w-[95%] text-primary capitalize text-lg line pr-10">
            step 1: choose base
          </h3>
          <div className="grid justify-start gap-y-2 text-secondary py-3 px-2">
            {bases.map((item) => {
              const isActive = isBase === item;
              return (
                <>
                  <motion.button
                    variants={listVariant}
                    whileHover="hover"
                    onClick={() => handleBase(item)}
                    className={`${
                      isActive && "text-primary"
                    } capitalize text-start flex hover:text-yellow-500 items-center`}
                  >
                    {isActive && <MdKeyboardArrowRight className="text-lg" />}
                    {item}
                  </motion.button>
                </>
              );
            })}
          </div>
          {isBase && <SecondaryBtn link="/fillings" text="next" />}
        </motion.div>
      </div>
    </div>
  );
};
export default Base;
