import {Link} from "react-router-dom";
import {ItemMenu, SecondaryBtn} from "../components";

const Fillings = ({isFillings, handleFillings}) => {
  const fillings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];
  return (
    <div className="container">
      <div>
        <div className="mb-5 h-fit min-w-60">
          <h3 className="py-1.5 w-[95%] text-white capitalize text-lg line pr-10">
            step 2: choose fillings
          </h3>
          <div className="grid justify-start gap-y-2 text-white/70 py-3 px-2">
            {fillings.map((item) => {
              return (
                <button
                  onClick={() => handleFillings(item)}
                  className={`${
                    isFillings.includes(item) && "before:content-[">"] text-white underline"
                  } capitalize text-start`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
        <SecondaryBtn link="/order" text="next" />
      </div>
    </div>
  );
};
export default Fillings;
