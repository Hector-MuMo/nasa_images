import type { JSX } from "react";
import useAPOD from "../hooks/useAPOD";
import useWindowDimensions from "../hooks/useWindowDimensions";
import "../styles/APOD.css";

const Apod = (): JSX.Element => {
  const { apod } = useAPOD();
  const { width } = useWindowDimensions();

  return (
    <section className="apod-section">
      {width > 768 ? (
        <>
          <div className="apod-info">
            <h2>{apod.title}</h2>
            <p>{apod.explanation}</p>
          </div>
          <figure className="apod-img">
            <img src={apod.hdurl} alt={apod.title} />
          </figure>
        </>
      ) : (
        <>
          <figure className="apod-img">
            <img src={apod.hdurl} alt={apod.title} />
          </figure>
          <div className="apod-info">
            <h2>{apod.title}</h2>
            <p>{apod.explanation}</p>
          </div>
        </>
      )}
    </section>
  );
};

export default Apod;
