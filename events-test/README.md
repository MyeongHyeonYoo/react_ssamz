# **chapter 04**  

## ๐ก `React` 

--- 
#### [๋ฆฌ์กํธ ์ปดํฌ๋ํธ]
- ### ๋ฆฌ์กํธ ์ด๋ฒคํธ <br>
```javascript
// ํจ์ ๋๋ ๋ฉ์๋ ํธ์ถ
<button onClick={func} OK </button>
// ์ต๋ช ํจ์ ํธ์ถ
<button onClick={() => alert('hello') }> OK </button>
```

```javascript
<MyComponent onClick={ () => alert('hello') } name={'ํ๊ธธ๋'} />
```
โถ DOM ์์๊ฐ ์๋ ์ปดํฌ๋ํธ์ ์ด๋ฒคํธ๋ฅผ ์ค์ ํ๋ฉด ์๋ฌ ๋ฐ์ <br>

- ์ด๋ฒคํธ ์ ์ฉ ๋ฐฉ๋ฒ <br>
  - ์ด๋ฒคํธ ํธ๋ค๋ฌ ํจ์๋ฅผ ์ ์ํ์ฌ { } ๋ณด๊ฐ๋ฒ์ ์ด์ฉํด ์ธ๋ถ ํจ์๋ฅผ ๋ฐ์ธ๋ฉ <br>
    (์ด๋ฆ ์๋ ํจ์(์ต๋ช ํจ์: anonymous function)๋ ๋ฐ์ธ๋ฉ ๊ฐ๋ฅ) <br>
    ```javascript
    const eventHandler = () => {

      // JSX ๋ด๋ถ์์ ์ธ๋ถ ํจ์ ๋ฐ์ธ๋ฉ
      <input type="text" ... onChange={eventHandler} />

      // JSX ๋ด๋ถ์์ ์ต๋ช ํจ์ ๋ฐ์ธ๋ฉ
      <button onClick={ () => {......} }>๋ฒํผ</button>
    }
    ```
  - ์ด๋ฒคํธ ํธ๋ค๋ฌ ํจ์์ ์ฒซ ๋ฒ์งธ ์ธ์๋ฅผ ์ด์ฉํด ์ด๋ฒคํธ ์๊ท๋จผํธ ๊ฐ์ ์ด์ฉ
    ```javascript
    const eventHandler = (e : ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    }
    ```

```
// ์ด๋ฒคํธ ์๊ท๋จผํธ ํ์์์ ์ฌ์ฉํ  ์ ์๋ ์์ฑ - ๋ฌธ์ ์ฐธ์กฐ
https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/v17/index.d.ts

// EventHandler๋ง ๊ฒ์ํด์ ๋ณด๋ฉด ์ฐพ์๋ณด๊ธฐ ์ฝ๋ค. โ ex) ChangeEventHandler
```

<br> โง ์๋ก์ด ํ๋ก์ ํธ ์์ฑ <br>

```javascript
cd ..
npm init vite events-test -- --template react-ts
cd events-test
npm install
```
(src/App.tsx์ src/App.css ํ์ผ ์ญ์ ) <br>

โพ 04-18 : src/App1.tsx โ ์ด๋ฒคํธ ์ ์ฉ ์์  ์์ฑ <br>
```javascript
import { useState } from 'react'

const App = () => {
    const [count, setCount] = useState<number>(0);
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div style={{ margin: "5px" }}>
            <h3>์ด๋ฒคํธ ๊ธฐ์ด</h3>
            <div>
                <button onClick={increment}>์ฆ๊ฐ</button>
                <button onClick={decrement}>๊ฐ์</button>
            </div>
            <div>
                ์นด์ดํธ : <input type="text" value={count} />
            </div>
        </div>
    );
};

export default App;
```

โพ 04-19 : src/main.tsx โ App1 import <br>
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App1'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

<img src="img/event_warning.jpg" width="800" height="200"> <br>
โถ ๊ฒฝ๊ณ ๊ฐ ๋์ค๋ ์ด์ : state์ ๊ฐ์ ํจ๋ถ๋ก ๋ณ๊ฒฝ๋๋ฉด ์ ๋๋ค. <s>์ฌ๊ธฐ์๋ const์ธ๋ฐ ๊ฐ์ด ๋ฐ๋ ์ ์์ด์ ๊ฒฝ๊ณ  ํ์</s>(Read Only)
โถโถ ์๋ ฅ ํ๋์ ์ํ๊ฐ ๋ฐ์ธ๋ฉ๋์๋๋ฐ, ์ด๋ฒคํธ ํธ๋ค๋ฌ ํจ์๊ฐ HTML ์์์ ์ฐ๊ฒฐ๋์ง ์์๊ธฐ ๋๋ฌธ์ ๊ฒฝ๊ณ  ํ์

