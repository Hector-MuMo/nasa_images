import { lazy, Suspense, type JSX } from "react";
import Loading from "../components/Loading";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/EPIC.css";
import useEPIC from "../hooks/useEPIC";

const EpicSliders = lazy(() => import("../components/Epic"));

const Earth = (): JSX.Element => {
  const { earthImg } = useEPIC();

  return (
    <div id="wrap" className="epic-container">
      <h1>Earth Polychromatic Imaging Camera</h1>
      <Suspense fallback={<Loading />}>
        <EpicSliders epics={earthImg} />
      </Suspense>
    </div>
  );
};

export default Earth;
