import "./index.css";

const Card1 = (props) => {
  const { each } = props;
  const { imageUrl, heading, description, link } = each;
  return (
    <div class="container1">
      <div class="card1">
        <a href={link} target="_blank">
          <div class="image1">
            <img src={imageUrl} alt="image" className="card1-image" />
          </div>
        </a>
        <div class="content1">
          <h3>{heading}</h3>
          <p className="para">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card1;
