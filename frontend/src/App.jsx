import React, { useState, useEffect } from 'react'
import RecipeForm from './RecipeForm';
import FindRecipes from './FindRecipes';
import RecipeDetail from './RecipeDetail';
import PastryCanvas from './canvas/Pastry';
import Hero from './Hero';
import {Route, Routes} from "react-router-dom"
function App() {


  return (
    <Routes>
      <Route path = "/" element = {<Hero/>}/>
      <Route path = "/find" element={<FindRecipes/>}/>
      <Route path = "/form" element = {<RecipeForm/>}/>
      <Route path = "/detail" element ={<RecipeDetail/>}/>
    </Routes>
   
  )
}

export default App
