# **chapter 04**  

## π‘ `React` 

--- 
#### [λ¦¬μ‘νΈ μ»΄ν¬λνΈ]
- ### μ»¨νμ΄λ μ»΄ν¬λνΈμ νν μ»΄ν¬λνΈ <br>
- μ»¨νμ΄λ μ»΄ν¬λνΈ(container component) <br>
`μ»¨νμ΄λ μ»΄ν¬λνΈ`λ μνμ μν λ³κ²½, λΉμ¦λμ€ λ‘μ§μ μ²λ¦¬νλ μ°μ° κΈ°λ₯μ΄ μμΌλ©° <br>
UIμ μ€νμΌ μ λ³΄λ ν¬ν¨νμ§ μκ³  λ¨μν 'μμ μ»΄ν¬λνΈλ₯Ό μ‘°ν©'νλλ‘ μμ±. <br>
- νν μ»΄ν¬λνΈ(presentational component) <br>
`νν μ»΄ν¬λνΈ`λ λΆλͺ¨ μ»΄ν¬λνΈλ‘λΆν° μμ±(props)μ μ λ¬ λ°μ UIλ₯Ό λ λλ§νλ κΈ°λ₯μ μν.<br>
μ°μ°κ³Ό λ‘μ§μΌλ‘λΆν° UIλ₯Ό λΆλ¦¬ν΄μ μμ±νλ―λ‘ μ¬μ¬μ©μ±μ΄ λλ€.<br>
  - νν μ»΄ν¬λνΈλ μμ μ μνλ₯Ό κ°μ§μ§ μμ§λ§ 'μλͺ μ£ΌκΈ° κ΄λ¦¬κ° νμνμ§ μμ μν'λΌλ©΄ νν μ»΄ν¬λνΈ λ΄λΆμ μνλ₯Ό κ°μ§ μλ μλ€.

> `μ»¨νμ΄λ μ»΄ν¬λνΈ`μμμ μν λ³κ²½λ§μ μΆμ νλ©΄ κ·Έ νμ μ»΄ν¬λνΈμ UIκ° μ΄λ»κ² λ°λμ§λ₯Ό <u>μμΈ‘</u>ν  μ μλ€. β μν λ³κ²½ μΆμ μ΄ μ©μ΄ν΄μ§κ³  κ·Έμ λ°λΌ λλ²κΉλ μ’ λ μ½κ² ν  μ μλ€. <br>

> μνλ₯Ό λ³κ²½νλ ν¨μμ λ©μλλ μνλ₯Ό λ³΄μ ν μ»΄ν¬λνΈμμ μμ±λμ΄μΌ νλ€. <br>

> 'μμ μ»΄ν¬λνΈ'μ μνμ ν¨κ» μνλ₯Ό λ³κ²½νλ ν¨μλ μμ±μΌλ‘ μ λ¬ν΄μΌ νλ€. <br>
> 'μμ μ»΄ν¬λνΈ'μμ μ΄λ²€νΈκ° λ°μνλ©΄ μμ±μ ν΅ν΄ μ λ¬λ°μ ν¨μλ₯Ό νΈμΆνμ¬ μ»¨νμ΄λ μ»΄ν¬λνΈμ μνλ₯Ό λ³κ²½ <br>
> β· μ΄λ¬ν ν¨μμ λ©μλλ₯Ό μ½λ°± ν¨μ(λ©μλ)λΌκ³  νλ€. <br>

β λΆλͺ¨-μμ μ»΄ν¬λνΈ μ¬μ΄μ μ λ³΄ μ λ¬ λ°©λ² <br>
- λΆλͺ¨μμ μμμΌλ‘μ μ λ³΄ μ λ¬ λ°©λ² <br>
  - μμ±(props)μ μ΄μ©ν΄ μ λ³΄λ₯Ό μ λ¬ <br>
