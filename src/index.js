import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SecondPage from './pages/SecondPage';
import LeaderboardPage from './pages/LeaderboardPage';
import PlayerAnalyticsPage from './pages/PlayerAnalyticsPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "SecondPage",
    element: <SecondPage />,
  },
  {
    path: "LeaderboardPage",
    element: <LeaderboardPage />,
  },
  {
    path: "PlayerAnalyticsPage",
    element: <PlayerAnalyticsPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
