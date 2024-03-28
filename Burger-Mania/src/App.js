import {Routes, Route, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import {Home, Base, Fillings, Order, Error} from "./pages";
import {Header} from "./components";
import {useState} from "react";

function App() {
  const [isBurger, setIsBurger] = useState({
    base: "",
    fillings: [],
  });

  const handleBase = (item) => {
    setIsBurger({...isBurger, base: item});
  };
  const handleFillings = (item) => {
    const fillings = isBurger.fillings;
    if (!fillings.includes(item)) {
      setIsBurger({...isBurger, fillings: [...fillings, item]});
    } else {
      const newItem = fillings.filter((e) => e != item);
      setIsBurger({...isBurger, fillings: newItem});
    }
  };

  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route
            path="/base"
            element={<Base isBase={isBurger.base} handleBase={handleBase} />}
          />
          <Route
            path="/fillings"
            element={
              <Fillings
                isFillings={isBurger.fillings}
                handleFillings={handleFillings}
              />
            }
          />
          <Route path="/order" element={<Order {...isBurger} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
