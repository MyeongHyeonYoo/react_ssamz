# **chapter 04**  

## ๐ก `React` 

--- 
#### [๋ฆฌ์กํธ ์ปดํฌ๋ํธ]
- ### ์ํ ์ฌํ <br>

- ๋ ๋๋ง ์ต์ ํ์ ๋ถ๋ณ์ฑ <br>
```
ยค ๋ณต์กํ ๊ฐ์ฒด ๊ตฌ์กฐ์ ์ํ ๋ฐ์ดํฐ๊ฐ ๋ถ๋ชจ ์ปดํฌ๋ํธ์์ ์ ์๋์๊ณ ,
ยค ์ํ ๋ฐ์ดํฐ์ ํ์ ํ๋๋ค์ ์์ ์ปดํฌ๋ํธ์ ์์ฑ(props)์ผ๋ก ์ ๋ฌํ๋ฉฐ,
ยค ์ํ ๋ฐ์ดํฐ์ ๊ฐ์ฒด ํธ๋ฆฌ ๊ตฌ์กฐ๊ฐ ์ปดํฌ๋ํธ์ ํธ๋ฆฌ ๊ตฌ์กฐ์ ๋น์ทํ๋ค๊ณ  ๊ฐ์ .
```
[๊น์ ๋น๊ต & ์์ ๋น๊ต] <br>
โ ๊น์ ๋น๊ต(deep compare): ์ปดํฌ๋ํธ ์์ฑ์ผ๋ก ์ ๋ฌ๋ฐ์ ๊ฐ์ฒด ํธ๋ฆฌ๋ฅผ ๋ฐ๋ผ ๋ด๋ ค๊ฐ๋ฉฐ ์ด์  ๊ฐ์ฒด ํธ๋ฆฌ์ ์ํ๋ ์์ฑ์ด ๋ค๋ฅธ ๋ถ๋ถ์ด ์๋์ง๋ฅผ ์ผ์ผ์ด ๋น๊ตํ๋ฉฐ ์๊ธฐ ์์ ์ ๋ ๋๋งํด์ผ ํ ์ง๋ฅผ ๊ฒฐ์ . <br>
โ ์์ ๋น๊ต(shallow compare): ์ํ ํธ๋ฆฌ ๋๋จ์ ๊ฐ์ด ๋ณ๊ฒฝ๋๋ฉด ์ํ ํธ๋ฆฌ์ ๋ฃจํธ ๊ฒฝ๋ก๋ก ๊ฑฐ์ฌ๋ฌ ์ฌ๋ผ๊ฐ๋ ๊ฒฝ๋ก์์ ๊ฐ์ฒด๋ฅผ ๋ชจ๋ ์๋ก์ด ๊ฐ์ฒด๋ก ๋ฐ๊ฟ์ ๊ธฐ์กด ํธ๋ฆฌ์๋ ๋ค๋ฅธ ์๋ก์ด ๊ฐ์ฒด ํธ๋ฆฌ๊ฐ ๋ณ๊ฒฝ๋ ๊ฒฝ๋ก ์์ ๋ง๋ค์ด ์ฃผ๊ณ (immer๊ณผ ๊ฐ์ ๋ถ๋ณ์ฑ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๊ฐ ๋ด๋น), ์ปดํฌ๋ํธ์ ์์ฑ์ผ๋ก ์ ๋ฌ๋ ํ์ ๊ฐ์ฒด ํธ๋ฆฌ์ ์ด์ ์ ๊ฐ์ฒด ํธ๋ฆฌ๊ฐ ๋จ์ํ ๊ฐ์ ๊ฐ์ฒด์ธ์ง๋ฅผ ๋น๊ตํ๋ ๊ฒ๋ง์ผ๋ก ๋ ๋๋ง ์ฌ๋ถ๋ฅผ ์ฝ๊ฒ ๊ฒฐ์ . <br>
```javascript
let obj2 = obj; // shallow copy
obj2.name = "์ด์์ ";
```
๊ฐ์ฒด์ ๋ฉ๋ชจ๋ฆฌ ์ฃผ์๋ฅผ ๋ณต์ฌํ ๊ฒ์ผ๋ก obj2.name์ ๋ณ๊ฒฝํ๋ฉด obj.name์๋ ์ํฅ.(๋ถ๋ณ์ฑx) <br>

โถ ๋ถ๋ณ์ฑ์ ๊ฐ์ง๋๋ก ํ๊ธฐ ์ํด `์ ๊ฐ ์ฐ์ฐ์(spread operator)` ์ฌ์ฉ <br>
```javascript
let obj3 = { ... obj, name: "์ด์์ " };
```
๊ธฐ์กด ๊ฐ์ฒด์ ์์ฑ ๊ฐ์ ๋ณต์ฌํ ํ, name ์์ฑ์ ์ด์์ ์ผ๋ก ๋ณ๊ฒฝํ ์๋ก์ด ๊ฐ์ฒด๋ฅผ ์์ฑ <br>
(obj3์ ์์ฑ์ ๋ณ๊ฒฝํ๋๋ผ๋ obj์ ๊ฐ์ด ๋ณ๊ฒฝ๋์ง ์๋๋ค.) <br>

