import React, { useRef } from "react";
import ImgDrawRect from "../src/components/ImgDrawRect";
import imgSrc from "./assets/images/result.jpg";
import getUrlToData from "../src/methods/getUrlToData";
function App() {
  const myRef = useRef();
  return (
    <div>
      <ImgDrawRect
        lineColor="#ff8000"
        lineWidth={3}
        ref={myRef}
        width={1920}
        height={1080}
        src={imgSrc}
        option={[
          {
            angle: -72.2,
            center_x: 1517,
            center_y: 494,
            height: 119,
            width: 459,
          },
        ]}
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