- μμμμ λΆλͺ¨λ‘μ μ λ³΄ μ λ¬ λ°©λ² <br>
  - μμ±μ μ΄μ©ν΄ λΆλͺ¨ μ»΄ν¬λνΈμ ν¨μ(λ©μλ)λ₯Ό μμ μ»΄ν¬λνΈλ‘ μ λ¬νκ³ , μμ μ»΄ν¬λνΈμμ μ΄λ²€νΈκ° λ°μνλ©΄ ν΄λΉ ν¨μλ₯Ό νΈμΆ <br>

β μ»΄ν¬λνΈ λΆν  <br>
- μ»΄ν¬λνΈμ μ¬μ¬μ©μ± κ³ λ € <br>
  - μ»΄ν¬λνΈμ μμκ° ν¬λ©΄(ν μ»΄ν¬λνΈκ° λ§μ κΈ°λ₯μ μ²λ¦¬νλ©΄) μ¬μ¬μ©μ±μ΄ λ¨μ΄μ§ μ μλ€. <br>
  - λ°λλ‘ μ»΄ν¬λνΈλ₯Ό λλ¬΄ μκ² λΆν νλ©΄ μ»΄ν¬λνΈ μ¬μ΄μ μ λ³΄ μ λ¬ κ΅¬μ‘°κ° λ³΅μ‘ν΄μ§κ³  μ»΄ν¬λνΈμ κ°μκ° λ§μμ Έμ κ΄λ¦¬κ° νλ€μ΄μ§λ€. <br>
- μ»΄ν¬λνΈ λ΄λΆμ κΈ°λ₯μ΄ λλ¬΄ λ³΅μ‘νμ§ μλλ‘ λΆν  <br>
  - μ»΄ν¬λνΈμ μμκ° ν¬λ©΄ μ»΄ν¬λνΈ λ¨μλ‘ λλ²κΉνκ±°λ νμ€νΈνκΈ° μ΄λ €μμ§λ€. <br>
  (νλμ μ»΄ν¬λνΈκ° 3 ~ 4κ° μ΄μμ κΈ°λ₯μ μ²λ¦¬νμ§ μλλ‘ λΆν ) <br>
- μ»΄ν¬λνΈ λ λλ§ μ΅μ νλ₯Ό κ³ λ € <br>
  - **μ»΄ν¬λνΈ λ¨μλ‘ λ λλ§ μ¬λΆλ₯Ό κ²°μ νλ€.** <br>
    - λλλ§ μ΅μ νλ₯Ό μν΄ μνλ₯Ό λ³κ²½νλ λ¨μλ‘ μ»΄ν¬λνΈλ₯Ό λΆν  <br>

<br>
&lt;μ νλ¦¬μΌμ΄μ μ€μ΅&gt; <br>
β· CRUD(create-read-update-delete) <br>

<br>

β μν λ°μ΄ν° <br>
```javascript
// TodoList Appμ λ°μ΄ν°
// β ν μΌ λͺ©λ‘ λ°μ΄ν°: todoList
  {}
[
  { no: 1, todo: "Reactνμ΅1", done: false },
  { no: 2, todo: "Reactνμ΅2", done: false },
  { no: 3, todo: "Reactνμ΅3", done: true },
  { no: 4, todo: "Reactνμ΅4", done: false }
]
```


β μ‘μ λμΆ <br><br>
β£ addTodo(todo: string) => void <br>
- ν  μΌ μμ΄νμ μΆκ°νλ κΈ°λ₯. addTodo(todo) ννλ‘ todo ν κ±΄μ μΈμλ‘ μ λ¬λ°μΌλ©΄ todoList μνμ μΆκ°. <br>

β£ deleteTodo(no: number) => void <br>
- no κ°μ μ΄μ©ν΄ ν  μΌ μμ΄νμ μ°Ύμμ μ­μ  <br>

β£ toggleDone(no: number) => void <br>
- no κ°μ μ΄μ©ν΄ ν  μΌ μμ΄νμ μ°Ύμμ done κ°μ ν κΈνλ€. <br>

