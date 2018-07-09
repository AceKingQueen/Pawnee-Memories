import React from "react";
import "./PawneeCard.css";

const PawneeCard = props => (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
    </div>
    </div>
  );
  
  export default PawneeCard;