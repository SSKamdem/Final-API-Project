import React, {useEffect, useState} from "react";
import axios from "axios";
import './pages.css';
  
const Hotpot = () => {

    const [Data, setData] = useState({
        strMeal: "",
        strCategory: '',
        strArea: '',
        strInstructions: '',
        strMealThumb: '',
    
      })

      useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Lancashire_hotpot')
          .then(res => {
            console.log('Response from main API: ', res)
            console.log('Hotpot Data: ', res.data)
            let hotpotData = res.data.meals;

            console.log('Hotpot: ', hotpotData)
                        
            setData({ strMeal: hotpotData[0].strMeal, 
              strCategory: hotpotData[0].strCategory, 
              strArea: hotpotData[0].strArea, 
              strInstructions: hotpotData[0].strInstructions, 
              image: hotpotData[0].strMealThumb
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

  export default Hotpot;