import React from "react";

import {
  About,
  Footer,
  Header,
  Skills,
  Competencies,
  Works,
} from "../container";

import { Navbar } from "../components";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Works></Works>
      <Competencies></Competencies>
      <Skills></Skills>
      <Footer></Footer>
    </>
  );
}
