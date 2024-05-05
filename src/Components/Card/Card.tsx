import React from "react";
import "./Card.css";

type Props = {};

const Card = (props: Props) => {
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1612428978260-2b9c7df20150?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        alt=""
      />
      <div className="details">
        <h2>AAPL</h2>
        <p>$110</p>
      </div>
      <p className="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit harum
        sed, cumque dolorem dolorum natus quidem soluta culpa vero in voluptas
        eaque praesentium ab debitis aliquid beatae dolores? Eum, obcaecati?
      </p>
    </div>
  );
};

export default Card;