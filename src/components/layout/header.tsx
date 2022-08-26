import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const LINKS_DATA = [
  {
    text: "START SLIDESHOW",
    href: "details/starry-night",
  },
  {
    text: "STOP SLIDESHOW",
    href: "/",
  },
];

export const Header: React.FC = () => {
  const location = useLocation();
  const linkData = location.pathname === "/" ? LINKS_DATA[0] : LINKS_DATA[1];

  return (
    <header className="mt-6 flex justify-between items-center xl:mt-10">
      <Link to="/" className="w-[7.125rem] xl:w-[10.5625rem]">
        <h1 className="sr-only">Gallery</h1>
        <img src="/images/logo.svg" alt="" />
      </Link>
      <Link
        to={linkData.href}
        className="text-neutral-500 text-[0.5625rem] font-bold md:text-[0.75rem]"
      >
        {linkData.text}
      </Link>
    </header>
  );
};
