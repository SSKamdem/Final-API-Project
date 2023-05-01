import React, {useEffect, useState} from "react";
import axios from "axios";
import './pages.css';
  
const Tofu = () => {

    const [Data, setData] = useState({
        strMeal: "",
        strCategory: '',
        strArea: '',
        strInstructions: '',
        strMealThumb: '',
    
      })

      useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Ma_Po_Tofu')
          .then(res => {
            console.log('Response from main API: ', res)
            console.log('Tofu Data: ', res.data)
            let tofuData = res.data.meals;

            console.log('Tofu: ', tofuData)
                        
            setData({ strMeal: tofuData[0].strMeal, 
              strCategory: tofuData[0].strCategory, 
              strArea: tofuData[0].strArea, 
              strInstructions: tofuData[0].strInstructions, 
              image: tofuData[0].strMealThumb
            })
          })
          .catch(err => {
            console.log(err);
          })
      }, [])
     
      return (
    
        <div>
          <h2> {Data.strMeal}</h2>
          <p> Category: {Data.strCategory}</p>
          <p> Area of Origin: {Data.strArea}</p>
          <p> Instructions: {Data.strInstructions}</p>
          <img src={Data.image} alt={Data.strMeal} />
        </div>
      );
    
  };

  export default Tofu;