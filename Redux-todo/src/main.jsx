/**
 * Application Entry Point
 * 
 * This file serves as the entry point for our React application.
 * It renders the root App component inside the Redux Provider to enable
 * Redux state management throughout the application.
 */

import { StrictMode } from 'react' // Import StrictMode (not used currently)
import { createRoot } from 'react-dom/client' // Import createRoot for React 18's concurrent rendering
import './index.css' // Import global styles
import App from './App.jsx' // Import the root App component
import { Provider } from 'react-redux' // Import Redux Provider to provide store to all components
import { store } from './app/store.js' // Import the configured Redux store

/**
 * Application Rendering
 * 
 * Using React 18's createRoot API to render our application.
 * We wrap the App component in Redux's Provider component to make the Redux store
 * available to all components in our application. This enables components to:
 * - Access state using useSelector hook
 * - Dispatch actions using useDispatch hook
 * 
 * The provider accepts a store prop which is our configured Redux store.
 */
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