<br>

β μ»΄ν¬λνΈ λͺ©λ‘ μμ± <br>
 
β£ AppContainer μ»΄ν¬λνΈ <br>
- μν: todoList <br>
- λ©μλ: addTodo, deleteTodo, toggleDone <br>

β£ App μ»΄ν¬λνΈ <br>
 - μμ±: todoList, addTodo, deleteTodo, toggleDone <br>
 - κΈ°λ₯: InputTodo μ»΄ν¬λνΈμ TodoList μ»΄ν¬λνΈλ‘ μμ±μ μ λ¬ <br>

β£ InputTodo μ»΄ν¬λνΈ <br>
- μμ±: addTodo <br>
- μν: todo(μ¬μ©μμ μλ ₯κ°μ λ°μλ΄κΈ° μν μν) <br>
- κΈ°λ₯: μ¬μ©μκ° μλ ₯ν κ°μ todo μνμ λ°μνκ³ , μ¬μ©μκ° μΆκ° λ²νΌμ ν΄λ¦­νλ©΄ μμ±μΌλ‘ μ λ¬λ°μ addTodo ν¨μλ₯Ό νΈμΆ <br>

β£ TodoList μ»΄ν¬λνΈ <br>
- μμ±: todoList, deleteTodo, toggleDone <br>
- κΈ°λ₯: μ λ¬λ°μ todoList μμ±μ μ΄μ©ν΄ TodoListItem μ»΄ν¬λνΈλ₯Ό λ°λ³΅μ μΌλ‘ λ λλ§νλ©΄μ μμ±μΌλ‘ todoListμ κ° ν­λͺ©(todoItem)κ³Ό deleteTodo, toggleDone λ©μλλ₯Ό μ λ¬ <br>

β£ TodoListItem μ»΄ν¬λνΈ <br>
- μμ±: todoItem, deleteTodo, toggleDone <br>
- κΈ°λ₯: todoItem μμ±μΌλ‘ μ λ¬λ°μ ν  μΌ ν κ±΄μ μ΄μ©ν΄ λ λλ§, μ­μ  λ²νΌμ ν΄λ¦­νμ λ deleteTodo μμ±μΌλ‘ μ λ¬λ°μ ν¨μλ₯Ό νΈμΆ, ν  μΌ ν­λͺ©μ ν΄λ¦­νλ©΄ μμ±μΌλ‘ μ λ¬λ°μ toggleDoneν¨μλ₯Ό νΈμΆ<br>

<br> β§ μλ‘μ΄ νλ‘μ νΈ μμ± <br>
```javascript
cd ..
npm init vite todolist-app -- --template react-ts
cd todolist-app
npm install
// npm install immer bootstrap@5.x.x β νΉμ  λ²μ  μ νν΄μ μ€μΉ
npm install immer bootstrap β μ΄λ κ²λ§ ν΄μ μ€μΉν΄λ λλ€.(μ΅μ  λ²μ )
```
οΌ  src/App.tsxμ src/App.css νμΌ μ­μ  <br>
οΌοΌ  src/AppContainer.tsx μμ± <br>
οΌοΌ  src ν΄λ νμλ‘ components λλ ν°λ¦¬ μμ± <br>
οΌοΌοΌ  src/components/App.tsx μμ± <br>
οΌοΌοΌ  src/components/InputTodo.tsx μμ± <br>
οΌοΌοΌ  src/components/TodoList.tsx μμ± <br>
οΌοΌοΌ  src/components/TodoListItem.tsx μμ± <br>

<img src="img/components_create.jpg" width="160" height="180"> <br>

βΎ 04-27 : src/AppContainer.tsx β μν μ μ, λ©μλ(μν λ³κ²½ λ©μλ) μ μ, μνλ₯Ό λ³κ²½ν  λ immerλ₯Ό ν΅ν λΆλ³μ± μ¬μ© <br>

