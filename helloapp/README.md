# **chapter 03**

## ๐ก `React` 

--- 

#### [๋ฆฌ์กํธ ์์ & Vite]
- ### ๋ฆฌ์กํธ ์์ <br>
  - ES6 ๊ธฐ๋ฐ <br>
    ```
    npx create-react-app [ํ๋ก์ ํธ๋ช]
    ```
  - ํ์์คํฌ๋ฆฝํธ ๊ธฐ๋ฐ <br>
    ```
    npx create-react-app [ํ๋ก์ ํธ๋ช] --template typescript
    ```

> `src`: '์๋ฐ์คํฌ๋ฆฝํธ'์ 'ํ์์คํฌ๋ฆฝํธ' ์ฝ๋๋ฅผ ์์ฑํ๋ ๋๋ ํฐ๋ฆฌ. ์ง์(entry) ํ์ผ์ index.js ๋๋ index.tsx ํ์ผ์ด๋ค. <br>
> `public`: ์ ์ ํ์ผ๊ณผ ๋ฆฌ์์ค๋ฅผ ์ด๊ณณ์ ๋ฐฐ์น <br>
> `build`: ๋น๋ ํ ์์ฑ๋ ์ฐ์ถ๋ฌผ(artifact)์ด ์ ์ฅ๋๋ ๋๋ ํฐ๋ฆฌ. ์ด๊ณณ์ ์์ฑ๋ ํ์ผ์ ์น ์๋ฒ์ ๋ฐฐํฌ ๊ฐ๋ฅ. <br>

<br>

- ์คํ/๋น๋ ๋ช๋ น์ด <br>
  - ๊ฐ๋ฐ ์๋ฒ ์คํ ๋ช๋ น์ด <br>
    ```
    npm run start 
    yarn start
    ```
  - ๋น๋ ๋ช๋ น์ด <br>
    ```
    npm run build
    yarn build
    ```
  - ํ์คํธ ๋ช๋ น์ด <br>
    ```
    npm run test
    yarn test
    ```

- 'npx create-react-app [ํ๋ก์ ํธ๋ช]' ์ค๋ฅ <br>
  ```javascript
  "You are running 'create-react-app' x.x.x, which is behind the latest release
  (x.x.x). We no longer support global installation of Create React App."
  ```
  - ์ ์ญ ์ค์น ๋ CRA(create-react-app)์ ์บ์๋ฅผ ์ญ์  ํ ํ๋ก์ ํธ ์์ฑ ์ฌ์๋ <br>
    ```
    npm uninstall -g create-react-app
    npm cache clean -force
    npm cache verify
    ``` 

> CRA๋ ๋ด๋ถ์ ์ผ๋ก webpack์ ์ฌ์ฉ <br>

<br>

- ### Vite <br>
> ํ๋์ค์ด๋ก '๋น ๋ฅด๋ค'๋ผ๋ ๋ป์ ๊ฐ์ง ๋จ์ด <br>

โ ์ฐจ์ธ๋ ํ๋ฐํธ์๋ ๊ฐ๋ฐ ๋๊ตฌ <br>
โ Vite๊ฐ ๋ด๋ถ์ ์ผ๋ก ์ฌ์ฉํ๋ ESBuild๋ '`Go`๋ผ๋ ๋ค์ดํฐ๋ธ ์ธ์ด'๋ก ๋ง๋ค์ด์ง ๋๊ตฌ๋ฅผ ์ด์ฉํด ๋น๋ํ๊ธฐ ๋๋ฌธ์ ๋น๋ ์๋๊ฐ ๋น ๋ฅด๋ค. (webpack, parcel๊ณผ ๋น๊ตํ๋ฉด 10๋ฐฐ ์ด์ ๋น ๋ฅด๋ค.) <br>
โ Vite๋ `Native ESM`์ด๋ผ๋ ๋ธ๋ฌ์ฐ์ ์ ์์ฒด์ ์ธ ๋ชจ๋ ๊ธฐ๋ฅ์ ์ฌ์ฉ(๋ชจ๋ ๋ฒ๋ค๋ง ๊ธฐ๋ฅ์ ๋ธ๋ผ์ฐ์ ๊ฐ ์ํ) <br>
```
cf)

๊ธฐ์กด webpack๊ณผ ๊ฐ์ ๋ชจ๋ ๋ฒ๋ค๋ฌ๋ฅผ ์ด์ฉํ  ๋๋ ์ํธ๋ฆฌ์์ ์ฌ๋ฌ ๋ผ์ฐํธ์ ์ฌ๋ฌ ๋ชจ๋์ ํตํด ๋ชจ๋ ๋ฒ๋ค๋ง์ ๋๋ธ ํ ๊ฐ๋ฐ ์๋ฒ๋ฅผ ๊ตฌ๋ํ์ฌ ์๊ฐ์ด ์ค๋ ๊ฑธ๋ฆฌ๋ ๋ฐ๋ฉด, Vite๋ Native ESM์ด๋ผ๋ ๋ธ๋ผ์ฐ์ ์ ์์ฒด์ ์ธ ๋ชจ๋ ๊ธฐ๋ฅ์ ์ฌ์ฉํ์ฌ, Vite๊ฐ ์คํํ๋ ๊ฐ๋ฐ ์๋ฒ๋ ๋ธ๋ผ์ฐ์ ๊ฐ ์์ฒญํ๋ ๋ชจ๋์ ์ ์กํด์ฃผ๊ณ , ๋ชจ๋ ๋ฒ๋ค๋ง ๊ธฐ๋ฅ์ ๋ธ๋ผ์ฐ์ ๊ฐ ์ํํ๊ธฐ ๋๋ฌธ์ ๊ฐ๋ฐ ์๋ฒ์ ๊ตฌ๋์ด ๋น ๋ฅด๋ค.
```

