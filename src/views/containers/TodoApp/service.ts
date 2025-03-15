import axios from 'axios';
import { Todo } from './types';

export const AddTodo = (todo: Todo) => {
    axios.post('http://localhost:3000/task', todo);
};

export const getTodos = () => {
    return axios.get('http://localhost:3000/task');
}

export const deleteTodo = (id: string) =>   {
    axios.delete('http://localhost:3000/task/' + id);
}