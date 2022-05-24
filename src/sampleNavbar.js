import React, { useState } from "react";

export function SampleNavbar(props) {
  const [state, setState] = useState(false);
  const handler = () => {
    setState(!state);
  };
  return (
    <div className="SampleNavbar">
      <div className={`mobilMenu ${state ? "show": "hide"}`}>
        <div className="closeIcon" onClick={handler}>
          <i>{props.closeIcon}</i>
        </div>
        <ul>
          {props.menu.map((item) => (
            <li>
              <a href={item.link} onClick={handler}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="bar" onClick={handler}>
        <i>{props.openIcon}</i>
      </div>
      <div className="brand">
        <a href={props.brand.link}>
          {props.brand.src == "" ? <p>{props.brand.name}</p> : <img src={props.brand.src} />}
        </a>
      </div>
      <div className="menu">
        <ul>
          {props.menu.map((item) => (
            <li>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
