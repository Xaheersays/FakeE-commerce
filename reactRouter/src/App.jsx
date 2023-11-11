import {React, useState } from 'react'
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from '../src/Components/Layout/Layout.jsx'
import Header from "./Components/Header/Header.jsx";
import All from './Components/Navgs/All.jsx'
import Electronics from './Components/Navgs/Electronics.jsx'
import Jewelery  from './Components/Navgs/Jewelery.jsx'
import Men from './Components/Navgs/Men.jsx'
import Women from './Components/Navgs/Women.jsx'


let categories = ["electronics", "jewelery", "mens-clothing", "womens-clothing"];

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<All />} />
      <Route path={'electronics'} element={<Electronics />} />
      <Route path={'jewelery'} element={<Jewelery />} />
      <Route path={'Men'} element={<Men />} />
      <Route path={'Women'} element={<Women />} />
    </Route>
  )
);


const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;


