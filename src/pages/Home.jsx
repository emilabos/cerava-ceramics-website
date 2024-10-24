import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import FAQDropDown from "../components/FAQDropDown";

function Home() {
  return (
    <>
      <main className="font-serif w-full overflow-hidden">
        <section
          id="hero-banner"
          className="w-full h-screen bg-fixed px-6 pb-48 pt-2 bg-hero-banner bg-cover bg-center flex flex-col align-middle justify-start lg:aspect-video md:aspect-video"
        >
          <Navbar></Navbar>
          <div className="w-full h-auto flex align-middle justify-center pt-32 z-0">
            <header
              id="hero-title"
              className="text-white text-7xl relative [text-shadow:_1px_7px_9px_rgba(0,0,0,0.73)]"
            >
              <h1>
                Minimalist <i>Ceramics.</i>
              </h1>
              {/* <div className="h-1 w-64 bg-gray-light rounded-md"></div> */}
            </header>
          </div>
        </section>
        <section className="bg-gray-dark w-full h-auto grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:p-32 md:p-32 sm:py-12 items-start">
          <div className="p-8">
            <img
              src="/image5.jpg"
              alt=""
              className="rounded-md drop-shadow-xl"
            />
          </div>
          <div className="text-black m-12 flex flex-col justify-start">
            <h1 className="text-5xl mb-4">
              <a href="#about" className="scroll-smooth">
                About
              </a>
            </h1>
            <p className="text-2xl">
              At Cerava, we craft timeless, minimalist pottery pieces designed
              to elevate any space with understated elegance. Each item is
              thoughtfully handmade, combining functionality with aesthetic
              simplicity.
            </p>
            <button className="px-4 py-2 bg-gray-rustic text-black rounded-lg my-8 hover:text-white hover:bg-black max-w-28 drop-shadow-md  mx-auto sm:mx-0">
              Shop
            </button>
          </div>
        </section>
        <section className="bg-gray-medium w-full h-auto grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:p-32 md:p-32 sm:p-12 items-start">
          <div className="relative text-black m-12 flex flex-col justify-start order-last sm:order-first">
            <h1 className="text-5xl mb-4">
              <a href="#process" className="scroll-smooth">
                Process
              </a>
            </h1>
            <p className="text-2xl">
              Our pottery is meticulously crafted by hand, using high-quality
              materials and time-honored techniques. Each piece undergoes a
              careful process of shaping, firing, and finishing to ensure both
              durability and refined beauty.
            </p>
            <button className="px-4 py-2 bg-gray-rustic text-black rounded-lg my-8 hover:text-white hover:bg-black max-w-28 drop-shadow-md  mx-auto sm:mx-0">
              Read more
            </button>
          </div>
          <div className="p-8">
            <img
              src="/image7.jpg"
              alt=""
              className="rounded-md drop-shadow-xl"
            />
          </div>
        </section>
        <section className="bg-gray-dark w-full h-auto grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:p-32 md:p-32 sm:p-12 items-start">
          <div className="p-8">
            <img
              src="/image10.jpg"
              alt=""
              className="rounded-md drop-shadow-xl"
            />
          </div>
          <div className="relative text-black m-12 flex flex-col justify-start">
            <h1 className="text-5xl mb-4">Workshops</h1>
            <p className="text-2xl">
              Our workshops offer a hands-on experience for all skill levels,
              where participants can explore the art of pottery in a supportive
              environment. Led by experienced artisans, these sessions encourage
              creativity and provide the tools to bring your unique designs to
              life.
            </p>
            <button className="px-4 py-2 bg-gray-rustic text-black rounded-lg my-8 hover:text-white hover:bg-black max-w-28 drop-shadow-md mx-auto sm:mx-0">
              Sign up
            </button>
          </div>
        </section>
        <section className="bg-gray-medium w-full h-auto grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:p-32 md:p-32 sm:p-12 items-start">
          <div className="text-black flex flex-col justify-start px-5 sm:px-0 py-5 sm:py-0 order-last sm:order-first">
            <h1 className="text-5xl mb-4">FAQs</h1>
            <FAQDropDown />
            <div className="mx-auto sm:mx-0 align-middle text-center">
              <p className="mt-4">
                <i>Can't find your question?</i>
              </p>
              <button className="px-4 py-2 bg-gray-rustic text-black rounded-lg my-4 hover:text-white hover:bg-black max-w-28 drop-shadow-md">
                Contact us
              </button>
            </div>
          </div>
          <div className="p-8">
            <img
              src="/image8.jpg"
              alt=""
              className="rounded-md drop-shadow-xl"
            />
          </div>
        </section>
        <section className="bg-gray-dark w-full h-auto grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:p-32 md:p-32 sm:p-12 items-start">
          <div className="p-8 sm:order-first">
            <img
              src="/image6.jpg"
              alt=""
              className="rounded-md drop-shadow-xl"
            />
          </div>
          <div className="relative text-black m-12 flex flex-col justify-start sm:order-last md:order-first lg:order-first">
            <h1 className="text-5xl mb-4">
              <a href="#contact" className="scroll-smooth">
                Stay in Touch
              </a>
            </h1>
            <p className="text-2xl">
              Sign up to our weekly newsletter to recieve new and upcoming
              releases!
            </p>
            <form>
              <input
                type="email"
                placeholder="johndoe@example.com"
                className="bg-gray-rustic py-2 rounded-tl-md rounded-bl-md px-2 w-1/2"
              />
              <button className="px-4 py-2 bg-gray-900 text-gray-rustic rounded-tr-xl rounded-br-xl my-8 hover:text-gray-900 hover:bg-gray-rustic max-w-28  mx-auto sm:mx-0">
                Read more
              </button>
            </form>
          </div>
        </section>
        <Footer></Footer>
      </main>
    </>
  );
}

export default Home;
