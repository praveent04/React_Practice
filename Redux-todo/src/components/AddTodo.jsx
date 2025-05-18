/**
 * AddTodo Component
 * 
 * This component provides a form for users to add new todo items to the application.
 * It uses local React state to manage the form input field and Redux dispatch
 * to add new todos to the global state.
 */
import React, {useState} from 'react' // Import React and useState hook for local state
import {useDispatch} from 'react-redux' // Import useDispatch hook to dispatch actions to Redux
import {addTodo} from '../features/todo/todoSlice' // Import addTodo action creator from our slice

/**
 * AddTodo Component
 * 
 * Provides UI for adding new todo items
 * 
 * @returns {JSX.Element} A form with input field and submit button
 */
function AddTodo() {
    // Local state to manage the input field value
    const [input, setInput] = useState('')
    
    // Get the dispatch function to send actions to Redux store
    const dispatch = useDispatch()

    /**
     * Todo submission handler
     * 
     * Handles the form submission event:
     * 1. Prevents default form submission behavior
     * 2. Dispatches addTodo action with the input text
     * 3. Clears the input field by resetting state
     * 
     * @param {Event} e - Form submission event
     */
    const addTodoHandler = (e) => {
        e.preventDefault() // Prevent form from causing page reload
        
        // Only dispatch if input is not empty
        if (input.trim()) {
            dispatch(addTodo(input)) // Dispatch action to add new todo
            setInput('') // Reset input field
        }
    }
  // Render form with input field and submit button
  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input} // Controlled input - value comes from state
        onChange={(e) => setInput(e.target.value)} // Update state on input change
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo