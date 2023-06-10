import React from "react";

import {
  About,
  Footer,
  Header,
  Skills,
  Testimonials,
  Works,
} from "./container";

import { Navbar } from "./components";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <About />
      <Header />
      <Skills />
      <Testimonials />
      <Works />
      <Footer />
    </div>
  );
}

export default App;
