# **chapter 05**  

## ๐ก `React` 

--- 
#### [๋ฆฌ์กํธ ํด๋์ค ์ปดํฌ๋ํธ] 

<br>

- ๊ฐ์ DOM๊ณผ ์กฐ์  <br>
    - ๊ฐ์ DOM๊ณผ ๋ธ๋ผ์ฐ์  DOM <br>
        - ๊ฐ์ DOM์ ๋ธ๋ผ์ฐ์  DOM์ ํธ๋ฆฌ ๊ตฌ์กฐ๋ฅผ ๊ทธ๋๋ก ๋ธ๋ผ์ฐ์  ๋ฉ๋ชจ๋ฆฌ์์ ๊ตฌํํ DOM ํธ๋ฆฌ ๊ฐ์ฒด์ด๋ค. <br>
        - ๊ฐ์ DOM์ ์ฌ์ฉํ๋ ์ด์  <br>
            - ๋ธ๋ผ์ฐ์  DOM์ ์กฐ์ํ๋ ๊ฒ์ ๋๋ฆฌ๊ธฐ ๋๋ฌธ <br>
                - ์ ํํ๊ฒ๋ ์๋ฐ์คํฌ๋ฆฝํธ ์ธ์ด๋ก ๋ธ๋ผ์ฐ์  DOM์ ์กฐ์ํ๋ ์ฝ๋๋ฅผ ์คํํ๋ ๊ฒ์ ๋๋ฆฌ์ง ์์ง๋ง, <u>ํ๋ฉด์ ๋ธ๋ผ์ฐ์ ์ ๋ค์ ๊ทธ๋ ค๋ด๋ ์์์ด ๋๋ฆฌ๋ค.</u> <br>
                
                <br>

        - reflow(relayout): ๋ ๋๋งํ  DOM ํธ๋ฆฌ๋ฅผ ์๋กญ๊ฒ ๋ง๋ค๊ณ  HTML ์์๋ค์ ์์น์ ํฌ๊ธฐ๋ฅผ ๊ณ์ฐํด ๋ฐฐ์นํ๋ ๋จ๊ณ. <br>
        - repaint: reflow๊ฐ ์๋ฃ๋๊ณ  ๋๋ฉด HTML ์์์ ์คํ์ผ ์์๋ฅผ ์ํ๊ณ  UI๋ฅผ ๊ทธ๋ ค๋ด๋ repaint ๋จ๊ณ๊ฐ ์คํ. <br>

โถ ๋ธ๋ผ์ฐ์  DOM์ ์กฐ์ํ  ๋๋ง๋ค reflow, repaint ๋จ๊ณ๊ฐ ์คํ๋๋ฉด์ ๋ธ๋ผ์ฐ์  ๋ฆฌ์์ค๋ฅผ ์๋ชจํ๊ณ , ์ด๋ก ์ธํด ๋ ๋๋ง ์ฑ๋ฅ์ด ์ ํ๋๊ธฐ ๋๋ฌธ์ ๋งค๋ฒ ๋ธ๋ผ์ฐ์  DOM์ ์กฐ์ํ๋ ๊ฒ์ ๋ฐ๋์งํ์ง ์๊ณ , ์ด ๋ฌธ์  ์ ์ ํด๊ฒฐํ๊ธฐ ์ํด ๊ฐ์ DOM์ ์ฌ์ฉํ๋ค. <br>
โ ๊ฐ์ DOM์ ์ด์ฉํ๋ฉด ๊ฐ์ DOM ์์ค์์ ์ด์  ๋ฒ์ ๊ณผ ํ์ฌ ๋ฒ์ ์ DOM ํธ๋ฆฌ๋ฅผ ๋น๊ตํด์ ์ฐจ์ด๊ฐ ๋๋ ๋ถ๋ถ๋ง์ ๋ธ๋ผ์ฐ์  DOM์ ์๋ฐ์ดํธํ๊ธฐ ๋๋ฌธ์ ๋ธ๋ผ์ฐ์  DOM ์์ค์์ ๋ถํ์ํ reflow, repaint ์์์ ์ค์ผ ์ ์๋ค. ์ด๋ฌํ ๊ณผ์ ์ `์กฐ์ (reconciliaiton)`์ด๋ผ๊ณ  ํ๋ค. <br>
```
๋ฆฌ์กํธ ์ปดํฌ๋ํธ์ ์ํ๋ ์์ฑ์ด ๋ณ๊ฒฝ๋๋ฉด ์ปดํฌ๋ํธ๋ ํญ์ ์ปดํฌ๋ํธ ์์  ์ ์ฒด๋ฅผ ๋ ๋๋ง ํ๋ค. ์ด๋ ๊ฐ๋ฐ์๊ฐ ์ํ๋ UI๋ฅผ ์ ์ธ์ ์ผ๋ก ์์ฑํ๊ธฐ ๋๋ฌธ์ด๋ค. ๋ฐ๋ผ์ UI ์ฑ๋ฅ์ ๊ฐ์ ํ๋ ค๋ฉด '๊ฐ์DOM'์ ์ฌ์ฉํด์ผ ํ๋ค. ๋ธ๋ผ์ฐ์  DOM์ ์๋ฐ์ดํธ ๊ธฐ๋ฅ์ ๊ฐ์ DOM์ด ์ฒ๋ฆฌํ๋ฏ๋ก ๊ฐ๋ฐ์๊ฐ ์ง์  ์ ๊ฒฝ ์ฐ์ง ์์๋ ๋๊ณ , ๊ฐ์ DOM์ ์๋ฐ์ดํธํ๋ ๊ฒ์ `๋ธ๋ผ์ฐ์ ์ ๋ฉ๋ชจ๋ฆฌ์ ์์ฑ`ํ๋ ์์์ด๋ฏ๋ก ๋ธ๋ผ์ฐ์  DOM์ ์๋ฐ์ดํธํ๋ ๊ฒ์ ๋นํด ๋ ๋น ๋ฅด๋ค.
```

