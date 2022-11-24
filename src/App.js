import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import { Card, Row, Col, Divider, Input, Button } from 'antd';

function App() {
  const [foodsArray, setFoodsArray] = useState(foods);

  // Search food
  const [searchString, setSearchString] = useState('');

  const displayedFood = foodsArray.filter((food) => {
    return food.name.toLowerCase().includes(searchString);
  });

  // Remove food
  const removeFood = (foodToDelete) => {
    const remainingFood = displayedFood.filter((food) => food !== foodToDelete);
    setFoodsArray(remainingFood);
  };

  return (
    <div className="App">
      <AddFoodForm setFoodsArray={setFoodsArray} />
      <Button> Hide Form / Add New Food </Button>
      <Search searchString={searchString} setSearchString={setSearchString} />
      <Divider>
        <h2>Food List</h2>
      </Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {displayedFood.map((food) => {
          return (
            <FoodBox
              key={food.name + food.calories}
              food={food}
              removeFood={removeFood}
            />
          );
        })}
      </Row>
    </div>
  );
}

export default App;
