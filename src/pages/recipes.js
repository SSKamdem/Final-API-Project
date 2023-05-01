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
            console.log('Arrabiata Data: ', res.data)
            let arrabiataData = res.data.meals;

            console.log('Arrabiata: ', arrabiataData)
                        
            setData({ strMeal: arrabiataData.strMeal, 
              strCategory: arrabiataData.strCategory, 
              strArea: arrabiataData.strArea, 
              strInstructions: arrabiataData.strInstructions, 
              image: arrabiataData.strMealThumb
             })
          })
          .catch(err => {
            console.log(err);
          })
      }, [])
     
      return (
    
        <div>
          <h1> Meal Name: {Data.strMeal}</h1>
          <p> Category: {Data.strCategory}</p>
          <p> Area of Origin: {Data.strArea}</p>
          <p> Instructions: {Data.strInstructions}</p>
          <img src={Data.image} alt={Data.strMeal} />
        </div>
      );
    
  };

  export default Recipes;