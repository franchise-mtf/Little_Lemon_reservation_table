import React from "react";
import "./App.css";
import Nav from "./components/Nav";

import Footer from "./components/Footer";
import Main from "./components/Main";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";
import { testimonials } from "./data/testimonials";

function App() {
  function test() {
    console.log(testimonials);
  }
  test();
  return (
    <div className="App">
      <Nav />
      <Main />
      <Menu />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