- key ํน์ฑ <br>
    - key์ ํน์ฑ(attribute)์ ์ปดํฌ๋ํธ ๋ด๋ถ์์ <u>๋ฐ๋ณต์ ์ผ๋ก</u> `์์ ์ปดํฌ๋ํธ`์ `์์`๋ฅผ <b>๋ ๋๋ง</b>ํ  ๋ ์ง์  <br>
        - ๋ฐ๋ณต์ ์ธ ๋ฆฌ์คํธ ํญ๋ชฉ์ ์ผ๋ถ ํญ๋ชฉ๋ค์ด ์ถ๊ฐ, ์ญ์ , ๋ณ๊ฒฝ๋๋ ๊ฒฝ์ฐ, ์ด๋ฌํ ๋ฆฌ์คํธ ํญ๋ชฉ์ ๋ณ๊ฒฝ์ ์ถ์ ํ๊ธฐ ์ํด key ํน์ฑ์ ์ฌ์ฉ <br>

(4์ฅ์ todolist-app ํ๋ก์ ํธ์ ์ผ๋ถ[TodoList] - ๋ฆฌ์คํธ ํญ๋ชฉ ๋ ๋๋ง) <br>
```javascript
let items = props.todoList.map((item) => {
    return <TodoListItem key={item.no}
            todoItem={item}
            deleteTodo={props.deleteTodo}
            toggleDone={props.toggleDone} />
});
```
โ key ํน์ฑ์ ๋ฐฐ์ด ๋ฐ์ดํฐ(์ํ, ์์ฑ)๋ฅผ ์ด์ฉํด ๋ฐ๋ณต์ ์ธ ๋ ๋๋ง์ ํ  ๋ ๊ฐ ํญ๋ชฉ์ ๊ณ ์  ํค๊ฐ ๋๋ค. <br>
โ key๋ฅผ ์ง์ ํ์ง ์์ผ๋ฉด ๋ฐฐ์ด ๋ฐ์ดํฐ์ ์ด๋ค ๊ฐ์ด ์ด๋ ์์์ ๋ ๋๋ง๋๋์ง๋ฅผ ์ถ์ ํ  ๋ฐฉ๋ฒ์ด ์์ผ๋ฏ๋ก ๋ฆฌ์คํธ ์ ์ฒด๋ฅผ ๋ค์ ๋ ๋๋งํด์ผ ํ๋ค. <br>
โ ํ์ง๋ง key ํน์ฑ์ ์ง์ ํ๋ฉด ๋ฐฐ์ด ๋ฐ์ดํฐ์ ์ด๋ค ๊ฐ์ด ์ด๋ ์์์ ๋ ๋๋ง๋๋์ง๋ฅผ key๋ฅผ ๋น๊ตํด์ ์ถ์ ํ  ์ ์๊ธฐ์ ๋ฆฌ์คํธ ์ ์ฒด๋ฅผ ๋ค์ ๋ ๋๋งํ์ง ์์๋ ๋๋ฏ๋ก ์กฐ์  ์์์ ํจ์จ์ ์ผ๋ก ์ํํ  ์ ์๋ค. <br>

