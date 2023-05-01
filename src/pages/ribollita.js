import React, {useEffect, useState} from "react";
import axios from "axios";
import './pages.css';

//Ribollita Page
const Ribollita = () => {

    const [Data, setData] = useState({
        strMeal: "",
        strCategory: '',
        strArea: '',
        strInstructions: '',
        strMealThumb: '',
    
      })

      useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Ribollita')
          .then(res => {
            console.log('Response from main API: ', res)
            console.log('Ribollita Data: ', res.data)
            let riboData = res.data.meals;

            console.log('Ribollita: ', riboData)
                        
            setData({ strMeal: riboData[0].strMeal, 
              strCategory: riboData[0].strCategory, 
              strArea: riboData[0].strArea, 
              strInstructions: riboData[0].strInstructions, 
              image: riboData[0].strMealThumb
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

  export default Ribollita;