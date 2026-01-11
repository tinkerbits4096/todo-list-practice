import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import React, { useState, useEffect } from "react";

function App() {
    let initTodo;
    if(localStorage.getItem("todos") === null) {
        initTodo = [];
    }
    else {
        initTodo = JSON.parse(localStorage.getItem("todos"));
    }
    const onDelete = ( todo ) => {
        console.log( "I am onDelete of todo", todo );
        setTodos(todos.filter((e) => {
            return e !== todo;
        }));
    }

    const addTodo = (title, desc) => {
        let sno;
        if (todos.length === 0) {
            sno = 1;
        } else {
            sno = todos[todos.length - 1].sno + 1;
        }
        const myTodos = {
            sno: sno,
            title: title,
            desc: desc
        }
        setTodos([...todos, myTodos]);
        localStorage.getItem("todos", JSON.stringify(todos));
    }


    const [todos, setTodos] = useState(initTodo);
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    return (
        <>
            <Header title="My Todos List" searchBar={ true }/>
            <AddTodo addTodo={addTodo}/>
            <Todos todos={ todos } onDelete={ onDelete }/>
            <Footer/>
        </>
    );
}

export default App;