- ์๋ช์ฃผ๊ธฐ ๋ฉ์๋๋ฅผ ์ด์ฉํ ๋ ๋๋ง ์ต์ ํ <br>
    - ๋ฆฌ์กํธ ํด๋์ค ์ปดํฌ๋ํธ์์ `shouldComponentUpdate` <b>์๋ช์ฃผ๊ธฐ ๋ฉ์๋</b>๋ ์ปดํฌ๋ํธ์ `render()` ๋ฉ์๋๊ฐ ํธ์ถ๋๊ธฐ ์ ์ ์คํ๋๋ ๋ฉ์๋์ด๋ค. <br>
    - <b>์ด ๋ฉ์๋์์ <u>๋ฆฌํด ๊ฐ์ด false์ด๋ฉด</u> ์ด ๋ฉ์๋ ์ดํ์ ์๋ช์ฃผ๊ธฐ ๋ฉ์๋๋ฅผ ์คํํ์ง ์์ผ๋ฏ๋ก `render()`, `componentDidUpdate()`๋ฉ์๋๊ฐ ๋ชจ๋ ์คํ๋์ง ์๋๋ค.</b>
        - render() ๋ฉ์๋๋ฅผ ์คํํ์ง ์์ผ๋ฏ๋ก ๊ฐ์ DOM์ ๋ํ ๋ค์ ๋ ๋๋ง์ ์คํํ์ง ์๊ธฐ ๋๋ฌธ์, ๊ฐ์ DOM์ ์ฐ๊ธฐ ์์๋ ์ค์ด๊ณ  ๋ธ๋ผ์ฐ์  DOM์ ์๋ฐ์ดํธ๋ ์ต์ํ ํ  ์ ์๋ค. <br>
        - `shouldComponentUpdate()` ๋ฉ์๋์์ ๋ ๋๋ง ์ฌ๋ถ๋ฅผ ๋น ๋ฅด๊ฒ ๊ฒฐ์ ํ๋ ค๋ฉด ๋ถ๋ณ์ฑ์ ๊ฐ์ง ์ํ ๋ณ๊ฒฝ์ด ํ์ํ๋ค.  <br>
        ```
        immer์ ๊ฐ์ ๋ถ๋ณ์ฑ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ด์ฉํ๋ฉด ์ํ ํธ๋ฆฌ ๋๋จ์์ ๊ฐ์ ๋ณ๊ฒฝํ์ ๋ ๋๋จ์ผ๋ก๋ถํฐ ์ต์์๋ก ๊ฑฐ์ฌ๋ฌ ์ฌ๋ผ๊ฐ๋ ๊ฒฝ๋ก์์ ๊ฐ์ฒด๋ฅผ ๋ชจ๋ ์๋ก์ด ๊ฐ์ฒด๋ก ๋ณ๊ฒฝํ๋ฉฐ, ์ด์  ๋ฒ์ ์ ๊ฐ์ฒด ํธ๋ฆฌ์ ํ์ฌ ๋ฒ์ ์ ๊ฐ์ฒด ํธ๋ฆฌ๋ฅผ ๋น๊ตํ๋ ์์์ '๊ฐ์ฒด์ ๋ฉ๋ชจ๋ฆฌ ์ฃผ์๊ฐ ๊ฐ์์ง๋ง์ ๋น๊ตํ๋ฉด ๋๋ค. ์ด๋ฌํ ๋น๊ต๋ฅผ ์์ ๋น๊ต(shallow compare)๋ผ๊ณ  ํ๋ค.'  
        ```

- shouldComponentUpdate ์๋ช์ฃผ๊ธฐ ๋ฉ์๋ ์ ์ฉ <br>
    - <u>shouldComponentUpdate</u> ์๋ช์ฃผ๊ธฐ ๋ฉ์๋๋ฅผ ์ด์ฉํด `์ฑ๋ฅ ์ต์ ํ` <br>


