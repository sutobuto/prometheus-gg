import "./CharList.css";
import "./CharIconCSS/Rank.css";
import "./CharIconCSS/Battlesuit.css";
import "./CharIconCSS/Element.css";

const CharIcon = (props) => {
  return (
    <div class='container'>
      <a href={props.link}>
        <div className={props.suit + " " + props.rank}>
          <img
            class='iconimg'
            src={props.src}
          />
          <div class={props.element}></div>
        </div>
      </a>
      <p class='valkname'>{props.valkname}</p>
    </div>
  );
};

export default CharIcon;
