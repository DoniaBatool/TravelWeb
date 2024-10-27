import Image from "next/image";

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px] px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24" id="GetApp">
      <div className="get-app flex flex-col md:flex-row items-center justify-between w-full">
        <div className="z-20 flex w-full flex-col items-start justify-center gap-6 lg:gap-8 md:w-1/2">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center md:text-left text-gray-800 leading-snug lg:leading-tight xl:max-w-[390px]">
            Get the App for free now!
          </h2>
          <p className="text-lg sm:text-[28px] text-gray-500">Available on iOS and Android</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap md:flex-row">
            <button className="flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-3 px-5 rounded-full transition duration-300 hover:bg-green-700 max-w-[200px]">
              <Image src="/apple.svg" alt="Apple icon" width={24} height={24} />
              <span>Download App</span>
            </button>
            <button className="flex items-center justify-center gap-2 bg-blue-500 text-white font-bold py-3 px-5 rounded-full transition duration-300 hover:bg-blue-700 max-w-[200px]">
              <Image src="/android.svg" alt="Play Store icon" width={24} height={24} />
              <span>Play Store</span>
            </button>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center md:justify-end md:w-1/2 mt-8 md:mt-0">
          <Image
            src="/phones.png"
            alt="phones"
            width={550}
            height={870}
            className="w-full h-auto max-w-[90%] lg:max-w-[550px]" // Ensure the image is responsive
          />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
