/**
 * 将图片转为base64格式
 * @param {*} url 图片路径(可以传图片url),返回一个promise
 */
function getUrlToData(url, type) {
  return new Promise((resolve, reject) => {
    var canvas = document.createElement("canvas"); //创建canvas DOM元素
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = url;
    img.onload = function () {
      canvas.height = img.height;
      canvas.width = img.width;
      ctx.drawImage(img, 0, 0, img.width, img.height);
      if (type === "blob") {
        var dataURL = canvas.toBlob((blob) => {
          resolve(blob);
        });
      } else {
        var dataURL = canvas.toDataURL("image/png");
        resolve(dataURL);
      }
    };
    img.onerror = function () {
      reject();
    };
  });
}

export default getUrlToData;
