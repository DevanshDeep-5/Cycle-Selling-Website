import cycle from "../assets/cycle.png";

export default function VanmoofLanding() {
  return (
    <div className="bg-[#1A251D] min-h-screen text-white relative">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-xl font-bold">ZYKLUS</h1>
        <span className="text-2xl font-semibold pl-10">Welcome to NIT Rourkela</span>
        <button className="bg-white text-black px-5 py-2 rounded-full font-medium">
          Buy Now
        </button>
      </nav>

      {/* Hero Section */}
      {/* <div className="relative flex md:flex-row items-center justify-center md:px-20 h-screen"> */}
        {/* Left Image */}
        {/* <div className="relative w-screen md:w-1/2 flex justify-center items-center"> */}
          <img
            src={cycle}
            alt="VanMoof Bike"
            className="w-screen h-screen absolute top-12 object-contain"
          />
          <button className="absolute top-56 left-16 bg-white text-black px-4 py-2 rounded-full text-sm font-semibold">
            Catalog of Cycles
          </button>
        {/* </div> */}

        {/* Right Content */}
        <div className="w-full absolute top-40 right-0 md:w-1/2 flex justify-end items-center md:mt-0 text-left">
          <div className="max-w-md">
            <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
              Get your frist Cycle of <br /> your college
            </h2>
            <p className="text-gray-300 mt-4 mr-1.5">
              We have cycles at very affordable prices.Get your first cycle for just{" "}
              <span className="font-bold text-white">$2,498</span>
            </p>
            <button className="mt-6 underline underline-offset-4 hover:text-gray-300">
              Discover our new E-Bikes →
            </button>
          </div>
        </div>
      {/* </div> */}

      {/* Large Background Text */}
      <h1 className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[12vw] font-extrabold text-white/10 tracking-tight">
        ZYKLUS
      </h1>
    </div>
  );
}
