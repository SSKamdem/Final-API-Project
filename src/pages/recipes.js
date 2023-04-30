import React, {useEffect, useState} from "react";
import axios from "axios";
  
const Recipes = () => {

    const [Data, setData] = useState({
        strMeal: '',
        strCategory: '',
        strArea: '',
        strInstructions: '',
        strMealThumb: '',
    
    
      })
      useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
          .then(res => {
            console.log('Response from main API: ', res)
            console.log('Arrabiata Data ', res.data)
            let index = Math.floor(Math.random()* res.data.length)
            let arrabiataData = res.data[index];
            
            console.log('Arrabiata: ', arrabiataData)
            
            setData({ name: arrabiataData.strMeal, 
              category: arrabiataData.strCategory, 
              area: arrabiataData.strArea, 
              instructions: arrabiataData.strInstructions, 
              image: arrabiataData.strMealThumb
             })
          })
          .catch(err => {
            console.log(err);
          })
      }, [])
     
      return (
    
        <div>
          <h1> Meal Name: {Data.name}</h1>
          <h1> Category: {Data.category}</h1>
          <h1> Area of Origin: {Data.area}</h1>
          <h1> Instructions: {Data.instructions}</h1>
          <img src={Data.image} alt={Data.name} />
        </div>
      );
    
  };

  export default Recipes;