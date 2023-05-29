import React from "react";
import "./HoFi.css";
import "../../../CharList/CharList.css";
import StigSet from "../../StigSet";
import Team from "../../Team";
import Skill from "../../Skill";
import StigData from "./StigData";
import TrioData from "./TrioData";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const HoFi = () => {
  const [stig, setStig] = React.useState("trio");
  return (
    <>
      <div className='appcard'>
        <div className='charlist'>
          {/* MAIN HEADING */}
          <div className='heading'>
            <img
              class='descimg img S'
              src='/prometheus-gg/img/valks/kiana/HOFIicon.webp'
            />
            {/* MAIN HEADING */}
            <div className='valkdesc'>
              <span style={{ fontSize: "13px" }}>Kiana Kaslana</span>
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
                  style={{ fontWeight: "bold" }}
                >
                  DPS
                </div>
                <div
                  className='basicinfo'
                  style={{ color: "#fc811c", fontWeight: "bold" }}
                >
                  <img
                    class='imgblock'
                    src='/prometheus-gg/img/elems/Fire.webp'
                  />
                  Fire
                </div>
                <div
                  className='basicinfo'
                  style={{ color: "#f0ff80", fontWeight: "bold" }}
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

          {/* MAIN BOX */}
          <div className='mainchar'>
            {/* STIGMATA COMPARISON */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: 27,
                  justifyContent: "space-between",
                }}
              >
                <h3>Stigmata Comparison</h3>
                <select
                  defaultValue={"trio"}
                  onChange={(e) => setStig(e.target.value)}
                >
                  <option value={"trio"}>Trio</option>
                  <option value={"standard"}>Standard</option>
                </select>
              </div>

              {stig == "trio" &&
                StigData.map((data) => {
                  return (
                    <StigSet
                      number={data.number}
                      percent={data.percent}
                      stig1={data.stig1}
                      stig2={data.stig2}
                      stig3={data.stig3}
                      name1={data.name1}
                      name2={data.name2}
                      name3={data.name3}
                    />
                  );
                })}
              {stig == "standard" &&
                TrioData.map((data) => {
                  return (
                    <StigSet
                      number={data.number}
                      percent={data.percent}
                      stig1={data.stig1}
                      stig2={data.stig2}
                      stig3={data.stig3}
                      name1={data.name1}
                      name2={data.name2}
                      name3={data.name3}
                    />
                  );
                })}

              {stig == "standard" && (
                <div style={{ fontSize: 13, color: "gray" }}>
                  tested with HoFi-CN-HoTr
                </div>
              )}
              <div style={{ fontSize: 13, color: "gray" }}>
                * Kiana B generates SP; use TB or MB for smoother rotations
              </div>
            </div>
            {/* BEST TEAMS */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: 27,
                  justifyContent: "space-between",
                }}
              >
                <h3>Best Teams</h3>
              </div>

              <Team
                cardtitle='Herrscher Trio'
                number='1'
                stig1='/prometheus-gg/img/valks/kiana/HOFIicon.webp'
                stig2='/prometheus-gg/img/valks/mei/HOOicon.webp'
                stig3='/prometheus-gg/img/valks/bronya/HOTRicon.webp'
                name1='Herrscher of Finality'
                type1='img'
                name2='Herrscher of Origin'
                type2='img'
                name3='Herrscher of Truth'
                type3='img'
                categ1='DPS'
                categ2='Sub-DPS'
                categ3='Breach'
              />
              <Team
                cardtitle='Standard Fire'
                number='2'
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
                categ2='Team SP'
                categ3='Breach'
              />
              <Team
                cardtitle='Standard Fire (Budget)'
                number='3'
                stig1='/prometheus-gg/img/valks/kiana/HOFIicon.webp'
                stig2='/prometheus-gg/img/valks/flamechaser/RCicon.webp'
                stig3='/prometheus-gg/img/valks/fuhua/AEicon.webp'
                name1='Herrscher of Finality'
                type1='img'
                name2='Reverist Calico'
                type2='img'
                name3='Azure Empyrea'
                type3='psy'
                categ1='DPS'
                categ2='Team SP'
                categ3='Breach'
              />
            </div>
          </div>
          {/* SKILL BOX */}
          <div className='mainchar mainskill'>
            <h3>Skill Overview</h3>
            <Skill
              cardhead='Basic ATK'
              cardtitle='Supreme Blade, Reforged'
              desc={[
                "Tap [ATK] to launch a 5-sequence combo that deals Fire DMG. Tap [ULT] to jump airborne or [ULT] after a ground attack to perform an upward attack. Tap [ATK] airborne to perform Basic ATK mid-air. Tap [ULT] again while airborne to perform plunge ATK. Basic ATK stacks ",
                <span style={{ fontWeight: "bold", color: "#e491ff" }}>
                  Descent
                </span>,
                " on hit.",
              ]}
            />
            <Skill
              cardhead='Combo ATK'
              cardtitle='Searching Drifter, Answered'
              desc={[
                "When full, hold [ATK] to consume all ",
                <span style={{ fontWeight: "bold", color: "#e491ff" }}>
                  Descent
                </span>,
                ,
                " and cast Combo ATK that deals Fire DMG. Casting Combo ATK switches between ",
                <span style={{ fontWeight: "bold", color: "#e491ff" }}>
                  Time Flint
                </span>,
                " and ",
                <span style={{ fontWeight: "bold", color: "#e491ff" }}>
                  Moon Blade
                </span>,
                " stances and gives 1 stack of ",
                <span style={{ fontWeight: "bold", color: "#e491ff" }}>
                  Time Wave
                </span>,
                ".",
                <div style={{ fontSize: 12, marginTop: 10 }}>
                  * Herrscher of Finality starts the battle in Time Flint
                  stance.
                </div>,
              ]}
            />
            <Skill
              cardhead='Evasion'
              cardtitle='Embarking Saintess, Divine'
              desc={
                <div>
                  Can be triggered twice in a row. When airborne, evasion count
                  will reset once Herrscher of Finality touches the ground.
                  Ultimate Evasion triggers a 1.5s{" "}
                  <span style={{ fontWeight: "bold" }}>Time Fracture</span> and
                  gains 1 stack of{" "}
                  <span style={{ fontWeight: "bold", color: "#e491ff" }}>
                    Descent
                  </span>
                  .
                  <div style={{ marginTop: 13 }}>
                    When Herrscher of Finality has 2 stacks of{" "}
                    <span style={{ fontWeight: "bold", color: "#e491ff" }}>
                      Time Wave
                    </span>
                    , hold {"[EVA]"} to gain 5 stacks of{" "}
                    <span style={{ fontWeight: "bold", color: "#e491ff" }}>
                      Descent
                    </span>{" "}
                    and trigger{" "}
                    <span style={{ fontWeight: "bold", color: "#e491ff" }}>
                      Absolute Time Fracture
                    </span>
                    , during which all skill timers and stage timers freeze and
                    Herrscher of Finality switches to{" "}
                    <span style={{ fontWeight: "bold", color: "#e491ff" }}>
                      Finale Stance
                    </span>
                    . During{" "}
                    <span style={{ fontWeight: "bold", color: "#e491ff" }}>
                      Finale Stance
                    </span>
                    , each Basic ATK consumes{" "}
                    <span style={{ fontWeight: "bold", color: "#e491ff" }}>
                      Descent
                    </span>{" "}
                    on hit. When all{" "}
                    <span style={{ fontWeight: "bold", color: "#e491ff" }}>
                      Descent
                    </span>{" "}
                    is consumed, Herrscher of Finality auto-casts Combo ATK and
                    ends{" "}
                    <span style={{ fontWeight: "bold", color: "#e491ff" }}>
                      Finale Stance
                    </span>
                    .
                  </div>
                </div>
              }
            />
            <Skill
              cardhead='QTE'
              cardtitle='Eternal Blossom, Blessed'
            />
            <Skill
              cardhead='Ultimate'
              cardtitle='Deadly Finality, Surmounted'
            />
          </div>
          {/* ELYSIAN REALM BOX */}
          <div className='mainchar'>
            <h3>Elysian Realm</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default HoFi;