<br> โง ๊นํ๋ธ์์ ํ๋ก์ ํธ ๋ค์ด๋ก๋ <br>
```
https://github.com/stepanowon/react-ts-quickstart
ch05/todolist-app-class ํ๋ก์ ํธ ๋ค์ด๋ก๋
(4์ฅ์์ ์์ฑํ todolist-app์ 'ํด๋์ค ์ปดํฌ๋ํธ' ๊ธฐ๋ฐ์ผ๋ก ๋ณํํ ๊ฒ)
cd todolist-app-class
npm install (ํ์ํ ํจํค์ง ๋ผ์ด๋ธ๋ฌ๋ฆฌ ๋ค์ด๋ก๋)
```

โพ 05-12 : src/components/TodoList.tsx / src/components/TodoListItem.tsx / src/components/InputTodo.tsx <br>
 โ ์ปดํฌ๋ํธ๋ง๋ค render()๋ฉ์๋์ ์ฒซ ์ค์ console.log() ์ฝ๋ ์ถ๊ฐ <br>
```javascript
// TodoList.tsx์ render() ๋ฉ์๋ ๋ด๋ถ์ ๋ค์ ์ฝ๋๋ฅผ ์ถ๊ฐํฉ๋๋ค.
console.log("## TodoList ๋ ๋");

// TodoListItem.tsx์ render() ๋ฉ์๋ ๋ด๋ถ์ ๋ค์ ์ฝ๋๋ฅผ ์ถ๊ฐํฉ๋๋ค.
console.log("## TodoListItem ๋ ๋");

// InputTodo.tsx์ render() ๋ฉ์๋ ๋ด๋ถ์ ๋ค์ ์ฝ๋๋ฅผ ์ถ๊ฐํฉ๋๋ค.
console.log("## InputTodo ๋ ๋");
```

```javascript

ยทยทยทยทยท

export default class TodoList extends Component<Props> {
  render() {
    console.log("## TodoList ๋ ๋");
    ยทยทยทยทยท
  }
}
```

```javascript

ยทยทยทยทยท

export default class TodoListItem extends Component<Props> {
  render() {
    console.log("## TodoListItem ๋ ๋");
    ยทยทยทยทยท
  }
}
```

```javascript

ยทยทยทยทยท

export default class InputTodo extends Component<Props, State> {
  state = {
    todo: "",
  };

  ยทยทยทยทยท

  render() {
    console.log("## InputTodo ๋ ๋");
    ยทยทยทยทยท
  }
}
```

โพ 05-13 : src/main.tsx ๋ณ๊ฒฝ โ &lt;React.StrictMode&gt;&lt;/React.StrictMode&gt;๋ฅผ ๋ ๋๋งํ์ง ์๋๋ก ๋ณ๊ฒฝ <br>

- `StrictMode`๋ ์ ํ๋ฆฌ์ผ์ด์ ๋ด๋ถ์ ํฌํจ๋ '๋ฌธ์ ์ '์ ํ์ํ๊ธฐ ์ํด ์ฌ์ฉํ๋ ๋๊ตฌ๋ก, <u>'์ปดํฌ๋ํธ ํธ๋ฆฌ'์ ๋ํ ์ถ๊ฐ์ ์ธ ๊ฒ์ฌ</u>๋ฅผ ์ํํ๊ธฐ ๋๋ฌธ์ render()๊ฐ ํ ๋ฒ ๋ ํธ์ถ ๋๋ค. <br>
```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import AppContainer from "./AppContainer";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(<AppContainer />);
```

