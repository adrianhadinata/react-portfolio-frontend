import React, { useRef } from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { motion, useInView } from "framer-motion";
import { PureIncrement } from "pure_counter";
import "./Testimonials.scss";
import { AiOutlineDollar, AiOutlineUsergroupAdd } from "react-icons/ai";
import { Images } from "../../constants";

const Testimonials = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const inView1 = useInView(ref1, { triggerOnce: true, threshold: 0.1 });
  const inView2 = useInView(ref2, { triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <h2 className="head-text">Why Choosing Us?</h2>
      <div className="app__row_testimonials">
        <motion.div
          ref={ref1}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, type: "tween" }}
          className="app__column_4"
          key={"counter-1"}
        >
          {inView1 && (
            <>
              <AiOutlineDollar className="app__column_icon"></AiOutlineDollar>
              <h3 className="head-text-smaller">Transaction Success</h3>
              <PureIncrement
                start={0}
                end={97}
                duration={2}
                className="purecounter head-text-smaller"
              />
            </>
          )}
        </motion.div>
        <motion.div
          ref={ref2}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, type: "tween" }}
          className="app__column_4"
          key={"counter-2"}
        >
          {inView2 && (
            <>
              <AiOutlineUsergroupAdd className="app__column_icon"></AiOutlineUsergroupAdd>
              <h3 className="head-text-smaller">Total Customer</h3>
              <PureIncrement
                start={0}
                end={12}
                duration={2}
                className="purecounter head-text-smaller"
              />
            </>
          )}
        </motion.div>
      </div>

      <div className="app__text_testimonials">
        <h2 className="bold-text">Some of the successful transactions</h2>
        <hr />
      </div>

      <div className="app__row_testimonials">
        <div className="app__profiles">
          <div className="app__profile-testimonials">
            <img src={Images.buktisatu} alt="placholder" />
          </div>
          <div className="app__profile-testimonials">
            <img src={Images.buktidua} alt="placholder" />
          </div>
          <div className="app__profile-testimonials">
            <img src={Images.buktitiga} alt="placholder" />
          </div>
          <div className="app__profile-testimonials">
            <img src={Images.buktiempat} alt="placholder" />
          </div>
          <div className="app__profile-testimonials">
            <img src={Images.buktilima} alt="placholder" />
          </div>
          <div className="app__profile-testimonials">
            <img src={Images.buktienam} alt="placholder" />
          </div>
          <div className="app__profile-testimonials">
            <img src={Images.buktitujuh} alt="placholder" />
          </div>
          <div className="app__profile-testimonials">
            <img src={Images.buktisatu} alt="placholder" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonials, "app__about"),
  "testimonials",
  "app__whitebg",
  ["services", "testimonials", "contact"]
);
