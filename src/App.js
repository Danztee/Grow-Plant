import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import Details from "./components/Details/Details";
import Customers from "./components/Customers/Customers";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Header />
        <Services />
      </div>
      <Details />
      <div className="container">
        <Customers />
        <NewsLetter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
