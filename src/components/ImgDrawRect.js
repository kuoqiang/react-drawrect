import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
  useRef,
} from "react";

const ImgDrawRect = (props, ref) => {
  const canvasReft = useRef();
  const [_, render] = useState();
  const {
    src,
    width,
    height,
    lineColor,
    option = [],
    lineWidth,
    WrapperClassName,
  } = props;
  const [boxData, setBoxData] = useState(option);

  const renderRect = (boxData, ctx, img) => {
    let arr = [];
    boxData.forEach((List) => {
      var Cwidth = (width / img.width) * List.width;
      var Cheight = (height / img.height) * List.height;
      var Cx = (width / img.width) * List.left;
      var Cy = (height / img.height) * List.top;
      arr.push({
        width: Cwidth,
        height: Cheight,
        x: Cx,
        y: Cy,
      });
    });
    arr.forEach((item) => {
      ctx.lineWidth = lineWidth || 2;
      ctx.rect(item.x, item.y, item.width, item.height);
      ctx.strokeStyle = lineColor || "#f40";
      ctx.stroke();
    });
  };

  useImperativeHandle(
    ref,
    () => ({
      // 获取当前boxs数据
      getData: () => {
        return boxData;
      },
      // 设置boxs数据
      setData: (data) => {
        setBoxData(data);
      },
      getBlob: () => {
        const canvas = canvasReft.current;
        canvas.toBlob((blob)=>{
          console.log(blob,"二进制数据")
        })
      },
      clearRect: () => {
        const canvas = canvasReft.current;
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height); // 清空画布
      },
      upload: () => {
        let img = new Image();
        img.src = src;
        img.onload = () => {
          let canvas = document.createElement("canvas");
          let ctx = canvas.getContext("2d");
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
          let a = document.createElement("a");
          renderRect(boxData, ctx, img);
          const data = canvas.toDataURL("image/png");
          a.href = data;
          a.download = "测试图片.png";
          a.click();
          a = null;
        };
      },
    }),
    [boxData]
  );

  useEffect(() => {
    // 获取图片原始大小,根据当前设置宽高比例计算最后的位置
    var img = new Image();
    img.src = src;

    //根据最后的位置信息画坐标框
    const canvas = canvasReft.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 清空画布
    img.onload = () => {
      const ctx = canvas.getContext("2d");
      let arr = [];
      boxData.forEach((List) => {
        var Cwidth = (width / img.width) * List.width;
        var Cheight = (height / img.height) * List.height;
        var Cx = (width / img.width) * List.left;
        var Cy = (height / img.height) * List.top;
        arr.push({
          width: Cwidth,
          height: Cheight,
          x: Cx,
          y: Cy,
        });
      });

      arr.forEach((item) => {
        ctx.lineWidth = lineWidth || 2;
        // ctx.rect(item.x, item.y, item.width, item.height);
        ctx.strokeStyle = lineColor || "#f40";
        ctx.strokeRect(item.x, item.y, item.width, item.height);
      });
    };
  }, [props, boxData]);

  return (
    <div
      className={WrapperClassName}
      style={{
        position: "relative",
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <img
        src={src}
        onClick={render}
        style={{
          position: "absolute",
          width: `${width}px`,
          height: `${height}px`,
        }}
      />
      <canvas
        id="canvas"
        style={{ position: "absolute", zIndex: "100" }}
        ref={canvasReft}
        width={width}
        height={height}
      ></canvas>
    </div>
  );
};

export default forwardRef(ImgDrawRect);
