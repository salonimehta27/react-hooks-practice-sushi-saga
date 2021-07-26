import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiList, setSushiList] = useState([]);
  const [index, setIndex] = useState(0)
  const [newSushiList, setNewSushiList] = useState(sushiList)

  useEffect(() => {
    fetch(API).then(resp => resp.json()).then(data => {
      setSushiList(data)
      setNewSushiList(data.slice(index, index + 4))
    })
  }, [index])

  function handleClickMore() {
    setIndex(() => index + 4)
    setNewSushiList(sushiList.slice(index, index + 4))
  }
  return (
    <div className="app">
      <SushiContainer sushiList={sushiList} newSushiList={newSushiList} onMoreClick={handleClickMore} />
      <Table />
    </div>
  );
}

export default App;
