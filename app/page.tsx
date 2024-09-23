"use client"
import FeaturedCars from "@/components/FeaturedCars";
import WorkerInfo from "@/components/WorkerInfo";
import Reveal from "@/components/Reveal"; 
import Link from "next/link";
import Testimonals from "@/components/Testimonals";
import InfoSection from "@/components/infoSection";
import Contact from "@/components/Contact";
import Schedule from "@/components/Schedule";
import CarShowCase from "@/components/CarShowCase";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <section
        className="relative bg-bannerImg bg-no-repeat bg-cover h-[60vh] lg:h-[120vh] sm:h-[80vh]"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)",
        }}
      >
        <div
          className="absolute inset-0 bg-black opacity-50"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 99%, 50% 100%, 0 99%)",
          }}
        ></div>

        <div className="relative p-16 flex lg:justify-between lg:items-center md:justify-between md:items-center mx-18 flex-col items-center sm:flex-row ">
          <div>
            <Link href="/">
                <>
                  <h1 className="text-white font-extrabold lg:text-4xl text-3xl">
                    <span className="font-normal">Cars </span>Planet
                  </h1>
                </>
            </Link>
          </div>
          <div className="text-white uppercase space-x-8 text-[13px] lg:text-[18px]">
            <Link href="/" className="hover:font-extrabold">
                <>Buy or Sell</>
            </Link>
            <Link href="/" className="hover:font-extrabold">       
                <>Contact Me</>
            </Link>
          </div>
        </div>

        <div className="absolute z-10 text-white lg:top-[30%] lg:left-[38%] flex items-center flex-col text-center space-y-8 md:left-[25%] left-[65px] ">
          <Reveal width="fit-content">
            <>
              <h1 className="lg:text-[20px] font-semibold text-[14px]">
                GREATER LAS VEGAS CAR SHOWROOM
              </h1>
              <h1 className="text-4xl lg:text-7xl font-semibold">
                FIND YOUR <br />
                <span className="font-bold font-sans">DREAM CAR</span>
              </h1>
            </>
          </Reveal>

          <Reveal width="fit-content">
            <button className="relative px-8 py-3 lg:py-4 lg:px-14 border-1 uppercase border-white group">
              Contact Me
              <span className="absolute top-0 left-0 size-full scale-0 bg-white/30 border-2 group-hover:scale-100 transition duration-700 pointer-events-none" />
              <span className="absolute inset-0 border-2 border-white group-hover:scale-x-110 group-hover:scale-y-125 group-hover:opacity-0 transition delay-300 duration-500 ease-in-out pointer-events-none" />
            </button>
          </Reveal>
        </div>
      </section>

      <section>
        <Reveal width="100%">
          <FeaturedCars />
        </Reveal>
      </section>

      <section>
        <Reveal width="100%">
          <WorkerInfo />
        </Reveal>
      </section>
      <section>
        <Reveal width="100%">
          <Testimonals />
        </Reveal>
      </section>
      <section>
        <Reveal width="100%">
          <InfoSection />
        </Reveal>
      </section>
      <section>
        <Reveal width="100%">
          <Contact />
        </Reveal>
      </section>
     <section>
        <Reveal width="100%">
        <Schedule />
        </Reveal>
      </section>
     <section>
        <Reveal width="100%">
        <CarShowCase />
        </Reveal>
      </section>
           <section>
        <Reveal width="100%">
        <Footer />
        </Reveal>
      </section>

    </>
  );
}
