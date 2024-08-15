import React from "react";

import { AppWrap, MotionWrap } from "../../wrapper";
import { Images } from "../../constants";
import "./Products.scss";

const Products = () => {
  return (
    <>
      <h2 className="head-text">
        Don't Have time? Here is some of ready to deploy products
      </h2>

      <div className="app__row_products">
        <div className="app__profiles">
          <div className="app__profile-products">
            <img src={Images.buktisatu} alt="placholder" />
            <h4 className="bold-text">Car Showroom</h4>
            <p className="p-text">
              Responsive Design, Premium Admin Template, Informative Dashboard
              Landing Page for Customer, Admin Page with CRUD for Cars, Users,
              Customers, Categories. Also Content Management System for Landing
              Page including Image Configuration, Customer Review, Showroom
              Name, Description and many more.{" "}
            </p>
          </div>
          <div className="app__profile-products">
            <img src={Images.buktidua} alt="placholder" />
          </div>
          <div className="app__profile-products">
            <img src={Images.buktitiga} alt="placholder" />
          </div>
          <div className="app__profile-products">
            <img src={Images.buktiempat} alt="placholder" />
          </div>
          <div className="app__profile-products">
            <img src={Images.buktilima} alt="placholder" />
          </div>
          <div className="app__profile-products">
            <img src={Images.buktienam} alt="placholder" />
          </div>
          <div className="app__profile-products">
            <img src={Images.buktitujuh} alt="placholder" />
          </div>
          <div className="app__profile-products">
            <img src={Images.buktisatu} alt="placholder" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Products, "app__about"),
  "products",
  "app__primarybg",
  ["services", "testimonials", "contact"]
);
