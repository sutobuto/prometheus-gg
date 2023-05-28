import React from "react";
import "./HoFi.css";

const HoFi = () => {
  return (
    <>
      <div className='appcard'>
        <div className='mainlist'>
          <img
            class='descimg img S'
            src='/prometheus-gg/img/valks/kiana/HOFIicon.webp'
          />
          <div className='valkdesc'>
            <h1 class='titlename'>Herrscher of Finality</h1>
            <div className='infoblocks'>
              <div
                className='basicinfo'
                style={{ color: "gold", fontWeight: "bold" }}
              >
                S-rank
              </div>
              <div
                className='basicinfo'
                style={{ color: "orange" }}
              >
                <img
                  class='imgblock'
                  src='/prometheus-gg/img/elems/Fire.webp'
                />
                Fire
              </div>
              <div
                className='basicinfo'
                style={{ color: "#F0E9BE" }}
              >
                <img
                  class='imgblock'
                  src='/prometheus-gg/img/types/img.webp'
                />
                Imaginary
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HoFi;