- Vite ์์
  - ES6 ๊ธฐ๋ฐ
    ```
    npm init vite [ํ๋ก์ ํธ๋ช] -- --template react
    yarn create vite [ํ๋ก์ ํธ๋ช] -- --template react
    ```
  - ํ์์คํฌ๋ฆฝํธ ๊ธฐ๋ฐ
    ```
    npm init vite [ํ๋ก์ ํธ๋ช] -- --template react-ts
    yarn create vite [ํ๋ก์ ํธ๋ช] -- --template react-ts
    ```
    ```
    cf)

    npm init vite [ํ๋ก์ ํธ๋ช] -- -- template react
    ```
    โถ template ์์ -- ๋๊ณ  template์ ์คํํ๋ฉด ๋ค์๊ณผ ๊ฐ์ด ์คํ ๋๋ค. <br>
    <img src="img/select_framework.jpg" width="430" height="120"> <br>
    (ํ๋ ์์ํฌ ์ ํ ๊ฐ๋ฅ) <br>

<br>
    
> `src`: '์๋ฐ์คํฌ๋ฆฝํธ'์ 'ํ์์คํฌ๋ฆฝํธ' ์ฝ๋๋ฅผ ์์ฑํ๋ ๋๋ ํฐ๋ฆฌ. ์ง์(entry) ํ์ผ์ main.tsx ๋๋ main.jsx ํ์ผ์ด๋ค. <br>
> `public`: ์ ์ ํ์ผ๊ณผ ๋ฆฌ์์ค๋ฅผ ์ด๊ณณ์ ๋ฐฐ์น. ์ด ๋๋ ํฐ๋ฆฌ๋ ์๋์ผ๋ก ๋ง๋ค์ด์ง์ง ์์ผ๋ฏ๋ก ์ง์  ์์ฑ <br>
> `build`: ๋น๋ ํ ์์ฑ๋ ์ฐ์ถ๋ฌผ(artifact)์ด ์ ์ฅ๋๋ ๋๋ ํฐ๋ฆฌ <br>

- vite.config.js ์ค์ 
```
https://Vitejs.dev/config/#config-file
```

- helloapp <br>
Vite๋ก ๋ง๋  ํ๋ก์ ํธ๋ '์์กด ํจํค์ง'๋ฅผ ์๋์ผ๋ก ๋ค์ด๋ก๋ํ์ง ์์ผ๋ฏ๋ก `npm install` ๋ช๋ น์ด๋ก ์ง์  ๋ค์ด๋ก๋ <br>
```
npm init vite helloapp -- --template react-ts
cd helloapp
npm install
```
> React/Redux/React-Native snippets โท VSCode ํ์ฅํฉ ๋๊ตฌ ํ์ฉ <br>
>> ์ฝ๋ ํธ์ง ์ฐฝ์ tsrafce ์๋ ฅ <br>
>> โท tsrafce: TypeScriptReactArrowFunctionComponentExport <br>
>>> ํ์์คํฌ๋ฆฝํธ๋ฅผ ์ง์ํ๋ ์ปดํฌ๋ํธ๋ ๋๋ถ๋ถ `ts`๋ก ์์ <br>

<br> 
์ฝ๋ ์กฐ๊ฐ ์ฐธ๊ณ 

```
https://github.com/dsznajder/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md
```


โพ 03-01 : src/App.tsx โ ์ฝ๋ ์กฐ๊ฐ ์์ฑ(ํจ์ ์ปดํฌ๋ํธ) <br>
- ์์ฑ ์ฝ๋ ์คํ <br>
  ```
  npm run dev
  ```
  Vite 3.x ๋ฒ์  ์ด์ default port (package.json: ํ์ฌ 4.1.0 ๋ฒ์ ) <br>
  <img src="img/default_port.jpg" width="280" height="80"> <br>

  - ํฌํธ ์ค์  <br>
  scripts์ "dev": "vite"๋ฅผ ๋ค์๊ณผ ๊ฐ์ด ์ค์  <br>
  <img src="img/port_setting.jpg" width="320" height="80"> <br>
  <img src="img/port_check.jpg" width="350" height="80"> <br>

  <br>
  main.tsx์ import './index.css' ์ฃผ์ ์ฒ๋ฆฌ <br>
  <img src="img/app.tsx_hello_world.jpg" width="150" height="80"> <br>

  <br>
  App.tsx ๋ด์ฉ ์์  <br>
  <img src="img/app.tsx_modify.jpg" width="150" height="80"> <br>
  โถ HMR(Hot Module Replacement): ์์ ๋ ๋ด์ฉ์ ๋ฐ์ํ์ฌ ์น ๋ธ๋ผ์ฐ์  ํ๋ฉด์ด ์๋์ผ๋ก ๊ฐฑ์ ๋๋ ๊ฒ <br>
     (์ฝ๋๋ฅผ ์์ ํ๋ฉด ์น ๋ธ๋ผ์ฐ์ ๋ ๋ณ๊ฒฝ๋ ๋ชจ๋์ ๊ฐ๋ฐ ์๋ฒ๋ก๋ถํฐ ๋ค์ด๋ก๋ํด์ ํ๋ฉด์ ์ฆ์ ๊ฐฑ์ ) <br>


