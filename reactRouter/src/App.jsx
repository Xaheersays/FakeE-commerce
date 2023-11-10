import {React, useState } from 'react'
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from '../src/Components/Layout/Layout.jsx'
import { Header } from './Components/index.js'

const All = () => <div>Home Page</div>;
const Electronics = () => <div>electronics Page</div>;
const Jewelery = () => <div>jewelery Page</div>;
const Men = () => <div>Men Page</div>;
const Women = () => <div>Women Page</div>;

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


