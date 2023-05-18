import React from "react";
import "./ValkCard.css";

function ValkCard(props) {
  return (
    <>
      <div class={props.cardname}>
        <h5>{props.titlename}</h5>
      </div>
    </>
  );
}

export default ValkCard;
