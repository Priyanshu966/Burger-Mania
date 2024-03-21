import {Link} from "react-router-dom";

const PrimaryBtn = ({text, link}) => {
  return (
    <Link
      to={link}
      className="px-6 py-3 font-light capitalize border-2 text-white/60 rounded-[30px] text-xl  tracking-wider"
    >
      {text}
    </Link>
  );
};
export default PrimaryBtn;
