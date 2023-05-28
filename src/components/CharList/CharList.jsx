import React from "react";
import Header from "../Header/Header.jsx";
import CharIcon from "./CharIcon.jsx";
import "./CharList.css";
import ValkData from "./ValkData.jsx";
import FilterBar from "./FilterBar.jsx";
import FilterButtons from "./FilterButtons.jsx";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const CharList = () => {
  const [search, setSearch] = React.useState("");
  // prettier-ignore
  const [rank, filterRank] = React.useState("");
  const [elem, filterElem] = React.useState("");
  const [type, filterType] = React.useState("");
  const [elysian, filterElysian] = React.useState(false);

  const handleFilter = (newFilter, filterFunc) => {
    console.log(type);
    console.log(newFilter);
    filterFunc(newFilter);
    console.log(type);
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

        <FilterButtons
          filterFunc={handleFilter}
          filterRank={filterRank}
          filterElem={filterElem}
          filterType={filterType}
          filterElysian={filterElysian}
          rank={rank}
          elem={elem}
          type={type}
          elysian={elysian}
        />

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
            .filter((valk) => {
              if (!valk.valkname.toLowerCase().includes(search)) return false;
              if (!valk.rank.includes(rank)) return false;
              if (!valk.element.includes(elem)) return false;
              if (!valk.suit.includes(type)) return false;
              if (elysian) return valk.elysian;
              return true;
            })
            .map((e) => {
              return (
                <CharIcon
                  link={e.link}
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
