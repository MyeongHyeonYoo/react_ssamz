# **chapter 02** 

 ## ๐ก `React` 

--- 

#### [ES6 ๋ฌธ๋ฒ]
- package.json 
```javascript
"scripts": {
    "build": "babel src -d build"
  },
```
โพ 02-01 : Hello John!! <br>
โพ 02-02 : let ํค์๋ <br>
โพ 02-03 : const ํค์๋ - ์์ฑ ๋ณ๊ฒฝ ํ์ฉ <br>
โพ 02-04 : const ํค์๋ - ์ฌํ ๋น ํ์ฉํ์ง ์๋๋ค. (๋ฉ๋ชจ๋ฆฌ ์ฃผ์์ ๋ณ๊ฒฝ ๋ถ๊ฐ) <br><br>
โพ 02-05 : ๊ธฐ๋ณธ ํ๋ผ๋ฏธํฐ(default parameter) <br>
<img src="img/02-05.jpg" width="600" height="60"> <br><br>
โพ 02-06 : ๊ฐ๋ณ ํ๋ผ๋ฏธํฐ(rest parameter) <br>
<img src="img/02-06.jpg" width="250" height="80"> <br><br>
โพ 02-07 : ๊ตฌ์กฐ ๋ถํด ํ ๋น(destructuring assignment) <br>
<img src="img/02-07.jpg" width="200" height="70"> <br><br>
โพ 02-08 : ๊ตฌ์กฐ ๋ถํด ํ ๋น(destructuring assignment) - ํจ์ ํ๋ผ๋ฏธํฐ <br>
<img src="img/02-08.jpg" width="300" height="70"> <br><br>
โพ 02-09 : ํ์ดํ ํจ์(arrow function) <br>
<img src="img/02-09.jpg" width="100" height="60"> <br><br>

###### โถ 02-10 ~ 02-15๋ ๋ธ๋ผ์ฐ์  ๊ฐ๋ฐ์ ๋๊ตฌ์ ์ฝ์ ์ฐฝ์ ์์ฑํ์ฌ ํ์ธ
โพ 02-10 : this ๊ฐ์ฒด <br>


โพ 02-11 : this ๊ฐ์ฒด2 <br>
- ์๋ฐ์คํฌ๋ฆฝํธ์ ํจ์์ ๋ฉ์๋๋ ์ด๋ค ๊ฐ์ฒด์ ๋ฉ์๋ ํํ๋ก ํธ์ถ๋๋๋์ ๋ฐ๋ผ this๊ฐ ๋ฌ๋ผ์ง๋ค. <br>

โพ 02-12 : bind(), apply(), call() ๋ฉ์๋ ํ์ฉ <br>
- bind() : ์ง์ ํ ๊ฐ์ฒด๋ฅผ this๋ก ๋ฏธ๋ฆฌ ์ฐ๊ฒฐํ(binding) ์๋ก์ด ํจ์๋ฅผ ๋ฆฐํดํจ <br>
- apply(), call() : ์ง์ ํ ๊ฐ์ฒด๋ฅผ this๋ก ์ฐ๊ฒฐํ ํ ํจ์๋ฅผ ์ง์  ํธ์ถํจ <br>

โพ 02-13 : ์ค์ฒฉ ํจ์์์์ this <br>
โพ 02-14 : ์ค์ฒฉ ํจ์์์์ this (bind(), apply(), call() ์ด์ฉ) <br>
- bind() ์ฌ์ฉ
    - ๋ด๋ถ ํจ์์ ์ธ๋ถ ํจ์์ this๊ฐ ๋์ผํด์ก๋ค. <br>

โพ 02-15 : ํ์ดํ ํจ์์ this <br>
- ํ์ดํ ํจ์๋ฅผ ์ฌ์ฉํ์ฌ ๋ด๋ถ ํจ์ ๋ฐ ์ธ๋ถ ํจ์์ this๊ฐ ๋์ผํ๋ค. <br>

โพ 02-16 : ๊ฐ์ฒด ๋ฆฌํฐ๋ด <br>
- ๊ฐ์ฒด์ ์์ฑ์ ์์ฑํ  ๋ ์์ฑ๊ณผ ๋ณ์๋ช์ด ๋์ผํ๋ค๋ฉด ๋ณ์๋ช์ ์๋ตํ  ์ ์๋ค.

โพ 02-17 : ์๋ก์ด ๋ฉ์๋ ํ๊ธฐ๋ฒ <br>
โพ 02-18 : ํฌํ๋ฆฟ ๋ฆฌํฐ๋ด(template literal) [์ญ๋ฐ์ดํ == backquoto: `] <br>
โพ 02-19 : ๋ชจ๋(modules) - export <br>
- export default ๊ตฌ๋ฌธ <br>


โพ 02-20 : ๋ชจ๋(modules) ์ฌ์ฉ - import <br>
- importํ  ๋ export๋ ์์ ์ค ํ์ํ ๊ฒ๋ง ์ฐธ์กฐํด์ ์ฌ์ฉํ  ์ ์๋ค. <br>
- export default๋ ๊ฒ์ importํ  ๋ ์ค๊ดํธ ์์ด ์ฐธ์กฐํ  ์ ์๋ค. <br>
- default๋ก export์ importํ  ์ ์๋ ์์๋ ๋จ ํ๋๋ผ๋ ์ ์ ์ฃผ์! <br>
<img src="img/02-20.jpg" width="80" height="50"> <br><br>

โพ 02-21 : ํ๋ก๋ฏธ์ค(promise) <br>
- resolve() ํจ์ โถ than(result) ํจ์ ์คํ <br>
<img src="img/02-21_1.jpg" width="300" height="50"> <br><br>
<img src="img/02-21_2.jpg" width="300" height="50"> <br><br>
<img src="img/02-21_3.jpg" width="300" height="50"> <br><br>
- reject() ํจ์ โถ catch(error) ํจ์ ์คํ <br>
<img src="img/02-21_4.jpg" width="400" height="50"> <br><br>

โพ 02-22 : ํ๋ก๋ฏธ์ค(promise) ์ฒด์ธ <br>
<img src="img/02-22_1.jpg" width="75" height="50"> <br><br>
<img src="img/02-22_2.jpg" width="220" height="45"> <br><br>

โพ 02-23 : ์์ ๋ณต์ฌ(Shallow Copy)์ ์ ๊ฐ ์ฐ์ฐ์(spread operator) <br>
<img src="img/02-23.jpg" width="400" height="200"> <br><br>

โพ 02-24 : ํด๋์ค(class) <br>
- extends ํค์๋๋ก ์์ ๊ตฌํ <br>
- constructor ํค์๋๋ก ์์ฑ์ ์์ฑ <br>
<img src="img/02-24.jpg" width="450" height="100"> <br><br>
