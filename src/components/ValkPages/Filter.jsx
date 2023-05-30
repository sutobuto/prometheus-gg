import React from "react";
import "./Kiana/HoFi/HoFi";

const Filter = (props) => {
  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 100,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div
        class='mainchar'
        style={{
          padding: 0,
          justifyContent: "flex-start",
          alignItems: "center",
          borderRadius: 12,
        }}
      >
        <div
          onClick={() => handleScroll(props.weaponRef)}
          class='scrollbutton'
        >
          Weapon
        </div>
        <div
          onClick={() => handleScroll(props.stigmataRef)}
          class='scrollbutton'
        >
          Stigmata
        </div>
        <div
          onClick={() => handleScroll(props.stigmataRef)}
          class='scrollbutton'
        >
          Best Teams
        </div>
        <div
          onClick={() => handleScroll(props.skillRef)}
          class='scrollbutton'
        >
          Skill Overview
        </div>
        <div
          onClick={() => handleScroll(props.abyssRef)}
          class='scrollbutton'
        >
          Abyss Coverage
        </div>
        <div
          onClick={() => handleScroll(props.elysianRef)}
          class='scrollbutton'
        >
          Elysian Realm
        </div>
        <div
          onClick={() => handleScroll(props.stigmataRef)}
          class='scrollbutton'
        >
          Guides
        </div>
      </div>
    </>
  );
};

export default Filter;
