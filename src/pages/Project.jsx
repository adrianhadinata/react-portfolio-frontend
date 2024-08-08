import React from "react";

import { NavbarProject } from "../components";
import { Features } from "../container";
import { useParams } from "react-router-dom";

import allProjects from "../assets/json/works.json";

export default function Project() {
  let { id } = useParams();

  let item = allProjects.find((project) => project.id === id);
  return (
    <>
      <NavbarProject></NavbarProject>
      <Features features={item.features}></Features>
    </>
  );
}
