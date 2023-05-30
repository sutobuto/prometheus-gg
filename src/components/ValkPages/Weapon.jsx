import React from "react";

const Weapon = (props, { bads }) => {
  const goods = props.goods;
  return (
    <div
      className='skillbox'
      style={{
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "flex-start",
        height: 150,
        width: 390,
      }}
    >
      <div>
        <img
          class='weapon ssr'
          src={props.img}
        />
      </div>
      <div
        style={{
          marginLeft: 30,
          textAlign: "left",
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: 14 }}>{props.weapon}</div>
        <div style={{ fontSize: 12, marginTop: 5, color: "lightgreen" }}>
          {goods.map((yea) => {
            return <div>{yea}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Weapon;
