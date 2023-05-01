import React, {useEffect, useState} from "react";
import axios from "axios";
import './pages.css';
  
const Arrabiata = () => {

    const [Data, setData] = useState({
        strMeal: "",
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
                        
            setData({ strMeal: arrabiataData[0].strMeal, 
              strCategory: arrabiataData[0].strCategory, 
              strArea: arrabiataData[0].strArea, 
              strInstructions: arrabiataData[0].strInstructions, 
              image: arrabiataData[0].strMealThumb
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

  export default Arrabiata;