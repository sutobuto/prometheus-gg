import React from "react";
import "./CharList.css";

const FilterButtons = (props) => {
  return (
    <div class='filterbuttons'>
      <div
        class={
          "button" + " ranktext" + (props.rank == "S" ? " buttonHighlight" : "")
        }
        value='S'
        style={{ color: "rgb(255, 214, 78)" }}
        onClick={() =>
          props.filterFunc(props.rank == "S" ? "" : "S", props.filterRank)
        }
      >
        S
      </div>
      <div
        class={
          "button" + " ranktext" + (props.rank == "A" ? " buttonHighlight" : "")
        }
        value='A'
        style={{ color: "rgb(255, 0, 234)" }}
        onClick={() =>
          props.filterFunc(props.rank == "A" ? "" : "A", props.filterRank)
        }
      >
        A
      </div>
      <div
        class={
          "button" + " ranktext" + (props.rank == "B" ? " buttonHighlight" : "")
        }
        value='B'
        style={{ color: "rgb(164, 204, 255)" }}
        onClick={() =>
          props.filterFunc(props.rank == "B" ? "" : "B", props.filterRank)
        }
      >
        B
      </div>

      <p style={{ verticalAlign: "middle", margin: 0 }}>│</p>

      <div
        class={"button" + (props.elem == "physical" ? " buttonHighlight" : "")}
        onClick={() =>
          props.filterFunc(
            props.elem == "physical" ? "" : "physical",
            props.filterElem
          )
        }
      >
        <img
          class='filterimg'
          src='/prometheus-gg/img/elems/Physical.webp'
        />
      </div>
      <div
        class={"button" + (props.elem == "fire" ? " buttonHighlight" : "")}
        onClick={() =>
          props.filterFunc(props.elem == "fire" ? "" : "fire", props.filterElem)
        }
      >
        <img
          class='filterimg'
          src='/prometheus-gg/img/elems/Fire.webp'
        />
      </div>
      <div
        class={"button" + (props.elem == "ice" ? " buttonHighlight" : "")}
        onClick={() =>
          props.filterFunc(props.elem == "ice" ? "" : "ice", props.filterElem)
        }
      >
        <img
          class='filterimg'
          src='/prometheus-gg/img/elems/Ice.webp'
        />
      </div>
      <div
        class={"button" + (props.elem == "lightning" ? " buttonHighlight" : "")}
        onClick={() =>
          props.filterFunc(
            props.elem == "lightning" ? "" : "lightning",
            props.filterElem
          )
        }
      >
        <img
          class='filterimg'
          src='/prometheus-gg/img/elems/Lightning.webp'
        />
      </div>

      <p style={{ verticalAlign: "middle", margin: 0 }}>│</p>

      <div
        class={"button" + (props.type == "psy" ? " buttonHighlight" : "")}
        onClick={() =>
          props.filterFunc(props.type == "psy" ? "" : "psy", props.filterType)
        }
      >
        <img
          class='filterimg'
          src='/prometheus-gg/img/types/psy.webp'
        />
      </div>
      <div
        class={"button" + (props.type == "mech" ? " buttonHighlight" : "")}
        onClick={() =>
          props.filterFunc(props.type == "mech" ? "" : "mech", props.filterType)
        }
      >
        <img
          class='filterimg'
          src='/prometheus-gg/img/types/mech.webp'
        />
      </div>
      <div
        class={"button" + (props.type == "bio" ? " buttonHighlight" : "")}
        onClick={() =>
          props.filterFunc(props.type == "bio" ? "" : "bio", props.filterType)
        }
      >
        <img
          class='filterimg'
          src='/prometheus-gg/img/types/bio.webp'
        />
      </div>
      <div
        class={"button" + (props.type == "qua" ? " buttonHighlight" : "")}
        onClick={() =>
          props.filterFunc(props.type == "qua" ? "" : "qua", props.filterType)
        }
      >
        <img
          class='filterimg'
          src='/prometheus-gg/img/types/qua.webp'
        />
      </div>
      <div
        class={"button" + (props.type == "img" ? " buttonHighlight" : "")}
        onClick={() =>
          props.filterFunc(props.type === "img" ? "" : "img", props.filterType)
        }
      >
        <img
          class='filterimg'
          src='/prometheus-gg/img/types/img.webp'
        />
      </div>

      <p style={{ verticalAlign: "middle", margin: 0 }}>│</p>

      <div
        class={"button" + (props.elysian ? " buttonHighlight" : "")}
        onClick={() => props.filterFunc(!props.elysian, props.filterElysian)}
      >
        <img
          class='filterimg'
          style={{ width: 35, height: 35 }}
          src='/prometheus-gg/img/elysian-realm/elysian-realm.webp'
        />
      </div>
    </div>
  );
};

export default FilterButtons;
