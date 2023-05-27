import React from "react";
import Header from "../Header/Header.jsx";
import CharIcon from "./CharIcon.jsx";
import "./CharList.css";
import ValkData from "./ValkData.jsx";
import FilterBar from "./FilterBar.jsx";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const CharList = () => {
  const [search, setSearch] = React.useState("");
  // prettier-ignore
  const [rank, setRank] = React.useState("memes");
  const handleRank = (event, newRank) => {
    setRank(newRank);
  };
  return (
    <div class='appcard'>
      <div class='mainlist'>
        <div class='filtertab'>
          <FilterBar
            setSearch={setSearch}
            search={search}
          />
          <h2>Valkyrie Index</h2>
        </div>
        <div class='filterbuttons'>
          <div
            className='ranktext button'
            value='S'
            style={{ color: "rgb(255, 214, 78)" }}
          >
            S
          </div>
          <div
            className='ranktext button'
            value='A'
            style={{ color: "rgb(255, 0, 234)" }}
          >
            A
          </div>
          <div
            onClick={() => true}
            className='ranktext button'
            value='B'
            style={{ color: "rgb(164, 204, 255)" }}
          >
            B
          </div>

          <p style={{ verticalAlign: "middle", margin: 0 }}>│</p>

          <div class='button'>
            <img
              class='filterimg'
              src='/prometheus-gg/img/elems/Physical.webp'
            />
          </div>
          <div class='button'>
            <img
              class='filterimg'
              src='/prometheus-gg/img/elems/Fire.webp'
            />
          </div>
          <div class='button'>
            <img
              class='filterimg'
              src='/prometheus-gg/img/elems/Ice.webp'
            />
          </div>
          <div class='button'>
            <img
              class='filterimg'
              src='/prometheus-gg/img/elems/Lightning.webp'
            />
          </div>

          <p style={{ verticalAlign: "middle", margin: 0 }}>│</p>

          <div class='button'>
            <img
              class='filterimg'
              src='/prometheus-gg/img/types/psy.webp'
            />
          </div>
          <div class='button'>
            <img
              class='filterimg'
              src='/prometheus-gg/img/types/mech.webp'
            />
          </div>
          <div class='button'>
            <img
              class='filterimg'
              src='/prometheus-gg/img/types/bio.webp'
            />
          </div>
          <div class='button'>
            <img
              class='filterimg'
              src='/prometheus-gg/img/types/qua.webp'
            />
          </div>
          <div class='button'>
            <img
              class='filterimg'
              src='/prometheus-gg/img/types/img.webp'
            />
          </div>

          <p style={{ verticalAlign: "middle", margin: 0 }}>│</p>

          <div>er</div>
        </div>
        <div class='listcontainer'>
          {ValkData.sort((a, b) => {
            if (a.rank != b.rank) {
              if (a.rank == "S") return -1;
              if (b.rank == "S") return 1;
              if (b.rank == "B") return -1;
              if (a.rank == "B") return 1;
            }
            if (a.rank == b.rank) {
              if (a.valkname.toLowerCase() < b.valkname.toLowerCase()) {
                return -1;
              }
              if (a.valkname.toLowerCase() > b.valkname.toLowerCase()) {
                return 1;
              }
            }
            return 0;
          })
            .filter((valk) => valk.valkname.toLowerCase().includes(search))
            .map((e) => {
              return (
                <CharIcon
                  valkname={e.valkname}
                  suit={e.suit}
                  element={e.element}
                  rank={e.rank}
                  src={e.src}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default CharList;
