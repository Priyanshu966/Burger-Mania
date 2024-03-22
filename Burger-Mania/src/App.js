import {Routes, Route} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import {Home, Base, Fillings, Order, Error} from "./pages";
import {Header} from "./components";
import {useState} from "react";

function App() {
  const [isBurger, setIsBurger] = useState({
    base: "thin & crispy",
    fillings: ["peppers", "onions", "olives"],
  });

  const handleBase = (base) => {
    setIsBurger({...isBurger, base});
  };
  const handleFillings = () => {};
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/base" element={<Base isBase={isBurger.base} />} />
        <Route
          path="/fillings"
          element={<Fillings isFillings={isBurger.fillings} />}
        />
        <Route path="/order" element={<Order {...isBurger} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
