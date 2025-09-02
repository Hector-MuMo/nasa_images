import { lazy, Suspense, type JSX } from "react";
import Loading from "./components/Loading";

import "./styles/APOD.css";

const Apod = lazy(() => import("./components/Apod"));

function App(): JSX.Element {
  return (
    <div id="wrap" className="apod-container">
      <h1>Astronomical Picture of the Day</h1>
      <Suspense fallback={<Loading />}>
        <Apod />
      </Suspense>
    </div>
  );
}

export default App;
