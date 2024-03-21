import {Link} from "react-router-dom";
import {ItemMenu, SecondaryBtn} from "../components";

const Fillings = () => {
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
        <ItemMenu title="hello" lists={fillings}/>
        <SecondaryBtn link="/order" text="next"/>
      </div>
    </div>
  );
};
export default Fillings;
