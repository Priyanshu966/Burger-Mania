import Logo from "./Logo";

const Header = () => {
  return (
    <div className="text-white">
      <div className="w-[90vw]  mx-auto  flex items-center ">
        <div className=''>
          <Logo />
        </div>
        <h2 className="w-screen py-2 ml-3 line">Burger Mania</h2>
      </div>
    </div>
  );
};
export default Header;