โพ 03-02 : src/main.tsx โ ๊ตฌ์กฐ ํ์ธ('./App' ์๋๊ฒฝ๋ก๋ก๋ถํฐ import) <br>
โถ './App'์ ๊ฐ์ ๊ฒฝ๋ก์์ App ์ปดํฌ๋ํธ๋ฅผ ์ฐธ์กฐํ๋ค๋ ๋ป <br>

- ์ ๋ ๊ฒฝ๋ก ์ฌ์ฉ ๋ฐฉ๋ฒ <br>
  1. tsconfig.json ํ์ผ ์ฝ๋ ์ถ๊ฐ(์์ ) <br>
  <img src="img/tsconfig.json_modify.jpg" width="220" height="120"> <br>
  2. npm install path ๋ช๋ น์ด๋ฅผ ์ํํ์ฌ path ํจํค์ง ์ถ๊ฐ <br>
  ```
  npm install path
  ```
  3. vite.config.ts ํ์ผ ์ฝ๋ ์ถ๊ฐ(์์ ) <br>
    - ๋ณ๊ฒฝ ์  <br>
    <img src="img/vite.config.ts_original.jpg" width="250" height="150"> <br>
    - ๋ณ๊ฒฝ ํ <br>
    <img src="img/vite.config.ts_modify.jpg" width="380" height="250"> <br>
  4. ์ ๋ ๊ฒฝ๋ก ์ฌ์ฉ <br>
  ```
  // import App from './App'
  // @๊ฐ src ๋๋ ํฐ๋ฆฌ๋ฅผ ๋ํ๋ธ๋ค.
  import App from '@/App'
  ```

โพ 03-03 : index.html โ id๊ฐ root์ธ ์์ ์ฐพ๊ธฐ <br>
โพ 03-04 : src/App.tsx ๋ณ๊ฒฝ โ JSX(JavaScript XML) ์๋ฐ์คํฌ๋ฆฝํธ ํ์ฅ ๋ฌธ๋ฒ ํ์ฉ / { } ์ฌ์ฉ  <br>
  <img src="img/use_braces.jpg" width="140" height="90"> <br>
  โถ { }๋ ๋ณด๊ฐ๋ฒ(interpolation)์ด๋ผ ํ๋ค. JSX์ { }์๋ ๋ฆฌํด๊ฐ์ ๊ฐ์ง๋ ํํ์(expression)์ด๋ฉด ๋ฌด์์ด๋  ๋ฐฐ์นํ  ์ ์๋ค.
  ```
  ๋ณด๊ฐ๋ฒ(่ฃ้ๆณ) ๋๋ ๋ด์ฝ(ๅงๆท, interpolation)์ด๋?
  ์๋ ค์ง ๋ฐ์ดํฐ ์ง์ ์ ๊ณ ๋ฆฝ์  ๋ด์์ ์๋ก์ด ๋ฐ์ดํฐ ์ง์ ์ ๊ตฌ์ฑํ๋ ๋ฐฉ์์ด๋ค.
  https://ko.wikipedia.org/wiki/%EB%B3%B4%EA%B0%84%EB%B2%95 [์ํค๋ฐฑ๊ณผ]
  ```

โพ 03-05 : src/App.tsx ๋ณ๊ฒฝ โ ํจ์ ์ถ๊ฐ(addResult) & return ๊ฐ ํ์ฉ <br>
  <img src="img/app.tsx_modify_jsx_braces_function.jpg" width="250" height="130"> <br>

- ### css ์ ์ฉ โท bootstrap ํ์ฉ <br>
โพ 03-06 : src/index.css โ css ์ฝ๋ ์ถ๊ฐ <br>
 ```javascript
// ํน์  ๋ฒ์  ์ค์นํ๋ ค๋ฉด bootstrap@5.x.x์ ๊ฐ์ด ๋ฒ์  ์์ฑ
npm install bootstrap
 ```
 ```javascript
// ๊ธฐ์กด ๊ฒ ์ฃผ์ ์ฒ๋ฆฌํ๊ณ  ๋ง์ง๋ง์ ์ถ๊ฐ
hr.dash-style {
  background-color: #fff;
  border-top:2px dashed gray;
}
 ```

