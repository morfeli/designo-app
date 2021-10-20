import "./styles/GraphicCards.scss";

const GraphicCards = (props) => {
  return (
    <li className="graphiccards__container">
      <img
        className="graphiccards__container--img"
        src={props.image}
        alt="project-image"
      />
      <div className="graphiccards__container--textBox">
        <h1 className="graphiccards__container--title">{props.title}</h1>
        <p className="graphiccards__container--p">{props.description}</p>
      </div>
    </li>
  );
};

export default GraphicCards;
