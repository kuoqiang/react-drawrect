# react-drawrect
方便AI能力原子能力展示的个人工具组件，主要功能是图片上绘制box检测框，包含常用的图片数据处理方法(图片转base64,base64转blob，图片合成等)



## 📦 Install

```
npm install react-drawrect
```

```
yarn add react-drawrect
```



## Templates

```
-example
	-assets
	-App.js
	-index.html
	-index.js
	-webpack.config.js
-lib
-src
	-components
	-index.js
-.babelrc
```





## 🔨 Usage



```react
import React,{ useRef } from "react"
import { ImgDrawRect } from 'react-drawrect';

const App = () => {
  const myRef = useRef();
  return 
    <ImgDrawRect
        lineColor="blue"
        lineWidth={3}
        ref={myRef}
        width={400}
        height={400}
        src={imgSrc}
        option={[{ left: 10, top: 10, width: 20, height: 20 }]}
      />
};

组件可以使用一些canvas处理数据的方法,需要通过ref先获取组件
//获取当前box标记数据
myRef.current.getData()

//设置当前box标记的数据
myRef.current.setData(boxData)

//下载带有检测框的图片
myRef.current.upload()

//清空画布
myRef.current.clearRect()


## 另外，此包中还外置一些获取图片数据的方法，通过import方式导入
import { dataURLToBlob, xxxx } from 'react-drawrect'

dataURLToBlob(base64)  //传入base64,返回blob图片文件数据

getUrlToData(url,type)   //传入图片url,返回对应类型数据，type支持blob和base64
```





## Browsers support

Modern browsers.

| [![IE / Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png)](http://godban.github.io/browsers-support-badges/) IE / Edge | [![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png)](http://godban.github.io/browsers-support-badges/) Firefox | [![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png)](http://godban.github.io/browsers-support-badges/) Chrome | [![Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png)](http://godban.github.io/browsers-support-badges/) Safari | [![Opera](https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png)](http://godban.github.io/browsers-support-badges/) Opera |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| IE11, Edge                                                   | last 2 versions                                              | last 2 versions                                              | last 2 versions                                              | last 2 versions                                              |
