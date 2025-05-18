/**
 * Redux Store Configuration
 * 
 * This file sets up the Redux store for our application using Redux Toolkit's
 * configureStore API. The store is the central hub that holds the application state
 * and handles dispatched actions through reducers.
 */

import {configureStore} from '@reduxjs/toolkit'; // Import configureStore function from Redux Toolkit
import todoReducer from '../features/todo/todoSlice' // Import the todo reducer from our slice

/**
 * Redux Store Configuration
 * 
 * configureStore provides a simplified way to create a Redux store with good defaults:
 * - Automatically sets up the Redux DevTools extension
 * - Automatically adds thunk middleware for async actions
 * - Automatically combines reducers if multiple are provided
 * - Sets up middleware for better development experience
 *
 * In this simple application, we only have one reducer (todoReducer).
 * In larger applications, we could add multiple reducers using an object:
 * { todos: todoReducer, users: userReducer, etc. }
 */
export const store = configureStore({
    // Since we're providing a single reducer, it becomes the root reducer of the store
    reducer: todoReducer
})