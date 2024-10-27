import Image from "next/image";
import Button from "./Button"; // Ensure this is the correct import for your Button component
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="relative flex items-center justify-center h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('/backhero2.jpg')", // Replace with your background image path
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Hero Text Content */}
      <div className="relative z-10 text-center px-4 md:px-8 lg:px-12 max-w-2xl w-full">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="mx-auto w-12 lg:w-16 mb-4"
        />

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Earthy Heaven Camp Area
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-white">
          Experience the great outdoors like never before with our exclusive camping services.
          Whether you're seeking adventure or relaxation, we provide all the essentials
          for a memorable camping trip.
        </p>

        {/* Star Ratings and Reviews */}
        <div className="my-6 flex items-center justify-center">
          <div className="flex gap-1">
            {Array(5).fill(1).map((_, index) => (
              <Image
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>
          <p className="ml-2 text-white">
            198k
            <span className="text-sm md:text-base ml-1">Excellent Reviews</span>
          </p>
        </div>

        {/* Buttons - Stack Vertically on Mobile, Horizontal on Larger Screens */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full mt-4">
          <Link href="#GetApp" className="w-full sm:w-auto">
            <Button
              type="button"
              title="Download App"
              variant="bg-green-500 border-green-500 hover:bg-green-700 hover:border-green-700"
              className="text-white font-bold py-3 px-6 rounded-full transition duration-300 w-full"
            />
          </Link>
          <Link href="#Guide" className="w-full sm:w-auto">
            <Button
              type="button"
              title="How we work?"
              variant="bg-blue-500 border-blue-500 hover:bg-blue-700 hover:border-blue-700"
              className="text-white font-bold py-3 px-6 rounded-full transition duration-300 w-full"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
