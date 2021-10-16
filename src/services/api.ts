import axios from 'axios';
import { Todos } from '../store/types/todosTypes';

export const getTodos = () => {
    return axios.get<Array<Todos>>('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.data);
}