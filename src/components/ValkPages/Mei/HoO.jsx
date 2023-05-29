import React from "react";
import "../Kiana/HoFi/HoFi.css";
import "../../CharList/CharList.css";
import StigSet from "../StigSet";

const HoO = () => {
  return (
    <>
      <div className='appcard'>
        <div className='charlist'>
          <div className='heading'>
            <img
              class='descimg img S'
              src='/prometheus-gg/img/valks/mei/HOOicon.webp'
            />
            <div className='valkdesc'>
              <span style={{ fontSize: "13px" }}>Raiden Mei</span>
              <h1 class='titlename'>Herrscher of Origin</h1>
              <div className='infoblocks'>
                <div
                  className='basicinfo'
                  style={{ color: "gold", fontWeight: "bold" }}
                >
                  S-rank
                </div>
                <div
                  className='basicinfo'
                  style={{ fontWeight: "bold" }}
                >
                  DPS
                </div>
                <div
                  className='basicinfo'
                  style={{ color: "yellow" }}
                >
                  <img
                    class='imgblock'
                    src='/prometheus-gg/img/elems/Lightning.webp'
                  />
                  Lightning
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
          <div className='mainchar'>
            <div>
              <h3>Stigmata Comparison</h3>
              <StigSet
                number='1'
                stig1='/prometheus-gg/img/stigs/kiana/kiana-t.webp'
                stig2='/prometheus-gg/img/stigs/kiana/kiana-m.webp'
                stig3='/prometheus-gg/img/stigs/kiana/kiana-b.webp'
                name1='Kiana Kaslana'
                name2='Kiana Kaslana'
                name3='Kiana Kaslana'
                categ1='T'
                categ2='M'
                categ3='B'
              />
              <StigSet
                number='2'
                stig1='/prometheus-gg/img/stigs/kiana/kiana-t.webp'
                stig2='/prometheus-gg/img/stigs/kiana/kiana-m.webp'
                stig3='/prometheus-gg/img/stigs/newton/newton-b.webp'
                name1='Kiana Kaslana'
                name2='Kiana Kaslana'
                name3='Newton'
                categ1='T'
                categ2='M'
                categ3='B'
              />
              <StigSet
                number='3'
                stig1='/prometheus-gg/img/stigs/kiana/kiana-t.webp'
                stig2='/prometheus-gg/img/stigs/thales/thales-m.webp'
                stig3='/prometheus-gg/img/stigs/kiana/kiana-b.webp'
                name1='Kiana Kaslana'
                name2='Thales'
                name3='Kiana Kaslana'
                categ1='T'
                categ2='M'
                categ3='B'
              />
              <StigSet
                number='4'
                stig1='/prometheus-gg/img/stigs/himeko/himeko-t.webp'
                stig2='/prometheus-gg/img/stigs/kiana/kiana-m.webp'
                stig3='/prometheus-gg/img/stigs/kiana/kiana-b.webp'
                name1='Murata Himeko'
                name2='Kiana Kaslana'
                name3='Kiana Kaslana'
                categ1='T'
                categ2='M'
                categ3='B'
              />
              <StigSet
                number='5'
                stig1='/prometheus-gg/img/stigs/turg/turg-t.webp'
                stig2='/prometheus-gg/img/stigs/thales/thales-m.webp'
                stig3='/prometheus-gg/img/stigs/turg/turg-b.webp'
                name1='Turgenev'
                name2='Thales'
                name3='Turgenev'
                categ1='T'
                categ2='M'
                categ3='B'
              />
              <div style={{ fontSize: 13, color: "gray" }}>
                * tested with HoFi-HoO-HoTr
              </div>
            </div>
            <div>
              <h3>Best Teams</h3>
              <StigSet
                cardtitle='Herrscher Trio'
                stig1='/prometheus-gg/img/valks/kiana/HOFIicon.webp'
                stig2='/prometheus-gg/img/valks/mei/HOOicon.webp'
                stig3='/prometheus-gg/img/valks/bronya/HOTRicon.webp'
                name1='Herrscher of Finality (DPS)'
                type1='img'
                name2='Herrscher of Origin (Support/Sub-DPS)'
                type2='img'
                name3='Herrscher of Truth (Support/Sub-DPS)'
                type3='img'
                categ1='DPS'
                categ2='Sub-DPS'
                categ3='Sub-DPS'
              />
              <StigSet
                stig1='/prometheus-gg/img/valks/kiana/HOFIicon.webp'
                stig2='/prometheus-gg/img/valks/misc/CNicon.webp'
                stig3='/prometheus-gg/img/valks/bronya/HOTRicon.webp'
                name1='Herrscher of Finality'
                type1='img'
                name2='Chrono Navi'
                type2='mech'
                name3='Herrscher of Truth'
                type3='img'
                categ1='DPS'
                categ2='Support'
                categ3='Support'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HoO;
