import { motion } from "framer-motion";
import { orderVariant } from "../utils/variance";


const Order = ({base, fillings}) => {
  return (
    <div className="container">
      <motion.div variants={orderVariant} initial="initial" animate="animate" transition={orderVariant.transition} className="grid place-items-center h-fit">
        <h2 className="py-1.5 text-white capitalize text-lg  ">
          thank you for your order :)
        </h2>
        <p className="text-white/45 mb-2">
          You ordered a <span className="capitalize"> {base}</span> burger with:
        </p>
        {fillings.map((item, index) => {
          return (
            <p key={index} className="text-white/45 leading-tight">
              {item}
            </p>
          );
        })}
      </motion.div>
    </div>
  );
};
export default Order;
