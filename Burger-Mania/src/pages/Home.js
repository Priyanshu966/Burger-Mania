import {PrimaryBtn} from "../components";
import {motion} from "framer-motion";
import { mainVariant } from "../utils/variance";

const Home = () => {
  return (
    <div className="container">
      <motion.div
      variants={mainVariant}
        initial="initial"
        animate="animate"
        className="  grid place-items-center h-fit gap-y-8 md:gap-y-10"
      >
        <h2 className="text-2xl md:text-3xl capitalize tracking-wide text-primary">
          Welcome to Burger Mania
        </h2>
        <PrimaryBtn link="/base" text="create your burger" />
      </motion.div>
    </div>
  );
};
export default Home;
