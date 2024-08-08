import React from "react";

import { NavbarProject } from "../components";
import { ServiceContainer, Testimonials, Footer } from "../container";

export default function Services() {
  return (
    <>
      <NavbarProject></NavbarProject>
      <ServiceContainer></ServiceContainer>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </>
  );
}
