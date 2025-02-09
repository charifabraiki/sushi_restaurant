import axios from 'axios';
import { useState, useEffect } from 'react';

const ListFood = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
   
    axios.get('http://localhost:5000/foods')
      .then((response) => {
        
        setFoods(response.db);
      })
      .catch((error) => {
       
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div>
      <h1>List Food </h1>
      <ul>
        {foods.map((food) => (
          <li key={food.id}>{food.name} - ${food.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListFood;
