import {PrimaryBtn} from "../components";

const Error = () => {
  return (
    <div className="container">
      <div className=" text-primary grid place-items-center h-fit gap-y-8 md:gap-y-10">
        <h2 className="text-2xl md:text-3xl capitalize tracking-wide">
          There was an error :-
        </h2>
        <PrimaryBtn link="/" text="return" />
      </div>
    </div>
  );
};
export default Error;
