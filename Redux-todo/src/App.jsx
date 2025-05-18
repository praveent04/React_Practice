/**
 * Main App Component for Redux Todo Application
 * 
 * This is the root component of our Redux Todo application.
 * It imports and renders our main todo components.
 * The component itself is simple as state management is handled through Redux,
 * allowing for a clean separation of concerns.
 */

import { useState } from 'react' // Import useState hook (not used currently)
import reactLogo from './assets/react.svg' // Import React logo (not used currently)
import viteLogo from '/vite.svg' // Import Vite logo (not used currently)
import './App.css' // Import CSS styles for the App component
import AddTodo from './components/addTodo' // Import AddTodo component for adding new todos
import Todos from './components/todos' // Import Todos component for displaying list of todos

/**
 * App Component
 * 
 * Serves as the main container for our todo application.
 * Renders a heading and the two main component parts of our app:
 * - AddTodo: Component to add new todo items
 * - Todos: Component to display and manage existing todos
 * 
 * @returns {JSX.Element} The rendered App component
 */
function App() {
  // No local state needed as we're using Redux for state management

  return (
    <>
      <h1>Vite + React + Redux</h1>
      {/* Component for adding new todos */}
      <AddTodo />
      
      {/* Component for displaying list of todos */}
      <Todos />
    </>
  )
}

export default App
