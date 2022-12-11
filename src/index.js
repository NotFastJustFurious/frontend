import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './page/home/App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./page/login/Login";
import Register from "./page/register/Register";
import Profile from "./page/profile/Profile";
import Chat from "./page/chat/Chat";
import EditProfile from "./page/profile/EditProfile";
import FeedBack from './page/feedBack/FeedBack';
import FindDoctor from './page/findDoctor/FindDoctor';
import Surveys from './page/mainsurvey/Surveys';

const root = ReactDOM.createRoot(document.getElementById('root'));
let routes = [
    {
        path: "/",
        element: <App/>
    }, {
        path: "/login",
        element: <Login/>
    }, {
        path: "/register",
        element: <Register/>
    }, {
        path: "/profile",
        element: <Profile/>
    }, {
        path: "/editprofile",
        element: <EditProfile/>
    }, {
        path: "/chat",
        element: <Chat/>
    }, {
        path: "/feedBack",
        element: <FeedBack/>
    }, {
        path: "/findDoctor",
        element: <FindDoctor/>
    }, {
        path: "/mainsurvey",
        element: <Surveys/>
    }
];

const router = createBrowserRouter(routes);


root.render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();