โ ๋ฆฌ์กํธ๋ <u>๋จ๋ฐฉํฅ ๋ฐ์ดํฐ ๋ฐ์ธ๋ฉ</u> ๊ตฌ์กฐ์ด๋ค. <br>
โ UI์์ ์๋ ฅํ ๊ฐ์ state(์ํ)์ ๋ฐ์๋์ง ์๊ธฐ ๋๋ฌธ์ '์ด๋ฒคํธ ํธ๋ค๋ฌ ํจ์'๋ฅผ ํตํด `setState()`๋ก state(์ํ)๊ฐ ๋ณ๊ฒฝ๋ ๊ฒ์ UI์ ์ ์ฉํ์ฌ ๊ฐฑ์ ํ๋ค.(<u>์๋ฐฉํฅ ๋ฐ์ดํฐ ๋ฐ์ธ๋ฉ</u>) <br>

โพ 04-20 : src/App1.tsx ๋ณ๊ฒฝ โ ๊ฐ์ state๋ฅผ ์ฌ๋ฌ ๋ฒ ๋ณ๊ฒฝํ๋ฉด ์๊ธฐ๋ ๋ฌธ์ ์  ํ์ธ <br>
โถ ์ธํฐ(setter) ํจ์๋ '๋น๋๊ธฐ'๋ก ์๋ํ๊ธฐ ๋๋ฌธ์ ์ด๋ฒคํธ ํธ๋ค๋ฌ ํจ์ ์์์ ๊ฐ์ state(์ํ)๋ฅผ ์ฌ๋ฌ ๋ฒ ๋ณ๊ฒฝํ๋ฉด ๋ฌธ์ ๊ฐ ๋ฐ์ํ  ์ ์๋ค.
```javascript
import { useState } from 'react'

const App = () => {
    const [count, setCount] = useState<number>(0);
    const increment = () => {
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
    };

    ยทยทยทยทยท

};

export default App;
```
setCount ์ํ ๋ณ๊ฒฝ ํจ์๋ 3๋ฒ ํธ์ถ๋์ง๋ง, 1์ฉ ์ฆ๊ฐํ๋ ๊ฒ์ ํ์ธ <br>


โถ ๋ถ๊ฐํผํ๊ฒ <u>๊ฐ์ ์ํ๋ฅผ ์ฌ๋ฌ ๋ฒ ๋ณ๊ฒฝํด์ผ ํ๋ ๊ฒฝ์ฐ</u> โท `๋ฆฌํด๊ฐ`์ผ๋ก ์ํ๋ฅผ ๋ณ๊ฒฝํ๋๋ก ์์ฑ <br>
```javascript
const increment = () => {
        setCount((count) => count + 1);
        setCount((count) => count + 1);
        setCount((count) => count + 1);
    };
```

โพ 04-21 : src/App2.tsx โ ์ ์ด ์ปดํฌ๋ํธ ํ์ธ <br>
```javascript
import { useState } from "react";

const App2 = () => {
    const [x, setX] = useState<number>(0);
    const [y, setY] = useState<number>(0);

    return (
        <div>
            <h3>์ ์ด ์ปดํฌ๋ํธ</h3>
            X : <input type="text" value={x} />
            <br />
            Y : <input type="text" value={y} />
            <br />
            ๊ฒฐ๊ณผ : <span>{x + y}</span>
        </div>
    );
};

export default App2;
```
โพ 04-22 : src/main.tsx ๋ณ๊ฒฝ โ App2 ์ฌ์ฉ <br>
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App1'
import App2 from './App2'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <App2 />
  </React.StrictMode>
);
```
<img src="img/input_warning.jpg" width="800" height="160"> <br>
๋ธ๋ผ์ฐ์ ์ X, Y์ ๊ฐ์ด ์๋ ฅ๋์ง ์์ผ๋ฉฐ, ์ํ(state)๋ ๋ฐ๋์ง ์๋๋ค. <br><br>
<img src="img/components_input.jpg" width="800" height="220"> <br>
[Components] ํญ์์ ์ํ๋ฅผ ์ง์  ๋ณ๊ฒฝํ๋ฉด UI์์๋ ๊ฐ์ด ๋ฐ๋๋ ๊ฒ ํ์ธ <br>

โพ 04-23 : src/App2.tsx ๋ณ๊ฒฝ โ ์ด๋ฒคํธ ํธ๋ค๋ฌ ์ฌ์ฉ <br>
```javascript
import { ChangeEvent, useState } from "react";

