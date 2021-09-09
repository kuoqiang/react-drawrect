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

  //渲染矩形
  const renderRect = (boxData, ctx, img) => {
    img.onload = () => {
      let arr = [];
      boxData.forEach((List) => {
        let Cwidth = (width / img.width) * List.width;
        let Cheight = (height / img.height) * List.height;
        if (List.angle) {
          let Cx = (width / img.width) * (List.center_x - List.width / 2);
          let Cy = (height / img.height) * (List.center_y - List.height / 2);
          let Ccenter_x = (width / img.width) * List.center_x;
          let Ccenter_y = (height / img.height) * List.center_y;
          arr.push({
            width: Cwidth,
            height: Cheight,
            x: Cx,
            y: Cy,
            center_x: Ccenter_x,
            center_y: Ccenter_y,
            angle: List.angle,
          });
        } else {
          // let Cwidth = (width / img.width) * List.width;
          // let Cheight = (height / img.height) * List.height;
          let Cx = (width / img.width) * List.left;
          let Cy = (height / img.height) * List.top;
          // console.log(List.width, List.height);
          arr.push({
            width: Cwidth,
            height: Cheight,
            x: Cx,
            y: Cy,
          });
        }
      });

      arr.forEach((item) => {
        if (item.angle) {
          ctx.translate(item.center_x, item.center_y);
          ctx.rotate((item.angle * Math.PI) / 180);
          ctx.translate(-item.center_x, -item.center_y);
        }
        ctx.lineWidth = lineWidth || 2;
        ctx.strokeStyle = lineColor || "#f40";
        ctx.strokeRect(item.x, item.y, item.width, item.height);
      });
    };
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
        canvas.toBlob((blob) => {
          console.log(blob, "二进制数据");
        });
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
    renderRect(boxData, ctx, img);
    // img.onload = () => {
    //   let arr = [];
    //   boxData.forEach((List) => {
    //     let Cwidth = (width / img.width) * List.width;
    //     let Cheight = (height / img.height) * List.height;
    //     if (List.angle) {
    //       let Cx = (width / img.width) * (List.center_x - List.width / 2);
    //       let Cy = (height / img.height) * (List.center_y - List.height / 2);
    //       let Ccenter_x = (width / img.width) * List.center_x;
    //       let Ccenter_y = (height / img.height) * List.center_y;
    //       arr.push({
    //         width: Cwidth,
    //         height: Cheight,
    //         x: Cx,
    //         y: Cy,
    //         center_x: Ccenter_x,
    //         center_y: Ccenter_y,
    //         angle: List.angle,
    //       });
    //     } else {
    //       // let Cwidth = (width / img.width) * List.width;
    //       // let Cheight = (height / img.height) * List.height;
    //       let Cx = (width / img.width) * List.left;
    //       let Cy = (height / img.height) * List.top;
    //       // console.log(List.width, List.height);
    //       arr.push({
    //         width: Cwidth,
    //         height: Cheight,
    //         x: Cx,
    //         y: Cy,
    //       });
    //     }
    //   });

    //   arr.forEach((item) => {
    //     if (item.angle) {
    //       ctx.translate(item.center_x, item.center_y);
    //       ctx.rotate((item.angle * Math.PI) / 180);
    //       ctx.translate(-item.center_x, -item.center_y);
    //       ctx.lineWidth = lineWidth || 2;
    //       ctx.strokeStyle = lineColor || "#f40";
    //       ctx.strokeRect(item.x, item.y, item.width, item.height);
    //     } else {
    //       ctx.lineWidth = lineWidth || 2;
    //       ctx.strokeStyle = lineColor || "#f40";
    //       ctx.strokeRect(item.x, item.y, item.width, item.height);
    //     }
    //   });
    // };
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
