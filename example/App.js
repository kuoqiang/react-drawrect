import React, { useRef } from "react";
import ImgDrawRect from "../src/components/ImgDrawRect";
import imgSrc from "./assets/images/1.jpg";
import  getUrlToData  from "../src/methods/getUrlToData";
function App() {
  const myRef = useRef();
  return (
    <div>
      <ImgDrawRect
        lineColor="blue"
        lineWidth={3}
        ref={myRef}
        width={400}
        height={400}
        src={imgSrc}
        option={[{ left: 10, top: 10, width: 50, height: 50 }]}
      />
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => {
            console.log(myRef.current.getData());
          }}
        >
          获取数据
        </button>

        <button
          onClick={() => {
            //   myRef.current.clearRect();
            myRef.current.setData([
              { left: 100, top: 100, width: 50, height: 50 },
            ]);
          }}
        >
          更改数据
        </button>
        <button
          onClick={() => {
            myRef.current.upload();
          }}
        >
          下载图片
        </button>
        <button
          onClick={() => {
            myRef.current.clearRect();
          }}
        >
          清空画布
        </button>
      </div>
    </div>
  );
}

export default App;