const App2 = () => {
    const [x, setX] = useState<number>(0);
    const [y, setY] = useState<number>(0);

    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newValue: number = parseInt(e.target.value);
        if (isNaN(newValue)) newValue = 0;
        if (e.target.id === "x") setX(newValue);
        else setY(newValue);
    };

    return (
        <div>
            <h3>์ ์ด ์ปดํฌ๋ํธ</h3>
            X : <input id="x" type="text" value={x} onChange={changeValue} />
            <br />
            Y : <input id="y" type="text" value={y} onChange={changeValue} />
            <br />
            ๊ฒฐ๊ณผ : <span>{x + y}</span>
        </div>
    );
};

export default App2;
```
<img src="img/input_check.jpg" width="780" height="230"> <br>
<img src="img/input_check2.jpg" width="780" height="180"> <br>
input ํ๊ทธ์ ์๋ ฅ ์ฐฝ์ ์๋ ฅํ์ฌ ์ํ๋ฅผ ๋ณ๊ฒฝํ  ์ ์๊ณ , ๋ ์ด์ ๊ฒฝ๊ณ ๋ ๋์ค์ง ์๋๋ค.

โพ 04-24 : src/App3.tsx โ HTML DOM ์์์ ์ง์  ์ ๊ทผ(defaultValue, ref ๋ฐ์ธ๋ฉ) <br>
- ์ฌ์ฉ์๊ฐ ์๋ ฅํ ๊ฐ์ ํ๋ํ๋ ค๋ฉด ref๊ฐ์ฒด์ current ์์ฑ์ ์ด์ฉ
    - current ์์ฑ๊ฐ์ด null์ผ ์๋ ์์ผ๋ฏ๋ก(HTML DOM์ด ์ฐ๊ฒฐ๋์ง ์์ ๊ฒฝ์ฐ) ์ผํญ ์ฐ์ฐ์๋ฅผ ์ด์ฉํ์ฌ current ์์ฑ์ด ์์ ๋๋ง ๋ฌธ์์ด๋ก ๊ฐ์ ๋ฐ์๋ด๋๋ก ์์ฑ.
```javascript
import { useRef, useState } from 'react'

type Props = {};

const App3 = (props: Props) => {
    const [x, setX] = useState<number>(0);
    const [y, setY] = useState<number>(0);
    const [result, setResult] = useState<number>(0);

    const elemX = useRef<HTMLInputElement>(null);
    const elemY = useRef<HTMLInputElement>(null);

    const add = () => {
        let x1: number = parseInt(elemX.current ? elemX.current.value : "", 10);
        let y1: number = parseInt(elemY.current ? elemY.current.value : "", 10);
        if (isNaN(x1)) x1 = 0;    
        if (isNaN(y1)) y1 = 0;
        setX(x1);
        setY(y1);
        setResult(x1 + y1);
    };

    return (
      <div className="container">
        X : <input id="x" type="text" defaultValue={x} ref={elemX} />
        <br />
        Y : <input id="y" type="text" defaultValue={y} ref={elemY} />
        <br />
        <button onClick={add}>๋ง์ ๊ณ์ฐ</button>
        <br />
        ๊ฒฐ๊ณผ : <span>{result}</span>
      </div>  
    );
};

export default App3;
```

โพ 04-25 : src/main.tsx โ App3 ์ฌ์ฉ <br>
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App1'
import App2 from './App2'
import App3 from './App3'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App2 /> */}
    <App3 />
  </React.StrictMode>
);

```
<img src="img/input_uncontrolled component.jpg" width="800" height="250"> <br>
<u>`ref` ์์ฑ</u>์ ์ด์ฉํด 'HTML DOM'์ ์ ๊ทผํ๋ฉฐ, ์ฌ์ฉ์๊ฐ ์๋ ฅํ ๊ฐ์ ํ๋ํด ์ํ๋ฅผ ๋ณ๊ฒฝ <br>