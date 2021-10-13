import React from "react";
import realDealImg from "../../assets/about/desktop/image-real-deal.jpg";

const RealDeal = () => {
  return (
    <section className="realdeal__container">
      <div className="realdeal__container--imgBox">
        <img
          className="realdeal__container--img"
          src={realDealImg}
          alt="World Talent"
        />
      </div>
      <h1 className="realdeal__container--h1">The real deal</h1>
      <p className="realdeal__container--p">
        As strategic partners in our clients’ businesses, we are ready to take
        on any challenge as our own. Solving real problems require empathy and
        collaboration, and we strive to bring a fresh perspective to every
        opportunity. We make design and technology more accessible and give you
        tools to measure success.
      </p>
      <p className="realdeal__container--p">
        We are visual storytellers in appealing and captivating ways. By
        combining business and marketing strategies, we inspire audiences to
        take action and drive real results.
      </p>
    </section>
  );
};

export default RealDeal;
