import logo from "./logo.svg";
import "./App.css";
import Header from "./components/navbar/Header/Header";
import Home from "./components/home/Home";
import Footer from "./components/navbar/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/login/Login";
import SignUp from "./components/login/SignUp";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
