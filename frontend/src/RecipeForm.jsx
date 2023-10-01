import React, { useState } from 'react';

function RecipeForm() {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: [''],
    steps: [''],
    servings: '',
    bakingTime: '',
    addInfo: '',
  });

  const handleChange = (e, index, type) => {
    const { name, value } = e.target;
    if (type === 'ingredients') {
      const updatedIngredients = [...formData.ingredients];
      updatedIngredients[index] = value;
      setFormData({ ...formData, ingredients: updatedIngredients });
    } else if (type === 'steps') {
      const updatedSteps = [...formData.steps];
      updatedSteps[index] = value;
      setFormData({ ...formData, steps: updatedSteps });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAddItem = (type) => {
    if (type === 'ingredients') {
      setFormData({ ...formData, ingredients: [...formData.ingredients, ''] });
    } else if (type === 'steps') {
      setFormData({ ...formData, steps: [...formData.steps, ''] });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    
    const newFormData ={
      title: formData.title,
      ingredients: formData.ingredients.join(", "),
      steps: formData.steps.join(),
      servings: formData.servings,
      bakingTime: formData.bakingTime,
      AddInfo: formData.addInfo,
    }
    console.log(newFormData)
    try {
      
      console.log(formData)
      const response = await fetch('http://localhost:8081/addUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify(newFormData),
       
      });

      if (response.ok) {
        // Optionally, clear the form after successful submission
        setFormData({
          title: '',
          ingredients: '',
          steps: '',
          servings: '',
          bakingTime: '',
          AddInfo: '',
        });

        console.log('Recipe added successfully');
      } else {
        console.error('Error adding recipe:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding recipe:', error);
    }
  };



  return (
    <div className="w-full max-w-md mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Title:</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="title"
            value={formData.title}
            onChange={(e) => handleChange(e, null, 'title')}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Ingredients:</label>
          {formData.ingredients.map((ingredient, index) => (
            <div key={index} className="mb-2">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="ingredient"
                value={ingredient}
                onChange={(e) => handleChange(e, index, 'ingredients')}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() => handleAddItem('ingredients')}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Ingredient
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Steps:</label>
          {formData.steps.map((step, index) => (
            <div key={index} className="mb-2">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="step"
                value={step}
                onChange={(e) => handleChange(e, index, 'steps')}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() => handleAddItem('steps')}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Step
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Servings:</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="servings"
            value={formData.servings}
            onChange={(e) => handleChange(e, null, 'servings')}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Baking Time:</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="bakingTime"
            value={formData.bakingTime}
            onChange={(e) => handleChange(e, null, 'bakingTime')}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Additional Notes:</label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="addInfo"
            value={formData.addInfo}
            onChange={(e) => handleChange(e, null, 'addInfo')}
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>

  );

          }
export default RecipeForm;