<img src="img/todolistitem_rerender.jpg" width="840" height="440"> <br>
โถ ํ  ์ผ ์์ดํ์ ์ถ๊ฐํ  ๋๋ง๋ค TodoListItem ์ปดํฌ๋ํธ ๋ชจ๋๊ฐ ๋ค์ ๋ ๋๋ง๋๋ ๊ฒ์ ํ์ธ <br>
- ๋ชจ๋  TodoListItem์ด ๋งค๋ฒ ๋ค์ ๋ ๋๋ง ๋๋ ์ด์ ? <br>
    - <b>๊ธฐ๋ณธ์ ์ผ๋ก ๋ถ๋ชจ ์ปดํฌ๋ํธ์ ์ํ๊ฐ ๋ณ๊ฒฝ๋์ด ๋ค์ ๋ ๋๋ง๋๋ฉด ๋ชจ๋  ์์ ์ปดํฌ๋ํธ๋ ํจ๊ป ๋๋๋ง ๋๋ค.</b> <br>
        - TodoListItem์ ๊ฐ์๊ฐ ๋ง์์ง๋ฉด ์ถ๊ฐ๋ ์์ดํ ์ด์ธ์ ๋ค๋ฅธ TodoListItem์ ๋ณ๊ฒฝ๋ ๊ฒ์ด ์์ด๋ ๋ค์ ๋ ๋๋ง๋๊ธฐ ๋๋ฌธ์ ๋ ๋๋ง์ด ๋๋ ค์ง๋ค. <br>
        - render()๋ ๊ฐ์ DOM์ ์ฐ๋ ๊ฒ์ด์ง๋ง ์ด ๋ํ ๋ฐ๋ณต์ ์ผ๋ก ์ํ๋๋ฉด ์ฑ๋ฅ์ ๋์ ์ํฅ์ด ๋ผ์น๋ค. <br>

โพ 05-14 : src/components/TodoList.tsx ๋ณ๊ฒฝ โ shouldComponentUpdate() ์๋ช์ฃผ๊ธฐ ๋ฉ์๋๋ฅผ ์ด์ฉํด ์ต์ ํ <br>
```javascript

ยทยทยทยทยท

export default class TodoList extends Component<Props> {
  shouldComponentUpdate(nextProps: Props, nextState: {}) {
    if (nextProps.todoList !== this.props.todoList) return true;
    return false;
  }

  render() {
    ยทยทยทยทยท
  }
}

```

โพ 05-15 : src/components/TodoListItem.tsx ๋ณ๊ฒฝ โ shouldComponentUpdate() ์๋ช์ฃผ๊ธฐ ๋ฉ์๋๋ฅผ ์ด์ฉํด ์ต์ ํ <br>
```javascript

ยทยทยทยทยท

export default class TodoListItem extends Component<Props> {
  shouldComponentUpdate(nextProps: Props, nextState: {}) {
    if (nextProps.todoItem !== this.props.todoItem) return true;
    return false;
  }

  render() {
    ยทยทยทยทยท
  }
}

```
<img src="img/todolistitem_rerender_2.jpg" width="800" height="350"> <br>
๊ธฐ์กด TodoListItem์ ๋ค์ ๋ ๋๋ง๋์ง ์๊ณ (์ ์ผ ์ฒ์์๋ง ๋ ๋๋งโฃ), ์ถ๊ฐ๋ TodoListItem๋ง ๋ ๋๋ง๋๋ ๊ฒ์ ํ์ธ <br>

- PureComponent ์ ์ฉ <br>
๊ธฐ์กด ํด๋์ค ์ปดํฌ๋ํธ๋ 'Component'๋ฅผ ์์๋ฐ์ ์์ฑํ์ง๋ง, `PureComponent`๋ฅผ ์์๋ฐ์ ์ ์๋ค. <br>
  - `PureComponent`๋ shouldComponentUpdate ์๋ช์ฃผ๊ธฐ ๋ฉ์๋๊ฐ ์ํ์ ์์ฑ์ '์์ ๋น๊ต'๋ฅผ ํ๋๋ก ์ด๋ฏธ ๊ตฌํ๋ ํด๋์ค <br>

โพ 05-16 : src/components/TodoList.tsx ๋ณ๊ฒฝ โ PureComponent ์์(shouldComponentUpdate ๋ฉ์๋ ์ฃผ์ ์ฒ๋ฆฌ) <br>
```javascript
// import React, { Component } from "react";
import { TodoListItemType } from "../AppContainer";
import TodoListItem from "./TodoListItem";
import { PureComponent } from 'react';

type Props = {
  todoList: Array<TodoListItemType>;
  toggleDone: Function;
  deleteTodo: Function;
};

export default class TodoList extends PureComponent<Props> {
  // shouldComponentUpdate(nextProps: Props, nextState: {}) {
  //   if (nextProps.todoList !== this.props.todoList) return true;
  //   return false;
  // }
  render() {
    console.log("## TodoList ๋ ๋");
    let items = this.props.todoList.map((item: TodoListItemType) => {
      return <TodoListItem key={item.no} todoItem={item} deleteTodo={this.props.deleteTodo} toggleDone={this.props.toggleDone} />;
    });

    return (
      <div className="row">
        {" "}
        <div className="col">
          <ul className="list-group">{items}</ul>
        </div>
      </div>
    );
  }
}
```

