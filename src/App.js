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
  const [searchString, setSearchString] = useState('');

  const displayedFood = foodsArray.filter((food) => {
    return food.name.includes(searchString);
  });

  const removeFood = (name) => {
    const remainingFood = displayedFood.filter((food) => food.name !== name);
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
          return <FoodBox food={food} removeFood={removeFood} />;
        })}
      </Row>
    </div>
  );
}

export default App;
