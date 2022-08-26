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
    <header className="border-b border-neutral-200 max-w-[85rem] mx-auto">
      <div className="h-20 md:h-[5.5rem] xl:h-[8rem] container flex justify-between items-center">
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
      </div>
    </header>
  );
};
