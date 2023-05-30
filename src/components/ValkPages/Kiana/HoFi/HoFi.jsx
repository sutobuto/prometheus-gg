import React from "react";
import "./HoFi.css";
import "../../../CharList/CharList.css";
import StigSet from "../../StigSet";
import Team from "../../Team";
import Skill from "../../Skill";
import Filter from "../../Filter";
import StigData from "./StigData";
import TrioData from "./TrioData";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const HoFi = () => {
  const [stig, setStig] = React.useState("trio");

  const skillRef = React.useRef(null);
  const stigmataRef = React.useRef(null);
  const teamsRef = React.useRef(null);
  const elysianRef = React.useRef(null);
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

          <Filter
            stigmataRef={stigmataRef}
            skillRef={skillRef}
            elysianRef={elysianRef}
          />
          {/* MAIN BOX */}
          <div
            ref={stigmataRef}
            className='mainchar'
          >
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
          <div
            ref={skillRef}
            className='mainchar mainskill'
          >
            <h3>Skill Overview</h3>
            <Skill
              cardhead='Basic ATK'
              cardtitle='Supreme Blade, Reforged'
              desc={[
                "Tap [ATK] to launch a 5-sequence combo that deals Fire DMG. Tap [ULT] to jump airborne and [ULT] after a ground attack to perform an upward attack. Tap [ATK] airborne to perform Basic ATK mid-air. Tap [ULT] again while airborne to perform plunge ATK. Basic ATK stacks ",
                <span style={{ fontWeight: "bold", color: "#e491ff" }}>
                  Descent
                </span>,
                " on hit.",
              ]}
            />
            <Skill
              cardhead='Combo ATK'
              cardtitle='Searching Drifter, Answered'
              img={
                <div>
                  <div class='skillgifcontainer'>
                    <img
                      class='skillgif'
                      src='/prometheus-gg/img/valks/kiana/skills/hofi/combo1.gif'
                    />
                    <span class='skillgiftext'>Time Flint</span>
                  </div>
                  <div class='skillgifcontainer'>
                    <img
                      class='skillgif'
                      style={{ marginTop: 10 }}
                      src='/prometheus-gg/img/valks/kiana/skills/hofi/combo2.gif'
                    />
                    <span class='skillgiftext'>Moon Blade</span>
                  </div>
                </div>
              }
              desc={[
                "When full, hold [ATK] to consume all ",
                <span style={{ fontWeight: "bold", color: "#e491ff" }}>
                  Descent
                </span>,
                ,
                " and cast Combo ATK that deals Fire DMG and gives self-buffs on hit based on current stance. ",
                <span style={{ fontWeight: "bold", color: "#e491ff" }}>
                  Time Flint
                </span>,
                "'s Combo ATK makes enemies ",
                <span style={{ fontWeight: "bold" }}>take more Fire DMG</span>,
                " while ",
                <span style={{ fontWeight: "bold", color: "#e491ff" }}>
                  Moon Blade
                </span>,
                "'s Combo ATK ",
                <span style={{ fontWeight: "bold" }}>recovers SP</span>,
                ". ",
                "Casting Combo ATK switches between ",
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
                <div style={{ marginTop: 13 }}>
                  When Herrscher of Origin and Herrscher of Truth are present on
                  the team, Joint Burst makes Herrscher of Finality deal more
                  Total DMG and gives Combo ATKs additional effects:
                </div>,
                <div>
                  <span style={{ fontWeight: "bold", color: "#e491ff" }}>
                    Time Flint
                  </span>{" "}
                  - additionally makes enemies take more Total DMG for 15s.
                </div>,
                <div>
                  <span style={{ fontWeight: "bold", color: "#e491ff" }}>
                    Moon Blade
                  </span>{" "}
                  - additionally restores more SP.
                </div>,
                <div style={{ fontSize: 12, marginTop: 10 }}>
                  * Herrscher of Finality starts the battle in Time Flint
                  stance.
                </div>,
              ]}
            />
            <Skill
              cardhead='Evasion'
              cardtitle='Embarking Saintess, Divine'
              img={
                <div>
                  <div class='skillgifcontainer'>
                    <img
                      class='skillgif'
                      src='/prometheus-gg/img/valks/kiana/skills/hofi/atf.gif'
                    />
                    <span class='skillgiftext'>Absolute Time Fracture</span>
                  </div>
                </div>
              }
              desc={
                <div>
                  Can be triggered twice in a row. When airborne, evasion count
                  will reset once Herrscher of Finality touches the ground.
                  Ultimate Evasion triggers a 1.5s{" "}
                  <span style={{ fontWeight: "bold" }}>Time Fracture</span> and
                  gives 1 stack of{" "}
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
                    , Herrscher of Finality deals more Fire DMG and each Basic
                    ATK consumes{" "}
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
              cardhead='Ultimate (100 SP)'
              cardtitle='Deadly Finality, Surmounted'
              img={
                <div>
                  <div class='skillgifcontainer'>
                    <img
                      class='skillgif'
                      src='/prometheus-gg/img/valks/kiana/skills/hofi/ult1.gif'
                    />
                    <span class='skillgiftext'>Ultimate</span>
                  </div>
                  <div class='skillgifcontainer'>
                    <img
                      class='skillgif'
                      style={{ marginTop: 10 }}
                      src='/prometheus-gg/img/valks/kiana/skills/hofi/ult2.gif'
                    />
                    <span class='skillgiftext'>Joint Ultimate</span>
                  </div>
                </div>
              }
              desc={
                <div>
                  Herrscher of Finality leaps in the air under the cold
                  moonlight to unleash a dropkick that pauses all timers and
                  deals massive AOE Fire DMG to all enemies.
                  <div style={{ marginTop: 13 }}>
                    When Herrscher of Origin and Herrscher of Truth are in the
                    same team,{" "}
                    <span style={{ fontWeight: "bold", color: "#e491ff" }}>
                      Time Wave
                    </span>{" "}
                    does not reset on character switch and Ultimate is replaced
                    with a 125 SP cost{" "}
                    <span style={{ fontWeight: "bold", color: "#e491ff" }}>
                      Joint Ultimate
                    </span>
                    , during which the three characters perform a joint attack
                    that deals massive Fire, Ice and Lightning DMG.
                  </div>
                </div>
              }
            />
            <Skill
              cardhead='QTE'
              cardtitle='Eternal Blossom, Blessed'
              desc={
                <div>
                  Triggered when an enemy is Time-Slowed, ignited, knocked
                  airborne, or hit by Mei's Combo ATK. Deals Fire DMG and
                  induces a 2s global{" "}
                  <span style={{ fontWeight: "bold" }}>Time Fracture</span>. QTE
                  can connect to aerial Basic ATK SEQ 3.
                </div>
              }
            />
            <Skill
              cardhead='Leader'
              cardtitle='Lightwing of Comet'
              desc={
                <div>
                  Team deals more Elemental DMG. When Mei is present on the
                  team, both Mei and Herrscher of Finality deal even more
                  Elemental DMG
                </div>
              }
            />
          </div>
          {/* ELYSIAN REALM BOX */}
          <div
            ref={elysianRef}
            className='mainchar'
          >
            <h3>Elysian Realm</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default HoFi;