```javascript
import produce from 'immer'
import { useState } from 'react'
import App from './components/App'

export type TodoListItemType = {
    no: number;
    todo: string;
    done: boolean;
};

const AppContainer = () => {
    const [todoList, setTodoList] = useState<Array<TodoListItemType>>([
        { no: 1, todo: "reactνμ΅1", done: false },
        { no: 2, todo: "reactνμ΅2", done: false },
        { no: 3, todo: "reactνμ΅3", done: true },
        { no: 4, todo: "reactνμ΅4", done: false }
    ]);

    const addTodo = (todo: string) => {
        let newTodoList = produce(todoList, (draft) => {
            draft.push({ no: new Date().getTime(), todo: todo, done: false });
        });
        setTodoList(newTodoList);
    };

    const deleteTodo = (no: number) => {
        let index = todoList.findIndex((todo) => todo.no === no);
        let newTodoList = produce(todoList, (draft) => {
            draft.splice(index, 1);
        });
        setTodoList(newTodoList);
    };

    const toggleDone = (no: number) => {
        let index = todoList.findIndex((todo) => todo.no === no);
        let newTodoList = produce(todoList, (draft) => {
            draft[index].done = !draft[index].done;
        });
        setTodoList(newTodoList);
    };

    return <App todoList={todoList}
                addTodo={addTodo}
                deleteTodo={deleteTodo}
                toggleDone={toggleDone} />
};

export default AppContainer;
```

βΎ 04-28 : src/components/App.tsx β AppContainerμ Type import λ° μμ± νμ μ μ, InputTodo, TodoList μ»΄ν¬λνΈ μ λ³΄λ₯Ό μμ±μΌλ‘ μ λ¬ <br>
(error: InputTodo, TodoList μ»΄ν¬λνΈλ₯Ό μμ±νμ§ μμΌλ©΄μ μλ¬ λ°μ β μΆν μμ± μμ μΌλ‘ λ¬΄μν  κ²) <br>
```javascript
import React from 'react'
import { TodoListItemType } from '../AppContainer'
import InputTodo from './InputTodo'
import TodoList from './TodoList'

type AppProps = {
    todoList: Array<TodoListItemType>;
    addTodo: (todo: string) => void;
    toggleDone: (no: number) => void;
    deleteTodo: (no: number) => void;
};

const App = (props: AppProps) => {
    return (
        <div className="container">
            <div className="card card-body bg-light">
                <div className="title">:: Todolist App</div>
            </div>
            <div className="card card-default card-borderless">
                <div className="card-body">
                    
                    {/* μμ±μ μ΄μ©ν΄ ν¨μ(λ©μλ)λ₯Ό μ λ¬ */}
                    <InputTodo addTodo={props.addTodo} />
                    <TodoList todoList={props.todoList}
                            toggleDone={props.toggleDone}
                            deleteTodo={props.deleteTodo} />
                </div>
            </div>
        </div>
    );
};

export default App;
```

βΎ 04-29 : src/components/InputTodo.tsx β μμ±μΌλ‘ addTodo λ©μλ μ λ¬ λ°μ μμ±μ νμ μ μ, μ¬μ©μμ μλ ₯ κ°μ λ°μλ΄κΈ° μν΄ μμ²΄μ μΈ todo μν λ³΄μ (μ μ΄ μ»΄ν¬λνΈ κ΅¬μ‘° κ΅¬ν) <br>
```javascript
import React, { useState } from 'react'

type InputTodoProps = {
    addTodo: (todo: string) => void;
};

const InputTodo = (props: InputTodoProps) => {
    const [todo, setTodo] = useState<string>("");

    const addHandler = () => {
        props.addTodo(todo);
        setTodo("");
    };

    const enterInput = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            addHandler();
        };
    };

    const changeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value);
    };

    return (
        <div className="row">
            <div className="col">
                <div className="input-group">
                    <input id="msg" type="text" className="form-control" name="msg"
                        placeholder="ν  μΌμ μ¬κΈ°μ μλ ₯" value={todo}
                        onChange={changeTodo} onKeyUp={enterInput} />
                    <span className="btn btn-primary input-group-addon" onClick={addHandler}>μΆκ°</span>
                </div>
            </div>
        </div>
    );
};

export default InputTodo;
```

