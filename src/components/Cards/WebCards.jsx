import "./WebCards.scss";

const WebCards = (props) => {
  return (
    <li className="webcards__container">
      <img
        className="webcards__container--img"
        src={props.image}
        alt="project-image"
      />
      <div className="webcards__container--textBox">
        <h1 className="webcards__container--title">{props.title}</h1>
        <p className="webcards__container--p">{props.description}</p>
      </div>
    </li>
  );
};

export default WebCards;
