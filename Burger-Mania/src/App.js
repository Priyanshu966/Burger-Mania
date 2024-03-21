import {Routes, Route} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import {Home, Base, Fillings, Order} from "./pages";
import {Header} from "./components";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/base" element={<Base />} />
        <Route path="/fillings" element={<Fillings />} />
        <Route path="/fillings" element={<Order />} />
      </Routes>
    </>
  );
}

export default App;
