import { createSlice, nanoid, removeListener } from "@reduxjs/toolkit";

//first we make the initial State of the store.
const initialState = {
    todos: [{id:1, text:"Hello World"}]
}

//now we will create slice(reducer ka bada version)
//slices have names
//reducers have properties and functions
//Syntax: when ever we will access the addTodo function we will get access of two things state and actions just like "e" in event
//state: will give state values a that point of instance. i.e. todos here (one, two or many)
//action: it gets us some values it can be todo, id or any thing received
//Now push the created todo in the state for the addTodo reducer similarly write functionality for removeTodo using id from action
//similarly for updateTodo functionality
//export the reducer functionalities because they will be used individualy.(because they will be used as components)
//we have also to export reducer as a block also.
//Now tell the store about the created reducers which can change them
export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers: {
        addTodo: (state, action)=>{
            const todo = {
                id:nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter((val)=>{
                return val.id!=action.payload //here payload is id
            })
        },
        updateTodo: (state, action)=>{
            let todoFind = state.todos.find((val)=> val.id===action.payload.id);
            state.todos = state.todos.filter((val)=>{
                return val.id!=action.payload //here payload is id
            })
            todoFind.text=action.payload.text;
            state.todos.push(todoFind);
        }
    }
});


export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;

export default todoSlice.reducer;
