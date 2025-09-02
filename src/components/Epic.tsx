import { type JSX } from "react";
import { Carousel } from "antd";
import "../styles/EPIC.css";
import type { Epic } from "../types/epic";

interface EpicProps {
  epics: Epic[];
}

const Epic = ({ epics }: EpicProps): JSX.Element => {
  const sliders = epics.map((epic) => (
    <div key={epic.identifier} className="epic-img-container">
      <p>{epic.date}</p>
      <div>
        <img
          src={`https://epic.gsfc.nasa.gov/archive/natural/2025/07/15/jpg/${epic.image}.jpg`}
          alt="earth"
        />
      </div>
    </div>
  ));

  return (
    <section className="epic-section">
      <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={3000}>
        {sliders}
      </Carousel>
    </section>
  );
};

export default Epic;
