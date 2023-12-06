import React from "react";

const Cards = ({ data , index}) => {
  return (
    <div className="card">
        <img src={data.img} />
      <div className="cardContent">
        <h2>{data.title}</h2>
        <p>
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default Cards;
