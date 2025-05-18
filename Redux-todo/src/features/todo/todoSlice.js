import { createSlice, nanoid } from "@reduxjs/toolkit";

/**
 * Redux Slice for Todo Management
 * 
 * This file defines the Redux slice for managing todo items in our lapplication.
 * It uses Redux Toolkit's createSlice API which simplifies Redux code by:
 * - Automatically generating action creators
 * - Setting up immutable updates using Immer under the hood
 * - Generating action types based on the slice name
 */

/**
 * Initial state for the todo slice
 * 
 * Contains an array of todo items, each with:
 * - id: Unique identifier for the todo
 * - text: The todo item's content
 */
const initialState = {
    todos: [{
        id: 1,
        text: "Learn Redux Toolkit",
    }]
}

/**
 * Creating the todo slice
 * 
 * The createSlice function generates a slice of our Redux store that includes:
 * - Reducer functions for modifying the state
 * - Action creators that dispatch those reducers
 */
export const todoSlice = createSlice({
    // Name of the slice - used as a prefix for generated action types
    name: 'todo',
    
    // The initial state defined above
    initialState,
    
    // Reducer functions that define how state can be updated
    reducers:{
        /**
         * addTodo reducer
         * 
         * Adds a new todo item to the state
         * 
         * @param {Object} state - Current state (automatically provided by RTK)
         * @param {Object} action - Action object with payload containing todo text
         * 
         * Note: Even though we're "mutating" state directly with push(),
         * RTK uses Immer library under the hood which converts these operations
         * to immutable updates, so the state is not actually mutated.
         */
        addTodo: (state, action) =>{
            const todo = {
                // Generate a unique ID using nanoid()
                id: nanoid(),
                // The text comes from action.payload
                text: action.payload,
            }
            // Add the new todo to the array
            state.todos.push(todo);
        },
        
        /**
         * removeTodo reducer
         * 
         * Removes a todo item from the state
         * 
         * @param {Object} state - Current state (automatically provided by RTK)
         * @param {Object} action - Action object with payload containing todo ID to remove
         */
        removeTodo: (state, action) => {
            // Filter out the todo with the ID that matches the payload
            state.todos = state.todos.filter((todo)=>todo.id != action.payload);
        },
    }
})

// Export the auto-generated action creators
export const {addTodo, removeTodo} = todoSlice.actions;

// Export the reducer function for the configureStore call
export default todoSlice.reducer;