import React from "react";
import "./RealDeal.scss";

const RealDeal = () => {
  return (
    <section className="realdeal__container">
      <div className="realdeal__container--imgBox">
        <div className="realdeal__container--img"></div>
      </div>
      <div className="realdeal__container--textBox">
        <h1 className="realdeal__container--h1">The real deal</h1>
        <p className="realdeal__container--p">
          As strategic partners in our clients’ businesses, we are ready to take
          on any challenge as our own. Solving real problems require empathy and
          collaboration, and we strive to bring a fresh perspective to every
          opportunity. We make design and technology more accessible and give
          you tools to measure success.
        </p>
        <p className="realdeal__container--p">
          We are visual storytellers in appealing and captivating ways. By
          combining business and marketing strategies, we inspire audiences to
          take action and drive real results.
        </p>
      </div>
    </section>
  );
};

export default RealDeal;