โพ 03-07 : src/main.tsx ๋ณ๊ฒฝ โ ๋ณผ๋์ฒด ์ถ๊ฐ(bootstrap.css ํ์ผ import)<br>
```javascript
import 'bootstrap/dist/css/bootstrap.css'
```
โพ 03-08 : src/App.tsx ๋ณ๊ฒฝ โ CSS ํด๋์ค ์ง์  <br>
```javascript
import React from 'react'

const App = () => {
  let msg = "World";
  const addResult = (x: number, y: number) => {
    return (
      <div className="card card-body bg-light mb-3">
        {x} + {y} = {x + y} 
      </div>
    );
  };

  return (
    <div className="container">
      <h2>Hello {msg}!</h2>
      <hr className="dash-style" />
      {addResult(4, 3)}
    </div>
  );
};

export default App;
```
<img src="img/bootstrap_css.jpg" width="350" height="200"> <br>
<img src="img/chrome_developer_tools.jpg" width="400" height="250"> <br>
(ํฌ๋กฌ ๊ฐ๋ฐ์ ๋๊ตฌ - css ์ง์ ๋ ๊ฒ ํ์ธ) <br>

- ### JSX (์๋ฐ์คํฌ๋ฆฝํธ ํ์ฅ)
```
Babel REPL(https://babeljs.io/repl)
// -->> JSX ์ฝ๋๊ฐ ์๋ฐ์คํฌ๋ฆฝํธ ์ฝ๋๋ก ๋ณํ๋ ๊ฒ์ ํ์ธ
```
<img src="img/jsx_conversion.jpg" width="700" height="150"> <br>

  - JSX ์ฃผ์ ์ฌํญ 1 <br>
    - ์์์ Attribute๋ ์นด๋ฉ ํ๊ธฐ๋ฒ(camel casing)์ ์ค์ <br>
  
  - JSX ์ฃผ์ ์ฌํญ 2 <br>
    - '์์ฑ๋ช'์ด `DOM API` ์คํ์ ๊ธฐ๋ฐ <br>
    - `JSX`๋ HTML์ฒ๋ผ ๋ณด์ด์ง๋ง ์ค์ ๋ก๋ ์๋ฐ์คํฌ๋ฆฝํธ ์ฝ๋์ด๊ธฐ ๋๋ฌธ์ **`className` ์์ฑ์ผ๋ก ์ฌ์ฉ**
    ```javascript
    // Javascript ์ฝ๋์์ CSS ํด๋์ค ์ง์ 
    document.getElementById("a").className="test";
    ```
  - JSX ์ฃผ์ ์ฌํญ 3 <br>
    - `๋ณด๊ฐ๋ฒ( { } : interpolation)`์ ์ฌ์ฉํ  ๋๋ 'ํํ์'์ ์ฌ์ฉ
    - statement๋ฌธ ์์ฑ ๋ถ๊ฐ
      - if๋ฌธ์ ๋ฆฌํด๊ฐ์ด ์์ผ๋ฏ๋ก ์ฌ์ฉ ๋ถ๊ฐ
      - for๋ฌธ๋ ๋ฆฌํด๊ฐ์ด ์์ผ๋ฏ๋ก { } ๋ด๋ถ์ ์ฌ์ฉ ๋ถ๊ฐ
        - **โถ `์ผํญ ์ฐ์ฐ์` ์ฌ์ฉ!** 
        - **โถ [๋ฐฐ์ด ๋ฐ์ดํฐ]์ ๋ ๋๋ง์ ํ๋ ค๋ฉด ๋ฐฐ์ด ๊ฐ์ฒด์ `map( )` ๋ฉ์๋ ์ฌ์ฉ!** 
    <br>

  - JSX ์ฃผ์ ์ฌํญ 4 <br>
  โพ 03-09 : src/App.tsx ๋ณ๊ฒฝ โ { } ๋ด์ ๋ณด๊ฐ๋ HTML '๋ฌธ์์ด'์ ์ธ์ฝ๋ฉ ๋๋ค. <br>
- `{ }` ๋ด๋ถ์ ๋ฐฐ์นํ ํํ์์ ์ํด ๋ฆฌํด๋๋ ๊ฐ์ด `๋ฌธ์์ด`์ธ ๊ฒฝ์ฐ, ๋ชจ๋ `HTML ์ธ์ฝ๋ฉ` ๋๋ค. <br>
```javascript
import React from 'react'

const App = () => {
  // let msg = "World";
  let msg = "<i>World</i>";

  ยทยทยทยทยท
```
```
// ํฌ๋กฌ ๊ฐ๋ฐ์ ๋๊ตฌ โถ ์ฝ์ ํ๋ฉด์ ์๋ ฅ
document.querySelector('h2').innerHTML
```
<img src="img/html_encoding.jpg" width="250" height="150"> <br>
<img src="img/html_encoding_console_checked.jpg" width="250" height="50"> <br>
โถ ๋ธ๋ผ์ฐ์  ํ๋ฉด์์ <i></i> ํ๊ทธ์ ๋ฌธ์์ด์ด ๊ทธ๋๋ก ์ถ๋ ฅ๋์๋๋ฐ, ๊ทธ ์ด์ ๋ ์น ์ ํ๋ฆฌ์ผ์ด์์์ ํํ ๋ฐ์ํ๋ <br> 
XSS(Cross Site Scripting) ๊ฐ์ ๊ณต๊ฒฉ์ ๋๋นํ๊ธฐ ์ํด์ `<i>`๊ฐ `&lt;i&gt;`๋ก HTML ์ธ์ฝ๋ฉ๋๊ธฐ ๋๋ฌธ์ด๋ค. <br>
```
// XSS(Cross Site Scripting) [์ํค๋ฐฑ๊ณผ]
https://ko.wikipedia.org/wiki/%EC%82%AC%EC%9D%B4%ED%8A%B8_%EA%B0%84_%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8C%85
```


