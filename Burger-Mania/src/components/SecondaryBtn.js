import {Link} from "react-router-dom";

const SecondaryBtn = ({link,text}) => {
  return (
    <Link
      to={link}
      className="capitalize text-white/[0.5] font-light border-[1.5px] rounded-3xl py-1.5 px-6 text-sm border-white/[0.5] tracking-wider my-10 "
    >
      {text}
    </Link>
  );
};
export default SecondaryBtn;
