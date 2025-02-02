import mottoImg from "../../assets/motto.jpg";

const OurMotto = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto py-16 space-y-8 md:space-y-0 md:space-x-12">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <img
          loading="lazy"
          src={mottoImg}
          alt="Our Motto"
          className="w-[704px] h-[657px] object-cover rounded-tr-[57px] drop-shadow-xl"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col items-start max-w-lg">
        <h2 className="text-5xl font-semibold text-gray-800">Our Motto</h2>
        <p className="mt-4 text-lg text-gray-500 leading-relaxed">
          Our mission is to provide lifesaving support to individuals and
          families affected by floods. When disaster strikes, our platform
          helps people find safe shelters, connect with emergency responders,
          and access essential resources. Whether you&apos;re in Vijayawada,
          Assam, Bihar, or any flood-prone region, we ensure help is just a
          click away.
        </p>
        <a href="/finder" className="mt-6">
          <button className="px-6 py-3 text-lg font-semibold text-white bg-black rounded-tr-3xl hover:bg-gray-900 transition-all duration-300">
            Learn More
          </button>
        </a>
      </div>
    </div>
  );
};

export default OurMotto;
