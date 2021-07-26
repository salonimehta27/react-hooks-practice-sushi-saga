import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ sushiList, newSushiList, onMoreClick }) {

  const sushis = newSushiList.map(sushi => <Sushi key={sushi.id}
    name={sushi.name}
    image={sushi.img_url}
    price={sushi.price}></Sushi>)

  return (
    <div className="belt">
      {sushis}
      <MoreButton sushiList={sushiList} onMoreClick={onMoreClick} />
    </div>
  );
}

export default SushiContainer;
