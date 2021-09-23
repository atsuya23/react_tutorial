import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountButton = () => {
    setNum(num + 1);
  };
  const onClickOnOffButton = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountButton}>カウントアップ</button>
      <br></br>
      <button onClick={onClickOnOffButton}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(*_*;</p>}
    </>
  );
};

export default App;