<br>

[HTML ๋งํฌ์ ํํ์ ๊ฐ์ ๋ณด๊ฐํ๋ ๋ฐฉ๋ฒ]

1. `dangerouslySetInnerHTML` ์ฌ์ฉ

```javascript
return (
    <div className="container">
      {/* <h2>Hello {msg}!</h2> */}
      <h2>Hello <span dangerouslySetInnerHTML={{__html: msg }} /></h2>
      <hr className="dash-style" />
      {addResult(4, 3)}
    </div>
  );
```
<img src="img/dangerously_setinnerhtml.jpg" width="150" height="120"> <br>

2. <u>JSX๊ฐ XSS ๊ณต๊ฒฉ์ ์์ </u>ํ๋ฏ๋ก HTML ๋ฌธ์์ด ๋์  `JSX` ์ฌ์ฉ
```javascript
ยทยทยทยทยท

const App = () => {
  // let msg = "<i>World</i>";
  let msg = (<i>World</i>);

  ยทยทยทยทยท

  return (
    <div className="container">
      <h2>Hello {msg}!</h2>

      ยทยทยทยทยท
      
  );
};

export default App;
```
<img src="img/jsx_xss.jpg" width="150" height="120"> <br>

  - JSX ์ฃผ์ ์ฌํญ 5 <br>
    - JSX๋ <u>๋จ์ผ ๋ฃจํธ ์์</u>๋ง ๋ ๋๋ง

  ```javascript
  // ์ฌ์ฉ ๋ถ๊ฐ
  return (
    <div>Hello</div>
    <div>World</div>
  );
  ```
  ```javascript
  // ์ฌ์ฉ ๊ฐ๋ฅ
  return (
    <>
      <div>Hello</div>
      <div>World</div>
    </>
  );
  ```
  - JSX ์ ์ฉ ์์  <br>
  โพ 03-10 : src/CountryList.tsx โ ์ปดํฌ๋ํธ ์์ฑ(arrow ํจ์ํ) <br>
    - ์ผํญ ์ฐ์ฐ์ ์ฌ์ฉ

โพ 03-11 : src/App.tsx ๋ณ๊ฒฝ โ CountryList ์ปดํฌ๋ํธ ์ถ๊ฐ <br>
```javascript
import React from 'react'
import CountryList from './CountryList';
ยทยทยทยทยท

return (
    <div className="container">
      <h2>Hello {msg}!</h2>
      <hr className="dash-style" />
      {addResult(4, 3)}
      <CountryList />
    </div>
  );
};

export default App;
```
<img src="img/countrylist_component.jpg" width="480" height="280"> <br>

- ### ์์ฑ / ์์ฑ ์ ์ฉ ์์  <br>
```javascript
// Type์ ์ด์ฉํ๋ ๊ฒฝ์ฐ
type TestPropsType = {
  name : string;
  age : number;
}

const Test = (props: TestPropsType) => {
  ยทยทยทยทยท
}

// Interface๋ฅผ ์ด์ฉํ๋ ๊ฒฝ์ฐ
interface ITestprops {
  name : string;
  age : number;
}

const Test = (props: ITestProps) => {
  ยทยทยทยทยท
}
```

โพ 03-12 : src/App.tsx ๋ณ๊ฒฝ โ App ์ปดํฌ๋ํธ์ CountryList์ ๋ฐ์ดํฐ ์ ์ธ, `์์ฑ`์ ์ด์ฉํด CountryList๋ก ์ ๋ฌ <br>
```javascript
import React from 'react'
import CountryList from './CountryList';

export type CountryType = {
  no: number;
  country: string;
  visited: boolean;
};

const App = () => {
  let list: Array<CountryType> = [
    { no: 1, country: "์ด์งํธ", visited: false },
    { no: 2, country: "์ผ๋ณธ", visited: true },
    { no: 3, country: "ํผ์ง", visited: false },
    { no: 4, country: "์ฝ๋กฌ๋น์", visited: false }
  ];

  ยทยทยทยทยท

  return (
    <div className="container">
      ยทยทยทยทยท
      <CountryList countries={list} />
    </div>
  );
};

export default App;
}
```

โพ 03-13 : src/CountryList.tsx ๋ณ๊ฒฝ โ countries ์์ฑ์ผ๋ก (๋ถ๋ชจ)๋ฐ์ดํฐ ์ ๋ฌ <br>
```javascript
import React from 'react'
import { CountryType } from './App';

type CountryListPropsType = {
    countries: Array<CountryType>
};

const CountryList = (props:CountryListPropsType) => {
    const list = props.countries;
    ยทยทยทยทยท

    return <ul className="list-group">{countries}</ul>
};

export default CountryList;
    
```
<img src="img/props.jpg" width="760" height="380"> <br>
(์์ฑ ์ ๋ฌ ํ์ธ) <br>

- ### ์ปดํฌ๋ํธ ์ธ๋ถํ <br>

