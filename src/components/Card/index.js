import "./index.css";

const Card = (props) => {
  const { each } = props;
  const { imageUrl, heading, description, link } = each;
  return (
    // <li className="li-card-container list-onhover">
    //   <img src={imageUrl} alt="img" className="card-image" />
    //   <div className="heading-desc">
    //     <h1>{heading}</h1>
    //     <p>{description}</p>
    //   </div>
    // </li>
    <a href={link} target="_blank">
      <div class="card">
        <img src={imageUrl} alt="img" />

        <div class="info">
          <h1>{heading}</h1>
          <p>{description}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
