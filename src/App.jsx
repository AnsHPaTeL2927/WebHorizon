import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Ratings from "./pages/Ratings";
import Catalogs from "./pages/Catalogs";
import Services from "./pages/Services";
import Payment from "./pages/Payment";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/rating" element={<Ratings></Ratings>}></Route>
          <Route path="/catalog" element={<Catalogs></Catalogs>}></Route>
          <Route path="/service" element={<Services></Services>}></Route>
          <Route path="/payment" element={<Payment></Payment>}></Route>
          <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
