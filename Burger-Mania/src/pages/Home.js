import {PrimaryBtn} from "../components";

const Home = () => {
  return (
    <div className="container">
      <div className=" text-white grid place-items-center h-fit gap-y-10">
        <h2 className="text-3xl capitalize tracking-wide">
          Welcome to Burger Mania
        </h2>
        <PrimaryBtn link="/base" text="create your burger"/>
      </div>
    </div>
  );
};
export default Home;
