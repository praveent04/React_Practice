/**
 * Todos Component
 * 
 * This component displays a list of todo items from the Redux store and 
 * provides UI for removing individual todo items.
 * It demonstrates how to use useSelector to access state and useDispatch
 * to trigger state changes in Redux.
 */
import React from 'react' // Import React
import { useSelector, useDispatch } from 'react-redux' // Import hooks for Redux state and actions
import {removeTodo} from '../features/todo/todoSlice' // Import action creator for removing todos

/**
 * Todos Component
 * 
 * Displays a list of todo items with delete functionality
 * 
 * @returns {JSX.Element} A list of todo items with delete buttons
 */
function Todos() {
    // Access todos array from Redux store using useSelector hook
    // The state parameter represents the entire Redux store state
    // This line extracts just the todos array from that state
    const todos = useSelector(state => state.todos)
    
    // Get dispatch function to send actions to Redux store
    const dispatch = useDispatch()
  // Render the component UI
  return (
    <>
    <div>Todos</div>
    <ul className="list-none">
        {/* Map over todos array to render a list item for each todo */}
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id} // Important: Key prop helps React identify changed items efficiently
          >
            {/* Display the todo text */}
            <div className='text-white'>{todo.text}</div>
            
            {/* Button to remove todo - dispatches removeTodo action with todo.id */}
            <button
             onClick={() => dispatch(removeTodo(todo.id))} // Dispatch action with todo ID when clicked
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>    </>
  )
}

// Export the Todos component as the default export
export default Todos