import React from "react";

import { Navbar } from "../components";
import { Footer, Features } from "../container";
import { useParams } from "react-router-dom";

import allProjects from "../assets/json/works.json";

export default function Project() {
  let { id } = useParams();

  let item = allProjects.find((project) => project.id === id);
  return (
    <>
      <Navbar></Navbar>
      <Features features={item.features}></Features>
      <Footer></Footer>
    </>
  );
}
