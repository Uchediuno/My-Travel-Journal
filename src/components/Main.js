import React from "react";

function Main(props) {
  return (
    <div className="main-container">
      <div>
        <img src={props.item.image} className="card-image"/>
      </div>
      <div>
        <div classNAme="location-info">
          <img src="./location-icon.png" className="location-icon" />
          <span className="location">{props.item.location}</span>
          <span className="location-link">{props.item.link}</span>
        </div>
          <h1>{props.item.title}</h1>
          <p className="sub-heading">{props.item.date}</p>
          <p>{props.item.description}</p>
        </div>
    </div>

  );
}

export default Main;
