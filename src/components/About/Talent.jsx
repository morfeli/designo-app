import React from "react";
import "./styles/Talent.scss";

const Talet = () => {
  return (
    <section className="talent__container">
      <div className="talent__container--imgBox">
        <div className="talent__container--img"></div>
      </div>
      <div className="talent__container--textBox">
        <h1 className="talent__container--h1">World-class talent</h1>
        <p className="talent__container--p">
          We are a crew of strategists, problem-solvers, and technologists.
          Every design is thoughtfully crafted from concept to launch, ensuring
          success in its given market. We are constantly updating our skills in
          a myriad of platforms.
        </p>
        <p className="talent__container--p">
          Our team is multi-disciplinary and we are not merely interested in
          form — content and meaning are just as important. We give great
          importance to craftsmanship, service, and prompt delivery. Clients
          have always been impressed with our high-quality outcomes that
          encapsulates their brand’s story and mission.
        </p>
      </div>
    </section>
  );
};

export default Talet;
