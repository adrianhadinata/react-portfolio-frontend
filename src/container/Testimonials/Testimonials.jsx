import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Testimonials.scss";

const Testimonials = () => {
  const [brands, setBrands] = useState([]);
  const [sertificates, setSertificates] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    // alert("kiri");
    setCurrentIndex(index);
  };

  useEffect(() => {
    const sertificatesQuery = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';
    console.log("fetch testimonial");

    client.fetch(sertificatesQuery).then((data) => {
      setSertificates(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  const sertificate = sertificates[currentIndex];

  return (
    <>
      {sertificates.length && (
        <>
          <div className="app__sertificates-item app__flex">
            <h4 className="bold-text">{sertificate.name}</h4>
            <img src={urlFor(sertificate.imgurl)} alt={sertificate.name}></img>
            <div className="app__sertificates-content">
              <div>
                <h5 className="p-text">{sertificate.company}</h5>
              </div>
            </div>
          </div>

          <div className="app__sertificates-btns app__flex">
            <div
              className="app__flex"
              onClick={() => {
                handleClick(
                  currentIndex === 0
                    ? sertificates.length - 1
                    : currentIndex - 1
                );
              }}
            >
              <HiChevronDoubleLeft></HiChevronDoubleLeft>
            </div>
            <div
              className="app__flex"
              onClick={() => {
                handleClick(
                  currentIndex === sertificates.length - 1
                    ? 0
                    : currentIndex + 1
                );
              }}
            >
              <HiChevronDoubleRight></HiChevronDoubleRight>
            </div>
          </div>
        </>
      )}

      <div className="app__sertificates-brands app__flex">
        {brands.map((brand) => (
          <motion.div key={brand._id}>
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonials, "app__sertificates"),
  "testimonial",
  "app__primarybg"
);
