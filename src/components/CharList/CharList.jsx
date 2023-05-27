import React from "react";
import Header from "../Header/Header.jsx";
import CharIcon from "./CharIcon.jsx";
import "./CharList.css";
import ValkData from "./ValkData.jsx";
import FilterBar from "./FilterBar.jsx";

const CharList = () => {
  const [search, setSearch] = React.useState("");
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
          <button
            class='ranktext'
            style={{ color: "rgb(255, 214, 78)" }}
          >
            S
          </button>
          <button
            class='ranktext'
            style={{ color: "rgb(255, 0, 234)" }}
          >
            A
          </button>
          <button
            onClick={() => true}
            class='ranktext'
            style={{ color: "rgb(164, 204, 255)" }}
          >
            B
          </button>

          <p style={{ verticalAlign: "middle", margin: 0 }}>│</p>

          <div style={{ verticalAlign: "middle", margin: 0 }}>test</div>
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
