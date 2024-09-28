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
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";




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
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
