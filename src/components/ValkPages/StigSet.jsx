import React from "react";

const StigSet = (props) => {
  return (
    <>
      <div className='stigset'>
        <div className='stigcontainer'>
          <span style={{ fontWeight: "bold", fontSize: "11px" }}>
            {props.categ1}
          </span>
          <img
            class={"stigimg " + props.type1}
            src={props.stig1}
          />
          {props.name1}
        </div>
        <div className='stigcontainer'>
          <span style={{ fontWeight: "bold", fontSize: "11px" }}>
            {props.categ2}
          </span>
          <img
            class={"stigimg " + props.type2}
            src={props.stig2}
          />
          {props.name2}
        </div>
        <div className='stigcontainer'>
          <span style={{ fontWeight: "bold", fontSize: "11px" }}>
            {props.categ3}
          </span>
          <img
            class={"stigimg " + props.type3}
            src={props.stig3}
          />
          {props.name3}
        </div>
      </div>
    </>
  );
};

export default StigSet;
