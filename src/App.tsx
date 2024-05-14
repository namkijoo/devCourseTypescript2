// import { useState } from "react";
import { appConatiner, board, buttons } from "./App.css";

function App() {
  return (
    <div className={appConatiner}>
      <div className={board}></div>
      <div className={buttons}>
        <button>이 게시판 삭제하기</button>
        <button></button>
      </div>
    </div>
  );
}

export default App;
