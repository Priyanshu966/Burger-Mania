import {SecondaryBtn} from "../components";

const Base = ({isBase, handleBase}) => {
  const bases = ["classic", "thin & crispy", "thick crust"];
  return (
    <div className="container">
      <div>
        <div className="mb-5 h-fit min-w-60">
          <h3 className="py-1.5 w-[95%] text-white capitalize text-lg line pr-10">
            step 1: choose base
          </h3>
          <div className="grid justify-start gap-y-2 text-white/70 py-3 px-2">
            {bases.map((item) => {
              return (
                <button
                  onClick={() => handleBase(item)}
                  className={`${
                    isBase == item && "before:content-['>'] text-white underline"
                  }capitalize text-start`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
        <SecondaryBtn link="/fillings" text="next" />
      </div>
    </div>
  );
};
export default Base;
