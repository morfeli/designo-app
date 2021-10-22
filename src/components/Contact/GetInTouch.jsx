import { Link } from "react-router-dom";
import "./styles/GetInTouch.scss";

const GetInTouch = () => {
  return (
    <div className="contactus__container">
      <div className="contactus__container--textBox">
        <h1 className="contactus__container--h1">
          Let's talk about your project
        </h1>
        <p className="contactus__container--p">
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>

      <Link to="/contact">
        <button className="contactus__container--btn">GET IN TOUCH</button>
      </Link>
    </div>
  );
};

export default GetInTouch;
