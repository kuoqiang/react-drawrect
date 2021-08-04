import React, { useRef } from "react";
import ImgDrawRect from "../src/components/ImgDrawRect";
import imgSrc from "./assets/images/1.jpg";
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
        option={[{ left: 10, top: 10, width: 20, height: 20 }]}
      />
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
          myRef.current.setData([{ left: 20, top: 20, width: 20, height: 20 }]);
        }}
      >
        更改数据
      </button>
      <button onClick={() =>{
          myRef.current.upload()
      }}>下载图片</button>
    </div>
  );
}

export default App;
