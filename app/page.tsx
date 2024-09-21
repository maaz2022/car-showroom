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
        className="relative bg-bannerImg bg-no-repeat bg-cover h-[70vh] lg:h-[120vh]"
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

        <div className="relative p-16 flex justify-between items-center mx-28">
          <div>
            <Link href="/">
                <>
                  <h1 className="text-white font-extrabold text-4xl">
                    <span className="font-normal">Cars </span>Planet
                  </h1>
                </>
            </Link>
          </div>
          <div className="text-white uppercase space-x-8">
            <Link href="/" className="hover:font-extrabold">
                <>Buy or Sell</>
            </Link>
            <Link href="/" className="hover:font-extrabold">       
                <>Contact Me</>
            </Link>
          </div>
        </div>

        <div className="absolute z-10 text-white p-10 lg:top-[30%] lg:left-[35%] flex items-center flex-col text-center space-y-8 md:left-[25%]">
          <Reveal width="fit-content">
            <>
              <h1 className="text-[20px] font-semibold">
                GREATER LAS VEGAS CAR SHOWROOM
              </h1>
              <h1 className="text-7xl">
                FIND YOUR <br />
                <span className="font-bold font-sans">DREAM CAR</span>
              </h1>
            </>
          </Reveal>

          <Reveal width="fit-content">
            <button className="relative px-14 py-4 border-1 uppercase border-white group">
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
