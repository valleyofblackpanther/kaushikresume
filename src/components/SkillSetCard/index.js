import "./index.css";

const SkillSetCard = (props) => {
  const { each } = props;
  const { heading, list } = each;

  return (
    <li className="li-skills-set-container">
      <h1>{heading}</h1>
      <ul className="ul-skills-list">
        {list.map((each) => (
          <li>{each.name}</li>
        ))}
      </ul>
    </li>
  );
};

export default SkillSetCard;
