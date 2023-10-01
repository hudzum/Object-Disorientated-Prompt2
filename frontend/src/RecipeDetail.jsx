import React, { useState, useEffect } from 'react';
import {Link, useLocation } from "react-router-dom"
import { Document, Page, pdfjs } from 'react-pdf';

function RecipeDetail() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  
  const location = useLocation()
  const {id} = location.state
  useEffect(()=>{
    console.log("location from user", location)
  },[])
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    console.log(id)
    fetch(`http://localhost:8081/Users/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Data not found');
        }
        return res.json();
      })
      .then((item) => {
        setData(item);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  const exportToPdf = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save(); // Trigger PDF export
    }
  };
  
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>Data not found</p>;
  }

  return (
    <div>
      <div className="mt-20 max-w-md mx-auto bg-white p-4 rounded-lg shadow-lg">
        
        
   <div className="max-w-md mx-auto bg-white p-4 rounded-lg shadow-lg">
 <h2 className="text-2xl font-semibold mb-4">{data.title}</h2>
 <div className="grid grid-cols-2 gap-4">
   <div className="col-span-1">
     <p className="font-semibold">Servings:</p>
     <p>{data.servings}</p>
   </div>
   <div className="col-span-1">
     <p className="font-semibold">Baking Time:</p>
     <p>{data.bakingTime} minutes</p>
   </div>
 </div>
 <div className="mt-4">
 <p className="font-semibold">Ingredients:</p>
   <ul className="list-disc pl-6">
     {data.ingredient.split(",").map((ingredient, index) => (
       <li key={index}>{ingredient}</li>
     ))}
   </ul>
 </div>
 <div className="mt-4">
   <p className="font-semibold">Steps:</p>
   <ol className="list-decimal pl-6">
    
     {(data.instructions.split(",")).map((step, index) => (
       <li key={index}>{step}</li>
     ))}
   </ol>
 </div>
 <div className="mt-4">
   <p className="font-semibold">Additional Notes:</p>
   <p>{data.addInfo}</p>
 </div>
 </div>


      </div>
      <button 
        onClick={() => {
          window.open('/your-pdf-export-url', '_blank'); // Replace with your server endpoint to generate and serve the PDF
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 content-center"
      >
        Export as PDF
      </button>
    </div>
  );

}


export default RecipeDetail;