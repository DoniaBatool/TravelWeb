import { FEATURES } from "@/constants";
import Image from "next/image";

const Features = () => {
  return (
    <section
      className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center 
      bg-no-repeat py-24 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32"
      id="Services"
    >
      <div className="max-container padding-container relative w-full flex justify-end"> 
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>
        <div className="z-20 flex w-full flex-col lg:w-[60%] px-4 lg:px-8">
          <div className="relative">
            <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-20px] top-[-50px] w-10 lg:w-[50px] mx-[50px] md:mx-0 mb-4 sm:mx-72 xs:mx-40"
            />
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center md:text-left text-gray-800 leading-snug lg:leading-tight xl:max-w-[390px]">Our Services</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type FeatureItemProps = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureItemProps) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
        {title}
      </h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};

export default Features;