โพ 03-14 : src/CountryItem.tsx โ CountryList ์ธ๋ถํ <br>
```javascript
import React from "react";
import { CountryType } from "./App";

type CountryItemPropsType = {
    countryitem: CountryType;
};

const CountryItem = (props:CountryItemPropsType) => {
    let item = props.countryitem;
    return (
        <li className={item.visited ? "list-group-item active" : "list-group-item"} >
            {item.country}
        </li>
    );
};

export default CountryItem;
```

โพ 03-15 : src/CountryList.tsx ๋ณ๊ฒฝ โ CountryItem ์ปดํฌ๋ํธ ๋ ๋๋ง / ์ปดํฌ๋ํธ ์ธ๋ถํ <br>
```javascript
import React from 'react'
import { CountryType } from './App';
import CountryItem from './CountryItem';

ยทยทยทยทยท

const CountryList = (props:CountryListPropsType) => {
    const list = props.countries;
    let countries = list.map((item, index) => {
      return <CountryItem key={item.no} countryitem={item} />
    });

    return <ul className="list-group">{countries}</ul>
};

export default CountryList;
```
<img src="img/props_array.jpg" width="690" height="330"> <br>
(์์ฑ ์ ๋ฌ ํ์ธ) <br>
<br>
[์ปดํฌ๋ํธ ์ธ๋ถํ์ ์ฅ์ ]
- ์ปดํฌ๋ํธ ๊ธฐ๋ฅ์ด ๋จ์ํด์ง๊ธฐ ๋๋ฌธ์ ์๋ฌ๊ฐ ๋ฐ์ํ  ๊ฐ๋ฅ์ฑ์ด ์ค์ด๋ค๋ฉฐ ๋๋ฒ๊น๊ณผ ํ์คํธ๊ฐ ์ฌ์์ง๋ค.
- ์ปดํฌ๋ํธ์ ์ฌ์ฌ์ฉ์ฑ์ด ๋์์ง๋ค.
- ๋ ๋๋ง ์ฑ๋ฅ์ ์ต์ ํํ๊ธฐ๊ฐ ๋ ์ฉ์ดํ๋ค.
  - ๋ฆฌ์กํธ ์ปดํฌ๋ํธ๋ '์ปดํฌ๋ํธ ๋จ์'๋ก ๋ ๋๋งํ ์ง ์ฌ๋ถ๋ฅผ ๊ฒฐ์ 
  - ์ปดํฌ๋ํธ ๋ด๋ถ์ ๋ฐ์ดํฐ์ ์์ฑ์ด ์ผ์นํ๋ค๋ฉด ๋ ๋๋ง์ ํ์ง ์๋๋ก ์ปดํฌ๋ํธ๋ฅผ ์์ฑ ๊ฐ๋ฅ
  - ์ปดํฌ๋ํธ๋ฅผ ์ธ๋ถํํ๋ฉด ๋ ๋๋ง ๋จ์๋ฅผ ๋ ์ ๊ตํ๊ฒ ์ง์  ๊ฐ๋ฅ

โพ 03-16 : src/App.tsx ๋ณ๊ฒฝ โ ์ํ ์ ์, ์ํ๋ฅผ ์์ฑ์ผ๋ก ์ ๋ฌ <br>
(์ํ๋ฅผ ๋ณ๊ฒฝํ๋ฉด ๋ ๋๋ง๊ณผ ํจ๊ป ์์ฑ์ด ์ ๋ฌ๋๋ฉด์ ํ๋ฉด ์ ์ฒด๊ฐ ๊ฐฑ์ )

```javascript
import { useState } from 'react'
import CountryList from './CountryList';

ยทยทยทยทยท

const App = () => {
  const [msg, setMsg] = useState<string>("World");
  const [list, setList] = useState<Array<CountryType>>([
    { no: 1, country: "์ด์งํธ", visited: false },
    { no: 2, country: "์ผ๋ณธ", visited: true },
    { no: 3, country: "ํผ์ง", visited: false },
    { no: 4, country: "์ฝ๋กฌ๋น์", visited: false }
  ]);

  const addResult = (x: number, y: number) => {
    return (
      <div className="card card-body bg-light mb-3">
        {x} + {y} = {x + y} 
      </div>
    );
  };
  
ยทยทยทยทยท

  );
};

export default App;
```

<img src="img/usestate.jpg" width="750" height="500"> <br>
์ํ๋ฅผ App(๋ถ๋ชจ)์์ ์ง์  ๋ณ๊ฒฝํด๋ณด๋ฉด ๊ฐ ์์ ์ปดํฌ๋ํธ๋ก ์ ๋ฌ๋๋ ์์ฑ์ด ๋ณ๊ฒฝ๋๋ฉด์ ํ๋ฉด ๊ฐฑ์  <br>

---
---
---


# **chapter 04**  

## ๐ก `React` 

