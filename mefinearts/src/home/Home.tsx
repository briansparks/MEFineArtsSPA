import { FC, lazy, Suspense } from "react";
import Menu from "../menu/Menu";
import Schedule from "../schedule/Schedule";
import Footer from "../footer/Footer";
import "./Home.css";

const Gallery = lazy(() => import("../gallery/Gallery"));

const Home: FC = () => {
  return (
    <>
      <Menu />
      <div id="HomeImageContainer">
        <img id="HomeImage" src="../images/home.jpg" alt="Home" />
      </div>
      <Schedule />

      <Suspense fallback={<div>Loading Gallery...</div>}>
        <Gallery />
      </Suspense>

      <Footer />
    </>
  );
};

export default Home;
