import Link from "next/link";
import Image from "next/image";
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";

const Footer = () => {
  return (
    <footer className="bg-green-950 text-white py-8" id="Footer">
      <div className="padding-container max-container grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-10 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="flex justify-center md:justify-start ">
          <Link href="/" className="mb-10">
            <Image
              src="/logofinal.png"
              alt="logo"
              width={150}
              height={150}
              className="transition-transform hover:scale-105"
            />
             <Image
              src="/peaceCamp.png"
              alt="logo"
              width={100}
              height={80}
              className="transition-transform hover:scale-105 ml-[20px] border-2 border-white rounded-full"
            />
            
          </Link>
         
        </div>
        <div className="flex flex-col gap-10 md:gap-5 items-center md:items-start">
          {FOOTER_LINKS.map((column) => (
            <FooterColumn title={column.title} key={column.title}>
              <ul className="flex flex-col items-center md:items-start text-gray-300">
                {column.links.map((link) => (
                  <li key={link} className="w-full text-center md:text-left">
                    <Link
                      href="/"
                      className="hover:text-white transition-colors whitespace-nowrap"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          ))}
        </div>
        <div className="flex flex-col items-center md:items-start gap-10">
          <FooterColumn title={FOOTER_CONTACT_INFO.title}>
            <ul className="flex flex-col items-center md:items-start text-gray-300">
              {FOOTER_CONTACT_INFO.links.map((link) => (
                <li key={link.label} className="w-full text-center md:text-left">
                  <Link href="/" className="flex justify-center gap-2">
                    <p>{link.value}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>
          <FooterColumn title={SOCIALS.title}>
            <ul className="flex justify-center gap-4">
              {SOCIALS.links.map((link) => (
                <li key={link}>
                  <Link href="/">
                    <Image
                      src={link}
                      alt="social logo"
                      width={32}
                      height={32}
                      className="transition-transform hover:scale-110"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>
        </div>
      </div>
      <div className="border-t border-gray-700 w-full my-4" />
      <p className="regular-14 w-full text-center text-gray-400">
        &copy; 2024 Hilink | All rights reserved
      </p>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5 items-center md:items-start">
      <h4 className="font-bold text-lg whitespace-nowrap text-center md:text-left">
        {title}
      </h4>
      {children}
    </div>
  );
};

export default Footer;
