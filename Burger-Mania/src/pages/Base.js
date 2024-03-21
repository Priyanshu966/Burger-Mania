import {SecondaryBtn, ItemMenu} from "../components";

const Base = () => {
  const bases = ["classic", "thin & crispy", "thick crust"];
  return (
    <div className="container">
      <div>
        <ItemMenu title="step 1: choose your base" lists={bases} />
        <SecondaryBtn link="/fillings" text="next" />
      </div>
    </div>
  );
};
export default Base;
