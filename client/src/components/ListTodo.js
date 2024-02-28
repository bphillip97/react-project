import React, {useEffect, useState} from 'react';
import EditTodo from './EditTodo';

const ListTodo = () => {

    const [todos, setTodos] = useState([]);

    //Delete function 
    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            });

            setTodos(todos.filter(todo => todo.todo_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    }
    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos");
            const jsonData = await response.json();

            setTodos(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() =>{
        getTodos();
    }, []);

    return (
   <>
    <table class="table mt-5 text-center">
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    {todos.map(todos =>{
       <tr key={todos.todo_id}>
        <td>{todos.description}</td>
            <td>
                <EditTodo/>
            </td>
            <td>
                <button className="btn btn-danger" 
                onClick={() => deleteTodo(todos.todo_id)}
                >
                    Delete
                
                </button>
            </td>
        </tr>
    })}
    <tbody>
    </tbody>
  </table>
   </>
)
}
export default ListTodo;