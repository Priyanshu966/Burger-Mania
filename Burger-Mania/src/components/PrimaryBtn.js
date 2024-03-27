import {Link} from "react-router-dom";

const PrimaryBtn = ({text, link}) => {
  return (
    <Link
      to={link}
      className="px-4 py-2 text-sm md:px-6 md:py-3 font-light capitalize border-2 border-primary text-secondary rounded-[30px] md:text-xl  tracking-wider"
    >
      {text}
    </Link>
  );
};
export default PrimaryBtn;
