// components/Footer.js
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-blac text-white py-4">
      <div className="container mx-auto px-4 text-center mb-5">
        <span className="inline-flex">
          <a
            href="https://www.facebook.com/GIMMESOMEICECREAM/"
            className="text-gray-500 group relative"
          >
            <Image
              src="/images/fblogo.png"
              alt="fb logo"
              className="w-7 h-7 group-hover:scale-110"
              width={1920}
              height={1080}
            />
            <span className="hidden absolute right-0 top-0 bg-black text-white px-2 py-1 mt-1 z-10 group-hover:inline">
              Facebook
            </span>
          </a>

          <a
            href="https://github.com/Ryalynne"
            className="ml-4 text-gray-500 group relative"
          >
            <Image
              src="/images/github.png"
              alt="github logo"
              className="w-7 h-7 group-hover:scale-110"
              width={1920}
              height={1080}
            />
            <span className="hidden absolute right-0 top-0 bg-black text-white px-2 py-1 mt-1 z-10 group-hover:inline">
              GitHub
            </span>
          </a>
        </span>
        <hr className="mt-2 mb-2" />
        <p className="text-center">© All Rights Reserved 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
