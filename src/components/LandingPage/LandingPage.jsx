import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import landingPageImg from "../../assets/landingPage.jpg";
import OurMotto from "../OurMotto/OurMotto";
import Reviews from "../Reviews/Reviews";

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#" },
    { name: "Our Motto", href: "#motto" },
    { name: "Relief Centers", href: "#centers" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <div
        className="relative min-h-screen bg-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${landingPageImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        {/* Navbar */}
        <Navbar setMobileMenuOpen={setMobileMenuOpen} navigation={navigation} />

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
        )}

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white text-black shadow-lg transform ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          <button
            className="absolute top-4 right-4 text-black text-2xl"
            onClick={() => setMobileMenuOpen(false)}
          >
            ✖
          </button>
          <nav className="flex flex-col items-center mt-16 space-y-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-semibold hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center text-center px-4 py-8 h-full space-y-8">
          <h1 className="text-4xl md:text-7xl font-bold text-white">
            When Waters Rise, <br /> So Should We!
          </h1>

          <div className="space-y-2 text-gray-300">
            <p className="text-lg md:text-xl">
              Floods can strike anytime, leaving thousands homeless and in
              need.
            </p>
            <p className="text-lg md:text-xl">
              We connect donors, volunteers, and relief teams with those who
            </p>
            <p className="text-lg md:text-xl">
              need immediate help in Vijayawada, Assam, Bihar, and beyond.
            </p>
            <p className="text-lg md:text-xl">
              Be part of the change lend a helping hand today!
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col items-center space-y-4">
            <div className="flex gap-10 mt-0">
              <button className="mt-4 bg-green-700 text-white px-14 py-4 rounded-lg text-xl font-sans font-semibold hover:bg-green-600 transition-colors duration-200">
                Sign up as Donor
              </button>
              <button className="mt-4 bg-green-700 text-white px-14 py-4 rounded-lg text-xl font-sans font-semibold hover:bg-green-600 transition-colors duration-200">
                Request Help
              </button>
            </div>
            <div className="w-full h-[20vh]">
              <button className="bg-red-800 text-white px-[165px] py-4 rounded-lg text-xl font-sans font-semibold hover:bg-red-700 transition-colors duration-200">
                Emergency Assistance
              </button>
            </div>
          </div>
        </main>
      </div>
      <OurMotto />
      <Reviews />
    </>
  );
};

export default LandingPage;
