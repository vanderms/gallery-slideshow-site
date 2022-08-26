import { useParams } from "react-router-dom";
import { usePaintings } from "@/services/hooks/paintings";
import { ConvertToURL } from "@/utilities/convert-name-to-url";
import { Link } from "react-router-dom";

export const DetailsSection: React.FC = () => {
  const { slug } = useParams();
  const paintings = usePaintings();
  const currentIndex = paintings.findIndex(
    (x) => ConvertToURL(x.name) === slug
  );
  const current = paintings[currentIndex];

  if (!current) {
    return (
      <section>
        <h2>404 | NOT FOUND</h2>
      </section>
    );
  }

  const prevUrl =
    "/details/" +
    ConvertToURL(
      paintings[(currentIndex + paintings.length - 1) % paintings.length].name
    );

  const nextUrl =
    "/details/" +
    ConvertToURL(paintings[(currentIndex + 1) % paintings.length].name);

  return (
    <>
      <section className="mt-6 md:mt-10 xl:grid xl:grid-cols-[39.5625rem,21.875rem] xl:justify-between xl:mt-[6.25rem]">
        <div className="md:relative">
          <div className="relative md:w-[29.6875rem]">
            <picture>
              <source
                media="(min-width: 45rem)"
                srcSet={`/${current.images.hero.large}`}
              />
              <img src={`/${current.images.hero.small}`} alt={current.name} />
            </picture>
            <button
              className="absolute flex items-center gap-4 bg-neutral-800/75 z-20 px-4 py-3
              top-4 left-4 md:top-auto md:bottom-4 hover:bg-neutral-800/25
            "
            >
              <span>
                <img src="/images/shared/icon-view-image.svg" alt="" />
              </span>
              <span className="text-neutral text-[0.625rem] leading-[0.75rem] font-bold">
                VIEW IMAGE
              </span>
            </button>
          </div>
          <div
            className="relative z-10 w-[min(74.6667%,17.5rem)] bg-neutral p-6 mt-[-2.9375rem] flex
        flex-col gap-2 mb-16
        md:absolute md:w-[27.8125rem] md:right-0 md:mt-0 md:top-0 md:pt-0 md:pb-[4.1875rem]
        md:px-[4.0625rem] md:mb-0 md:gap-6
        xxl:right-[-12.625rem]        
        "
          >
            <h2
              className="text-[1.5rem] text-neutral-800 font-bold leading-[1.8125rem] md:text-[3.5rem]
            md:leading-[4rem] relative z-20
          "
            >
              {current.name}
            </h2>
            <p className="text-[0.9375rem] leading-[1.1875rem] text-neutral-500">
              {current.artist.name}
            </p>
            <div
              className="w-16 absolute bottom-[-4rem] md:right-12 md:w-32 md:bottom-[-8rem]
            xxl:right-[12.625rem] xl:top-[31rem] xl:bottom-auto
          "
            >
              <img src={`/${current.artist.image}`} alt={current.artist.name} />
            </div>
          </div>
        </div>

        <div className="relative pt-14 md:pt-[8.6875rem] xl:pt-[7.1875rem] xxl:right-[7.8125rem]">
          <div
            className="absolute right-0 top-[-1.25rem] text-neutral-800 opacity-5 text-[6.25rem] font-bold
          md:top-16 md:left-0 md:text-[12.5rem] md:leading-[9.375rem] z-10 xl:top-0
        "
          >
            {current.year}
          </div>
          <div className="max-w-[28.5625rem] mx-auto">
            <p className="text-neutral-500 text-[0.875rem] leading-[1.75rem] relative z-20">
              {current.description}
            </p>
            <a
              href={current.source}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 md:mt-16 "
            >
              <span className="text-[0.5625rem] leading-[0.6875rem] text-neutral-500 font-bold">
                GO TO SOURCE
              </span>
            </a>
          </div>
        </div>
      </section>
      <nav
        role="secondary"
        className="full-bleed mt-[7.6875rem] relative border-t border-neutral-200 py-4"
      >
        <div className="w-[4.6875rem] absolute h-0 border-b border-neutral-800 top-0 left-0 xl:w-[12rem]"></div>
        <div className="container flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <h3
              className="text-[0.875rem] leading-[1.0625rem] text-neutral-800 font-bold
           md:text-[1.125rem] md:leading-[1.375rem]
         "
            >
              {current.name}
            </h3>
            <p
              className="text-[0.625rem] leading-[0.75rem] text-neutral-500 md:text-[0.8125rem]
           md:leading-[1rem]
         "
            >
              {current.artist.name}
            </p>
          </div>
          <div className="flex items-center gap-6 md:gap-10">
            <Link to={prevUrl} aria-label="see previous">
              <img src="/images/shared/icon-back-button.svg" alt="" />
            </Link>
            <Link to={nextUrl} aria-label="see next">
              <img src="/images/shared/icon-next-button.svg" alt="" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
