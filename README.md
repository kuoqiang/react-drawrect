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
import { ImgDrawRect } from 'react-drawrect';

const App = () => (
  <>
    <ImgDrawRect
        lineColor="blue"
        lineWidth={3}
        ref={myRef}
        width={400}
        height={400}
        src={imgSrc}
        option={[{ left: 10, top: 10, width: 20, height: 20 }]}
      />
  </>
);
```



## Browsers support

Modern browsers.

| [![IE / Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png)](http://godban.github.io/browsers-support-badges/) IE / Edge | [![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png)](http://godban.github.io/browsers-support-badges/) Firefox | [![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png)](http://godban.github.io/browsers-support-badges/) Chrome | [![Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png)](http://godban.github.io/browsers-support-badges/) Safari | [![Opera](https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png)](http://godban.github.io/browsers-support-badges/) Opera |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| IE11, Edge                                                   | last 2 versions                                              | last 2 versions                                              | last 2 versions                                              | last 2 versions                                              |
