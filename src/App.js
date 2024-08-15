import React, { useState, useEffect } from "react";
import { Home, Project, Services } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";
import "./library/introjs/introjs.css";
import { Steps } from "intro.js-react";

import "./App.scss";

function App() {
  const [loading, setLoading] = useState(true);
  const [tourEnabled, setTourEnabled] = useState(false);

  const steps = [
    {
      element: ".app", // Ensure this selector is correct
      intro: "Welcome to your first step!",
    },
  ];

  useEffect(() => {
    setLoading(true);
    const images = document.getElementsByTagName("img");
    const totalImages = images.length;
    let loadedImages = 0;

    window.addEventListener("error", (e) => {
      if (
        e.message ===
        "ResizeObserver loop completed with undelivered notifications."
      ) {
        const resizeObserverErrDiv = document.getElementById(
          "webpack-dev-server-client-overlay-div"
        );
        const resizeObserverErr = document.getElementById(
          "webpack-dev-server-client-overlay"
        );
        if (resizeObserverErr) {
          resizeObserverErr.setAttribute("style", "display: none");
        }
        if (resizeObserverErrDiv) {
          resizeObserverErrDiv.setAttribute("style", "display: none");
        }
      }
    });

    // Fungsi untuk memeriksa apakah semua gambar telah dimuat
    const checkImagesLoaded = () => {
      loadedImages++;
      if (loadedImages === totalImages) {
        // Semua gambar telah dimuat, kita set state loading menjadi false
        setLoading(false);
        console.log(document.getElementById("first"));

        setTimeout(() => {
          setTourEnabled(true);
        }, 5000);
      }
    };

    // Memeriksa setiap gambar untuk memastikan kapan mereka selesai dimuat
    for (let i = 0; i < totalImages; i++) {
      images[i].addEventListener("load", checkImagesLoaded);
      images[i].addEventListener("error", checkImagesLoaded); // Jika ada kesalahan dalam memuat gambar
    }

    // Membersihkan event listener saat komponen dibongkar
    return () => {
      for (let i = 0; i < totalImages; i++) {
        images[i].removeEventListener("load", checkImagesLoaded);
        images[i].removeEventListener("error", checkImagesLoaded);
      }
    };
  }, []); // Gunakan array kosong sebagai dependencies sehingga useEffect hanya dijalankan sekali setelah render pertama

  return (
    <>
      <div
        className="container-loading"
        style={{ display: loading ? "flex" : "none" }}
      >
        <RingLoader color={"#36d7b7"} loading={loading} size={150} />
      </div>
      <Steps
        enabled={tourEnabled}
        steps={steps}
        initialStep={0}
        onExit={() => console.log(document.getElementById("first"))}
        options={{
          showProgress: false,
          showStepNumbers: false,
          showBullets: false,
          exitOnOverlayClick: false,
          doneLabel: "Done",
          nextLabel: "Next",
          hideNext: false,
          disableInteraction: false,
        }}
      />
      <div className="app" style={{ display: loading ? "none" : "block" }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/project/:id" element={<Project></Project>}></Route>
            <Route path="/services" element={<Services></Services>}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