--- 
#### [๋ฆฌ์กํธ ์ปดํฌ๋ํธ]
- ### HTML์์์ ์คํ์ผ ์ง์ 
  - ์ธ๋ผ์ธ ์คํ์ผ ์ง์  <br>
    ```javascript
    <div style="width:200px; height:60px; color:yellow; border:solid 1px gray; background-color:purple;">
      Hello
    </div>
    ```
  - &lt;style&gt;&lt;&#47;style&gt; ์์ ์ด์ฉ <br>
    - HTML 'ํ์ด์ง ๋จ์'๋ก ์คํ์ผ์ ์ ์ํ๊ณ , ๊ฐ์ ํ์ด์ง์์๋ ์คํ์ผ์ ์ฌ์ฌ์ฉ ํ  ์ ์๋ค. <br>
  - ์ธ๋ถ CSS ํ์ผ ์ฐธ์กฐ <br>
    - ์คํ์ผ ํ์ผ์ CSSํ์ผ๋ก ์์ฑํ๊ณ  &lt;link &#47;&gt; ํ๊ทธ๋ก ์ฐธ์กฐ. <br>

<br>

- ### ๋ฆฌ์กํธ์์์ ์คํ์ผ ์ง์ 
  - import '[CSS ํ์ผ ๊ฒฝ๋ก]' 
    ```javascript
    // src/main.tsx
    import './index.css'
    // npm install bootstrap ํ node_modules/bootstrap/dist/css/bootstrap.css ์ํฌํธ
    import 'bootstrap/dist/css/bootstrap.css'
    ```
    - ์ํฌํธํ CSSํ์ผ์ ์คํ์ผ์ ๋ชจ๋  ์ปดํฌ๋ํธ์์ ์ฌ์ฉ ๊ฐ๋ฅ.

<br>

- ### ๋ฆฌ์กํธ ์ธ๋ผ์ธ ์คํ์ผ ์ง์ 
```javascript
// Javascript ๊ฐ์ฒด๋ก ์คํ์ผ ์ ๋ณด ์ ์
const styles = {
  color: "yellow", backgroundColor: "purple"
}

// style ํน์ฑ์ ์ด์ฉํด ์คํ์ผ ์ง์ 
<div style={styles}>Hello</div>
```

##### css์ฝ๋๋ฅผ ์๋ฐ์คํฌ๋ฆฝํธ ๊ฐ์ฒด๋ก ๋ณํํด์ฃผ๋ ์จ๋ผ์ธ ๋๊ตฌ
```
https://transform.tools/css-to-js
```
<img src="img/transform_css__javascript_object.jpg" width="700" height="220"> <br>

<br>

โพ 04-01 : src/styles.ts โ ์คํ์ผ ์ ๋ณด๋ฅผ ์ง์ ํ๋ ์์ค ์ฝ๋ ํ์ผ ์ถ๊ฐ(์ธ๋ผ์ธ ์คํ์ผ ์ ์ฉ) <br>
```javascript
const styles = {
    listItemStyle : {
        fontStyle: "italic", 
        textDecoration: "underline"
    },
    dashStyle: {
        backgroundColor: "#fff",
        borderTop: "2px dashed gray"
    }
}

export default styles;
```

โพ 04-02 : src/App.tsx ๋ณ๊ฒฝ โ App ์ปดํฌ๋ํธ์ styles(CSS) ์ ์ฉ  <br>
```javascript
ยทยทยทยทยท
import styles from './styles'
ยทยทยทยทยท

return (
    <div className="container">
      <h2>Hello {msg}!</h2>
      <hr style={styles.dashStyle} />
      {addResult(4, 3)}
      <CountryList countries={list} />
    </div>
  );
};

export default App;
```

โพ 04-03 : src/CountryItem.tsx ๋ณ๊ฒฝ โ CountryItem์ปดํฌ๋ํธ์ styles(CSS) ์ ์ฉ <br>
```javascript
ยทยทยทยทยท
import styles from './styles'

ยทยทยทยทยท

const CountryItem = (props:CountryItemPropsType) => {
    let item = props.countryitem;
    return (
        <li style={styles.listItemStyle}
            className={item.visited ? "list-group-item active" : "list-group-item"} >
            {item.country}
        </li>
    );
};

export default CountryItem;
```

<img src="img/react_style_css.jpg" width="670" height="280"> <br>
(&lt;hr&gt; ์์์ ์ธ๋ผ์ธ ์คํ์ผ์ด ์ง์ ๋ ๊ฒฐ๊ณผ)

<br>

- ### CSS ๋ชจ๋
```javascript
import styleApp from './App.module.css'
```

โพ 04-04 : src/App.module.css โ CSS ๋ชจ๋ ์ถ๊ฐ <br>
```javascript
.test {
    color: blue;
    background-color: bisque;
}
```

โพ 04-05 : src/App.tsx โ App ์ปดํฌ๋ํธ ๋ณ๊ฒฝ(๋ชจ๋ ์ ์ฉ) <br>
```javascript
ยทยทยทยทยท
import AppCssModule from './App.module.css'
ยทยทยทยทยท

 return (
    <div className="container">
      <h2 className={AppCssModule.test}>Hello {msg}!</h2>
      <hr style={styles.dashStyle} />
      {addResult(4, 3)}
      <CountryList countries={list} />
    </div>
  );
};

export default App;
```
<img src="img/css_class_bind.jpg" width="670" height="300"> <br>

