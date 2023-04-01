import React from 'react'
import { TodoListItemType } from './App'
import TodoListItemBody from './TodoListItemBody'
import TodoListItemDeleteButton from './TodoListItemDeleteButton'

type Props = {
    todoListItem: TodoListItemType;
    deleteTodo: (id: number) => void;
};

const TodoListItem = (props: Props) => {
    console.log("## TodoListItem");
    return (
        // <li>
        //     <span>{props.todoListItem.todo}</span>&nbsp;&nbsp;&nbsp;
        //     <span style={{ cursor: "pointer", color: "blue" }}
        //         onClick={() => props.deleteTodo(props.todoListItem.id)}>
        //         삭제
        //     </span>
        // </li>
        <li>
            <TodoListItemBody todoListItem={props.todoListItem} />
            &nbsp;&nbsp;&nbsp;
            <TodoListItemDeleteButton deleteTodo={props.deleteTodo} id={props.todoListItem.id} />
        </li>
    );
};

// export default TodoListItme;
// export default React.memo(TodoListItme, (prevProps, nextProps) => {
//     return prevProps.todoListItem === nextProps.todoListItem;
// });

export default React.memo(TodoListItem);