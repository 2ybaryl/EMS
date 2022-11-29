import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Attendance from './components/Pages/Attendance'
import Target from './components/Pages/Target';
import MyAccount from "./components/Pages/MyAccount";
import DailyWorking from "./components/Pages/DailyWorking";
import WeeklyPlan from "./components/Pages/WeeklyPlan";
import Request from './components/Pages/Request';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
  <Routes>
      <Route path="/" element={<App />} />
      <Route path="target" element={<Target/>} />
      <Route path = "attendance" element = {<Attendance/>}/>
      <Route path = "myAccount" element = {<MyAccount/>}></Route>
      <Route path = "request" element = {<Request/>}></Route>
      <Route path = "dailyWorking" element = {<DailyWorking/>}></Route>
      <Route path = "weeklyPlan" element = {<WeeklyPlan/>}></Route>
  </Routes>
  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
