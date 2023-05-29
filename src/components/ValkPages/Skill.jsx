import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const Skill = (props) => {
  return (
    <>
      <div className='skillbox'>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            fontWeight: "bold",
            fontSize: "14px",
            color: "white",
            margin: "0px",
            padding: "0px",
            paddingBottom: "10px",
          }}
        >
          <div>{props.cardhead}</div>
          <div>{props.cardtitle}</div>
        </div>
        <div>
          {/* <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              marginBottom: 10,
            }}
          >
            <div class='skillgifcontainer'>
              <h5 class='skillgiftext'>Ground Basic ATK</h5>
              <img
                class='skillgif'
                src='/prometheus-gg/img/valks/kiana/skills/hofi/basic.gif'
              />
            </div>
            <div class='skillgifcontainer'>
              <h5 class='skillgiftext'>Aerial Basic ATK</h5>
              <img
                class='skillgif'
                src='/prometheus-gg/img/valks/kiana/skills/hofi/basic2.gif'
              />
            </div>
          </div> */}
          <div>{props.desc}</div>
        </div>
      </div>
    </>
  );
};

export default Skill;
