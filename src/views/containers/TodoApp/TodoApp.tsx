import React, {useState, useEffect} from 'react';
import { Button } from '../../components/Button/button';
import { TodoFormProps,  TodoListProps, Todo} from './types';
import { AddTodo as AddTodoSave, getTodos, deleteTodo } from './service';


const TodoApp = () =>   {
    const [todos, setTodos] = useState<Array<Todo>>([]);
    const [todo, setTodo] = useState<string>("");

    const addTodo = () =>    {
        AddTodoSave({task: todo});
    };

    const handleTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value);
    };

    const deleteTodo = (id?: string) =>  {
        deleteTodo(id);
        getTodos().then((result) => {
            console.log(result);
            let data = result.data

            setTodos(data);
        });
        // const newTodoList = todos.filter((data, index) => index !== id);
        // setTodos(newTodoList);
    };

    useEffect(() => {
        getTodos().then((result) => {
            console.log(result);
            let data = result.data

            setTodos(data);
        });
    });

    return(
        <div>
            <TodoForm todo={todo} addTodo={addTodo} handleTodoChange={handleTodoChange}/>
            <TodolList todoList={todos} deleteTodo={deleteTodo} />
        </div>
    );
};

export const TodoForm =(props: TodoFormProps) =>    {
    return(
        <div>
            <input type="todo" value={props.todo} onChange={props.handleTodoChange}/>
            {/* <button onClick={props.addTodo}>Add</button> */}

            <Button
                onClick={props.addTodo}
                label={"ADD"}
            />
        </div>
    )
}

const TodolList = (props: TodoListProps) => {
    return(
        <div>
            {props.todoList.map((data, index) => (
                <div>{data.task} 
                    <Button
                    onClick={() => props.deleteTodo(data.id)}
                    label={"REMOVE"}
                    />
                    {/* <button onClick={() => props.deleteTodo(index)}>REMOVE</button> */}
                </div>
            ))}

            {/* <Button
                label={"REMOVE"}
            /> */}
        </div>
    );
};

export default TodoApp;