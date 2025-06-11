import { FC } from "react";
import "./Gallery.css";

const Gallery: FC = () => {
  return (
    <div id="GalleryContainer">
      <div className="top-row">
        <img src="/images/nocuous.jpg" alt="Gallery Photo 1" />
        <img src="/images/OnIce.jpg" alt="Gallery Photo 2" />
        <img src="/images/Fireys2017.jpg" alt="Gallery Photo 3" />
      </div>
      <div className="bottom-row">
        <img src="/images/FullDisplay.jpg" alt="Gallery Photo 4" />
      </div>
    </div>
  );
};

export default Gallery;
