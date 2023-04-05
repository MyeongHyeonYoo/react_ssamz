import React, { useContext, useState } from 'react'
// import { TodoListItemType } from '../AppContainer'
import TodoContext from '../TodoContext'
import TodoListItem from './TodoListItem'

// type TodoListProps = {
//     todoList: Array<TodoListItemType>;
//     toggleDone: (no: number) => void;
//     deleteTodo: (no: number) => void;
// };

// const TodoList = (props: TodoListProps) => {
const TodoList = () => {
    const value = useContext(TodoContext);

    // let items = props.todoList.map((item) => {
    let items = value?.state.todoList.map((item) => {
        return <TodoListItem key={item.no} todoItem={item}
                // deleteTodo={props.deleteTodo} toggleDone={props.toggleDone} />
                deleteTodo={value?.actions.deleteTodo} 
                toggleDone={value?.actions.toggleDone} />
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