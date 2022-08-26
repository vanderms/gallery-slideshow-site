import { Painting } from "@/services/models/paintings";
import { useState } from "react";

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
  );
};
