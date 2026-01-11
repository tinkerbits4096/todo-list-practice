import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import { React, useState } from "react";

function App() {
    const onDelete = ( todo ) => {
        console.log( "I am onDelete of todo", todo );
        setTodos(todos.filter((e) => {
            return e !== todo;
        }))
    }

    const [todos, setTodos] = useState([
        {
            sno: 1,
            title: "Practice React",
            description: "Watch React tutorial videos"
        },
        {
            sno: 2,
            title: "Practice more React",
            description: "Watch more React tutorial videos"
        },
        {
            sno: 3,
            title: "Practice even more React",
            description: "Watch even more React tutorial videos"
        }
    ]);

    return (
        <>
            <Header title="My Todos List" searchBar={ true }/>
            <AddTodo />
            <Todos todos={ todos } onDelete={ onDelete }/>
            <Footer/>
        </>
    );
}

export default App;
