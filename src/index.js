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
import Progress from "./page/progress/Progress";
import Survey from "./page/survey/Survey";
import TestAnxiety from "./page/testanxiety/TestAnxiety";
import TestBipolar from "./page/testbipolar/TestBipolar";
import TestDepression from "./page/testdepression/TestDepression";
import TestOCD from "./page/testocd/TestOCD";
import TestPanic from "./page/testpanic/TestPanic";
import TestParanoia from "./page/testparanoia/TestParanoia";

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
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
        path: "/chat",
        element: <Chat/>
    }, {
        path: "/progress",
        element: <Progress/>
    }, {
        path: "/survey",
        element: <Survey/>
    }, {
        path: "/testanxiety",
        element: <TestAnxiety/>
    }, {
        path: "/testbipolar",
        element: <TestBipolar/>
    }, {
        path: "/testdepression",
        element: <TestDepression/>
    }, {
        path: "/testocd",
        element: <TestOCD/>
    }, {
        path: "/testpanic",
        element: <TestPanic/>
    }, {
        path: "/testparanoia",
        element: <TestParanoia/>
    }
]);


root.render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
