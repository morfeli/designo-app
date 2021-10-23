import "./styles/AppCards.scss";

const AppCards = (props) => {
  return (
    <li className="appcards__container">
      <div>
        <img
          className="appcards__container--img"
          src={props.image}
          alt="project"
        />
      </div>
      <div className="appcards__container--textBox">
        <h1 className="appcards__container--title">{props.title}</h1>
        <p className="appcards__container--p">{props.description}</p>
      </div>
    </li>
  );
};

export default AppCards;