- ### styled-components
  โถ ES6์ ํ๊ทธ๋ ํํ๋ฆฟ ๋ฆฌํฐ๋ด(tagged template literal) ๋ฌธ๋ฒ์ ์ฌ์ฉํด ์ปดํฌ๋ํธ์ ๋์ ์ธ CSS๋ฅผ ์ฌ์ฉํ  ์ ์๊ฒ ํ๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ
  - ES6์ ํ๊ทธ๋ ํํ๋ฆฟ ๋ฆฌํฐ๋ด(tagged template literal)
    ```javascript
    const getPercent = function(str, ...values) {
      var result = "";
      for (var i = 0; i < str.length; i++) {
        result += str[i];
        if (values[i])
          result += Math.round(Values[i] * 100) + "%";
      }
      return result;
      
      let v1 = 0.222;
      let v2 = 0.78999;
      let r2 = getPercent `์ฒซ ๋ฒ์งธ ๊ฐ์ ${v1}์ด๊ณ , ๋ ๋ฒ์งธ ๊ฐ์ ${v2}์ด๋ค.`;
      console.log(r2);
    }
    ```
    ```
    // ํํ๋ฆฟ ๋ฆฌํฐ๋ด(Template literals) ์ฐธ์กฐ
    https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals
    ```
```javascript
// styled-components๋ฅผ ์ฌ์ฉํ๊ธฐ ์ํด ํจํค์ง ์ค์น
npm install styled-components @types/styled-components

// npm install styled-components โ ์ด ๋ช๋ น์ด๋ก๋ง ์ค์น ๊ฐ๋ฅ
// @types/styled-components โ ์ค๋ฅ ์ ์ด ๋ช๋ น์ด ์ถ๊ฐํ์ฌ ์ค์น(๋ฒ์  ์ ๋ง์์ ์๊ธฐ๋ ๋ฌธ์ )
```

โพ 04-06 : src/Footer.tsx โ styled-components ์ฌ์ฉ <br>
```javascript
import React from 'react'
import styled from 'styled-components'

type FooterPropsType = {
    theme: string;
};

const Footer = (p1: FooterPropsType) => {
    const FooterBox = styled.div`
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        padding: 1rem;
        background-color: ${(p2) => (p2.theme === "basic" ? "skyblue" : "yellow")};
        text-align: center;
    `;
    return <FooterBox theme={p1.theme}>React styled-components Test</FooterBox>
};

export default Footer;
```
(์คํ์ผ์ด ์ ์ฉ๋ div๋ฅผ ๋ฆฌํดํ๋ ์ปดํฌ๋ํธ โท FooterBox)

โพ 04-07 : src/App.tsx ๋ณ๊ฒฝ โ Footer ์ฌ์ฉ <br>
```javascript
ยทยทยทยทยท
import Footer from './Footer'

ยทยทยทยทยท

  const [theme, setTheme] = useState<string>("basic");

  ยทยทยทยทยท

  return (
    <div className="container">
      <h2 className={AppCssModule.test}>Hello {msg}!</h2>
      <hr style={styles.dashStyle} />
      {addResult(4, 3)}
      <CountryList countries={list} />
      <Footer theme={theme} />
    </div>
  );
};

export default App;
```
<img src="img/styled_components_checked.jpg" width="800" height="450"> <br>
<img src="img/styled_components_false.jpg" width="420" height="420"> <br>

โพ 04-08 : src/Buttons.tsx โ styled-components๋ก ์์ฑํ ์ปดํฌ๋ํธ ์คํ์ผ ํ์ฅ <br>
```javascript
// styled-components๋ก ์์ฑํ ์ปดํฌ๋ํธ A
const A = styled.div`ยทยทยทยทยท`;
// A ์ปดํฌ๋ํธ๋ฅผ ํ์ฅํ ์ปดํฌ๋ํธ B
const B = styled(A)`ยทยทยทยทยท`;
```

```javascript
import styled from 'styled-components'

const BasicButton = styled.button`
    background-color: purple;
    color: yellow;
    padding 5px 10px;
    margin: 5px;
`;
const UnderLineButton = styled(BasicButton)`
    text-decoration: underline;
`;
const ItalicButton = styled(BasicButton)`
    font-style: italic;
`;
const WhiteUnderLineButton = styled(UnderLineButton)`
    color: white;
`;

export { BasicButton, ItalicButton, UnderLineButton, WhiteUnderLineButton };
```

โพ 04-09 : src/App.tsx ๋ณ๊ฒฝ โ Buttons ์ฌ์ฉ <br>
```javascript
ยทยทยทยทยท
import Footer from './Footer'
import { BasicButton, ItalicButton, UnderLineButton, WhiteUnderLineButton } from './Buttons'
// import { 
//   BasicButton, ItalicButton, 
//   UnderLineButton, WhiteUnderLineButton 
// } from './Buttons'
ยทยทยทยทยท

return (
    <div className="container">
      ยทยทยทยทยท
      <BasicButton>๊ธฐ๋ณธ</BasicButton>
      <ItalicButton>์ดํค๋ฆญ</ItalicButton>
      <UnderLineButton>์ธ๋๋ผ์ธ</UnderLineButton>
      <WhiteUnderLineButton>ํ์ดํธ ์ธ๋๋ผ์ธ</WhiteUnderLineButton>
      <Footer theme={theme} />
    </div>
  );
};

export default App;
```
<img src="img/style_extending.jpg" width="800" height="450"> <br>