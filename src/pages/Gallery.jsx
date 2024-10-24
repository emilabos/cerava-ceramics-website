import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

function Gallery() {
  return (
    <>
      <main className="">
        <Navbar />
        <section className="grid cols-3">
          <div className="">
            <img src="/image1" alt="" />
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default Gallery;
