import Link from "next/link";

export default function Home() {
  return (
    <section
      className="relative bg-bannerImg bg-no-repeat bg-cover h-[120vh]"
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

      <div className="relative p-16 flex justify-between mx-28">
        <div>
          <Link href="/">
            <h1 className="text-white font-extrabold text-4xl">
              <span className="font-normal">Cars </span>Planet
            </h1>
          </Link>
        </div>
        <div className="text-white uppercase space-x-8">
          <Link href="/" className="hover:font-extrabold">
            Buy or Sell
          </Link>
          <Link href="/" className="hover:font-extrabold">
            Contact Me
          </Link>
        </div>
      </div>

      <div className="absolute z-10 text-white p-10 top-[35%] left-[35%] flex items-center flex-col text-center space-y-8">
        <h1 className="text-[20px] font-semibold">GREATER LAS VEGAS CAR SHOWROOM</h1>
        <h1 className="text-7xl">
          FIND YOUR <br />
          <span className="font-bold font-sans">DREAM CAR</span>
        </h1>

   
        <button className="relative group border-2 border-white px-12 py-3 overflow-hidden">
          <span className="relative z-10">CONTACT ME</span>
          <div className="absolute inset-0 bg-gray-50 border-2 opacity-20 group-hover:opacity-30 hover:px-14 transition-all duration-700 ease-out transform scale-0 group-hover:scale-150 rounded "></div>
        </button>
      </div>
    </section>
  );
}
