// import React from 'react'
// import { TodoListItemType } from '../AppContainer'
import InputTodo from './InputTodo'
import TodoList from './TodoList'

// type AppProps = {
//     todoList: Array<TodoListItemType>;
//     addTodo: (todo: string) => void;
//     toggleDone: (no: number) => void;
//     deleteTodo: (no: number) => void;
// };

// const App = (props: AppProps) => {
const App = () => {
    return (
        <div className="container">
            <div className="card card-body bg-light">
                <div className="title">:: Todolist App</div>
            </div>
            <div className="card card-default card-borderless">
                <div className="card-body">
                    <InputTodo />
                    <TodoList />
                </div>
            </div>
        </div>
    );
};

export default App;