import {Link} from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion";
import {
  modalVariant,
  backDropVariant,
  primaryBtnVariant,
} from "../utils/variance";

const Modal = ({isModalOpen, resetBurger}) => {
  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          variants={backDropVariant}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-screen h-screen bg-black/50 fixed grid place-items-center top-0 left-0 z-40 text-black text-sm sm:text-xl py-2 px-14"
        >
          <motion.div
            variants={modalVariant}
            className="bg-white min-h-40 w-[20rem] sm:w-[30rem]  grid place-content-center px-0 py-6 sm:min-h-52 rounded-lg gap-y-5 tracking-wider min-w"
          >
            <p className="">Want to make another burger?</p>
            <Link to="/" className="mx-auto" onClick={() => resetBurger()}>
              <motion.button
                variants={primaryBtnVariant}
                whileHover="hover"
                whileTap="tap"
                className="px-6 py-1.5 sm:px-11 sm:py-2 font-light capitalize border-2 border-black text-black rounded-[30px]   tracking-wider"
              >
                start over
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Modal;
