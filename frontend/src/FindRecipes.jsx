import React, { useState, useEffect } from 'react';
import RecipeDetail from './RecipeDetail';
import {Link} from "react-router-dom"
function FindRecipes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/Users")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  
  return (
    <div>
    <div>
      <h2 className="text-2xl font-semibold mb-4">Other Recipes</h2>
      <ul className="list-disc pl-6">
        {data.map((item, index) => (
          <li key={index} className="mb-2">

            <div className="bg-white shadow-md rounded p-4">
              
            <div
                className="text-blue-500 hover:underline"
              >
                <Link to = '/detail' state= {{id: index+15}}>
                {item.title}
                </Link>
                
              </div>
              <p className="text-gray-600">{item.servings} Servings</p>
              <p className="text-gray-600">{item.bakingTime} min Baking Time</p>
              <p className="text-gray-700 mt-2">{item.addInfo}</p>

            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default FindRecipes;
