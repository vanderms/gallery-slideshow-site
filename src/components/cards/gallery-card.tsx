import { Painting } from "@/services/models/paintings";
import { ConvertToURL } from "@/utilities/convert-name-to-url";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  painting: Painting;
  onLoad: () => void;
}

export const GalleryCard: React.FC<Props> = (props) => {
  const onLoad = () => {
    console.log("I have loaded");
    props.onLoad();
  };

  return (
    <Link to={"details/" + ConvertToURL(props.painting.name)}>
      <figure className="relative min-h-[10.625rem]">
        <img
          src={props.painting.images.thumbnail}
          alt={props.painting.name}
          onLoad={onLoad}
        />
        <figcaption className="gallery-card-caption">
          <h3 className="gallery-card-title">{props.painting.name}</h3>
          <p className="gallery-card-author">{props.painting.artist.name}</p>
        </figcaption>
      </figure>
    </Link>
  );
};
