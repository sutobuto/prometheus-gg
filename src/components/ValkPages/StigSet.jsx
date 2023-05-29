import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const StigSet = (props) => {
  return (
    <>
      <div className='stigbox'>
        {props.cardtitle && (
          <div
            style={{
              fontWeight: "bold",
              fontSize: "13px",
              color: "white",
              margin: "0px",
              padding: "0px",
              paddingBottom: "10px",
            }}
          >
            {props.cardtitle}
          </div>
        )}

        <div className='stigset'>
          <div style={{ margin: "auto 5px", fontWeight: "bold" }}>
            {props.number}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {props.percent && (
              <div
                style={{
                  paddingTop: "0px",
                  paddingBottom: "10px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <ProgressBar
                  completed={props.percent}
                  height={15}
                  width={270}
                  labelAlignment='left'
                  labelSize={11}
                  borderRadius={0}
                  baseBgColor='#404040'
                  animateOnRender
                  bgColor={
                    props.percent == 100
                      ? "green"
                      : props.percent > 90
                      ? "purple"
                      : "gray"
                  }
                />
              </div>
            )}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
              }}
            >
              <div className='stigcontainer'>
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "11px",
                    color: "gray",
                  }}
                >
                  {props.categ1}
                </span>
                <img
                  class={"stigimg " + props.type1}
                  src={props.stig1}
                />
                {props.name1}
              </div>
              <div className='stigcontainer'>
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "11px",
                    color: "gray",
                  }}
                >
                  {props.categ2}
                </span>
                <img
                  class={"stigimg " + props.type2}
                  src={props.stig2}
                />
                {props.name2}
              </div>
              <div className='stigcontainer'>
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "11px",
                    color: "gray",
                  }}
                >
                  {props.categ3}
                </span>
                <img
                  class={"stigimg " + props.type3}
                  src={props.stig3}
                />
                {props.name3}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StigSet;
