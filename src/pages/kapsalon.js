import React, {useEffect, useState} from "react";
import axios from "axios";
import './pages.css';

//Kapsalon Page  
const Kapsalon = () => {

    const [Data, setData] = useState({
        strMeal: "",
        strCategory: '',
        strArea: '',
        strInstructions: '',
        strMealThumb: '',
    
      })

      useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Kapsalon')
          .then(res => {
            console.log('Response from main API: ', res)
            console.log('Kapsalon Data: ', res.data)
            let kapData = res.data.meals;

            console.log('Kapsalon: ', kapData)
                        
            setData({ strMeal: kapData[0].strMeal, 
              strCategory: kapData[0].strCategory, 
              strArea: kapData[0].strArea, 
              strInstructions: kapData[0].strInstructions, 
              image: kapData[0].strMealThumb
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

  export default Kapsalon;