βΎ 04-30 : src/components/TodoList.tsx β μμ±μΌλ‘ μ λ¬ λ°μ todoList λ°°μ΄ λ°μ΄ν°λ₯Ό μ΄μ©ν΄ TodoListItem μ»΄ν¬λνΈλ₯Ό λ°λ³΅ λ λλ§ <br>
μμ±μΌλ‘ μ λ¬λ°μ deleteTodo, toggleDone λ©μλλ₯Ό λ€μ TodoListItem μ»΄ν¬λνΈλ‘ μ λ¬ <br>
``` javascript
import React, { useState } from 'react'
import { TodoListItemType } from '../AppContainer'
import TodoListItem from './TodoListItem'

type TodoListProps = {
    todoList: Array<TodoListItemType>;
    toggleDone: (no: number) => void;
    deleteTodo: (no: number) => void;
};

const TodoList = (props: TodoListProps) => {
    let items = props.todoList.map((item) => {
        return <TodoListItem key={item.no} todoItem={item}
                deleteTodo={props.deleteTodo} toggleDone={props.toggleDone} />
    });

    return (
        <div className="row">
            {" "}
            <div className="col">
                <ul className="list-group">{items}</ul>
            </div>
        </div>
    );
};

export default TodoList;
```

βΎ 04-31 : src/components/TodoListItem.tsx β todoListμ μμ΄ν ν κ±΄(todoItem)μ μμ±μΌλ‘ μ λ¬λ°μ λ λλ§. <br>
μ­μ  λ²νΌ, todo ν­λͺ© ν΄λ¦­ μ μ΄λ²€νΈ λ°μνλ©΄ μμ±μΌλ‘ μ λ¬ λ°μ deleteTodo, toggleDone λ©μλ νΈμΆ <br>
``` javascript
import React from 'react'
import { TodoListItemType } from '../AppContainer'

type TodoListItemProps = {
    todoItem: TodoListItemType;
    toggleDone: (no: number) => void;
    deleteTodo: (no: number) => void;
};

const TodoListItem = (props: TodoListItemProps) => {
    let itemClassName = "list-group-item";
    if (props.todoItem.done) itemClassName += " list-group-item-success";

    return (
        <li className={itemClassName}>
            <span className={props.todoItem.done ? "todo-done pointer" : "pointer"}
                onClick={() => props.toggleDone(props.todoItem.no)}>
                {props.todoItem.todo}
                {props.todoItem.done ? " (μλ£)" : ""}
            </span>
            <span className="float-end badge bg-secondary pointer"
                onClick={() => props.deleteTodo(props.todoItem.no)}>μ­μ </span>
        </li>
    );
};

export default TodoListItem;
```

βΎ 04-32 : src/index.css β κΈ°λ³Έ μ€νμΌ μ§μ  <br>
```css
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

.container {
  padding: 10px;
}

.title {
  text-align: center;
  font-weight: bold;
  font-size: 20pt;
}

.todo-done {
  text-decoration: line-through;
}

.pointer {
  cursor: pointer;
}

.paner-borderless {
  border: 0;
  box-shadow: none;
}
```

βΎ 04-33 : src/main.tsx β AppContainer Import <br>
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import AppContainer from './AppContainer'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>,
);

```

<img src="img/todolist.jpg" width="450" height="400"> <br>
<img src="img/todolist_console_check.jpg" width="800" height="350"> <br>
<img src="img/todolist_add_delete_toggle.jpg" width="800" height="350"> <br>