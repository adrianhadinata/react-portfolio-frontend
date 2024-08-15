import React from "react";

import { NavbarProject, ButtonWhatsApp } from "../components";
import { ServiceContainer, Testimonials, Footer, Products } from "../container";

export default function Services() {
  return (
    <>
      <NavbarProject></NavbarProject>
      <ButtonWhatsApp></ButtonWhatsApp>
      <ServiceContainer></ServiceContainer>
      <Products></Products>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </>
  );
}