- ๋ถ๋ณ์ฑ ๋ผ์ด๋ธ๋ฌ๋ฆฌ(immer) <br>
๋ณต์กํ ๊ฐ์ฒด ํธ๋ฆฌ๊ฐ ๋ถ๋ณ์ฑ์ ๊ฐ์ง๋๋ก ๋ณ๋์ ๋ถ๋ณ์ฑ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ฌ์ฉ <br>

```javascript
// immer ํจ์๋ฅผ produce๋ผ๋ ์ด๋ฆ์ผ๋ก ์ํฌํธ
import produce from 'immer'

const currendtState = [
    { todo: "Learn es6", done: true },
    { todo: "Try immer", done: false },
]
// produce ํจ์์ ์ฒซ ๋ฒ์งธ ์ธ์ : ๋ณ๊ฒฝ ๋์ ๊ฐ์ฒด
// produce ํจ์์ ๋ ๋ฒ์งธ ์ธ์ : ๋ถ๋ณ์ฑ ๋ณ๊ฒฝ ํจ์
// ์ํ ๋ณ๊ฒฝ ํจ์์ ์ธ์ : ์ํ ๋ณ๊ฒฝ์ ์ํ draft ๋ฒ์ ์ ๊ฐ์ฒด
const nextState = produce(currentState, (draft) => {
    draft[1].done = true
})
```

<br> โง ์๋ก์ด ํ๋ก์ ํธ ์์ฑ <br>

```
cd ..
npm init vite immutables-test -- --template react-ts
cd immutables-test
npm install
npm install immer
```

โพ 04-26 : src/main.tsx โ ๋ณต์กํ ํธ๋ฆฌ ๊ตฌ์กฐ ๊ฐ์ฒด๋ฅผ ์ ์ <br>
(UI๋ฅผ ์์ฑํ์ง ์์ผ๋ฏ๋ก main ์ปดํฌ๋ํธ๋ง ์์ ) <br>
```javascript
import produce from 'immer'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

let quiz = {
  "students" : ["ํ๊ธธ๋", "์ฑ์ถํฅ", "๋ฐ๋ฌธ์", "๋ณํ๋"],
  "quizlist" : [
    {
      "question": "ํ๊ตญ ํ๋ก ์ผ๊ตฌํ์ด ์๋ ๊ฒ์?",
      "options": [
        { "no": 1, "option" : "์ผ์ฑ ๋ผ์ด์จ์ฆ" },
        { "no": 2, "option" : "๊ธฐ์ ํ์ด๊ฑฐ์ฆ" },
        { "no": 3, "option" : "๋์ฐ ๋ฒ ์ด์ค" },
        { "no": 4, "option" : "LA ๋ค์ ์ค" }
      ],
      "answer": 4
    },
    {
      "question": "2018๋ ํฌ๋ฆฌ์ค๋ง์ค๋ ๋ฌด์จ ์์ผ์ธ๊ฐ?",
      "options": [
        { "no": 1, "option": "์" },
        { "no": 2, "option": "ํ" },
        { "no": 3, "option": "์" },
        { "no": 4, "option": "๋ชฉ" }
      ],
      "answer": 2
    }
  ]
};

const quiz2 = produce(quiz, draft => {
  // ์ํ ํธ๋ฆฌ์ ๋๋จ ๋ณ๊ฒฝ
  draft.quizlist[0].options[0].option = "LGํธ์์ค";
});

// ์์ ๊ฒฐ๊ณผ : false, false, false, false, false, true
// ๋ง์ง๋ง์ ์ true์ธ๊ฐ? ๋ณ๊ฒฝ๋ ๊ฐ์ฒด ํธ๋ฆฌ์ ๋๋จ์ผ๋ก๋ถํฐ ๋ฃจํฌ๋ก์ ๊ฒฝ๋ก๊ฐ ์๋๋ฏ๋ก
console.log(quiz === quiz2);
console.log(quiz.quizlist === quiz2.quizlist);
console.log(quiz.quizlist[0] === quiz2.quizlist[0]);
console.log(quiz.quizlist[0].options[0] === quiz2.quizlist[0].options[0]);
console.log(quiz.quizlist[0].options[0].option === quiz2.quizlist[0].options[0].option);
console.log(quiz.students === quiz2.students);
```
<img src="img/immer.jpg" width="400" height="150"> <br>