const TemplateDetail = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={props.cardImage} alt="Card cap" />
      <hr className="dropdown-divider" />
      <div className="card-body">
        <h5 className="card-title">{props.cardTitle}</h5>
        <p className="card-text">
          Some quick example text to build on the {props.cardTitle} and make up
          the bulk of the card's content.
        </p>
        <a href={props.cardLink} className="btn btn-primary btn-custom">
          Start Drawing
        </a>
      </div>
    </div>
  );
};

export default TemplateDetail;