โพ 05-17 : src/components/TodoListItem.tsx ๋ณ๊ฒฝ โ PureComponent ์์(shouldComponentUpdate ๋ฉ์๋ ์ฃผ์ ์ฒ๋ฆฌ) <br>
```javascript
// import React, { Component } from "react";
import { TodoListItemType } from "../AppContainer";
import { PureComponent } from 'react';

type Props = {
  todoItem: TodoListItemType;
  deleteTodo: Function;
  toggleDone: Function;
};

export default class TodoListItem extends PureComponent<Props> {
  // shouldComponentUpdate(nextProps: Props, nextState: {}) {
  //   if (nextProps.todoItem !== this.props.todoItem) return true;
  //   return false;
  // }

  render() {
    console.log("## TodoListItem ๋ ๋");
    let itemClassName = "list-group-item";
    if (this.props.todoItem.done) itemClassName += " list-group-item-success";
    return (
      <li className={itemClassName}>
        <span
          className={this.props.todoItem.done ? "todo-done pointer" : "pointer"}
          onClick={() => this.props.toggleDone(this.props.todoItem.no)}
        >
          {this.props.todoItem.todo}
          {this.props.todoItem.done ? " (์๋ฃ)" : ""}
        </span>
        <span className="float-end badge bg-secondary pointer" onClick={() => this.props.deleteTodo(this.props.todoItem.no)}>
          ์ญ์ 
        </span>
      </li>
    );
  }
}
```
<img src="img/todolistitem_rerender_3.jpg" width="800" height="350"> <br>
์คํ ๊ฒฐ๊ณผ๋ ๊ธฐ์กด๊ณผ ๋์ผํ๋ค. <br>

```
# ํด๋์ค ์ปดํฌ๋ํธ๋ ๋ค์ํ ์๋ช์ฃผ๊ธฐ ๋ฉ์๋๋ฅผ ์ฌ์ฉ

# ์๋ช์ฃผ๊ธฐ ๋ฉ์๋์ ์ฐ์
 - ์ปดํฌ๋ํธ๊ฐ ๋ง์ดํธ๋  ๋
 - ์ปดํฌ๋ํธ์ ์ํ๋ ์์ฑ์ด ์๋ฐ์ดํธ๋  ๋
 - ์ปดํฌ๋ํธ๊ฐ ์ธ๋ง์ดํธ๋  ๋

# ์ปดํฌ๋ํธ ๋ด๋ถ์์ ์๋ฌ๊ฐ ๋ฐ์ํ์ ๋๋ componentDidCatch ์๋ช์ฃผ๊ธฐ ๋ฉ์๋๋ฅผ ์ด์ฉํด ์๋ฌ ์ฒ๋ฆฌ

# ์ปดํฌ๋ํธ๊ฐ ๋ง์ดํธ๋  ๋์ ์ธ๋ง์ดํธ๋  ๋๋ ์ธ๋ถ ๋ฆฌ์์ค๋ฅผ ์ฐ๊ฒฐํ๊ณ  ํด์ ํ๋ ์ฝ๋๋ฅผ ๋ฐ๋์ ์์ฑ
 - ๊ทธ๋ ์ง ์์ผ๋ฉด ๋ฉ๋ชจ๋ฆฌ ๋์๋ ๋ด๋ถ ์๋ฌ๊ฐ ๋ฐ์ํ  ์ ์๋ค.

# shouldComponentUpdate ์๋ช์ฃผ๊ธฐ ๋ฉ์๋์ PureComponent๋ฅผ ํ์ฉํ๊ณ  ๋ถ๋ณ์ฑ์ ๊ฐ์ง๋ ์ํ ๋ณ๊ฒฝ์ ์ํํ๋ฉด ๋ ๋๋ง ์ฑ๋ฅ์ ์ต์ ํ ํ  ์ ์๋ค.
```