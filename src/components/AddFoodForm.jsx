import React, { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';

function AddFoodForm({ setFoodsArray }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    setFoodsArray((currentState) => {
      const copy = [...currentState];
      copy.unshift({ name, image, calories, servings });
      return copy;
    });
    setName('');
    setImage('');
    setCalories(0);
    setServings(0);
  };

  const handleNameChange = ({ target: { value } }) => {
    setName(value);
  };
  const handleImageChange = ({ target: { value } }) => {
    setImage(value);
  };
  const handleCaloriesChange = ({ target: { value } }) => {
    setCalories(value);
  };
  const handleServingsChange = ({ target: { value } }) => {
    setServings(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={handleNameChange} />

      <label>Image</label>
      <Input value={image} type="text" onChange={handleImageChange} />

      <label>Calories</label>
      <Input value={calories} type="text" onChange={handleCaloriesChange} />

      <label>Servings</label>
      <Input value={servings} type="text" onChange={handleServingsChange} />

      <button type="submit"> Create </button>
    </form>
  );
}

export default AddFoodForm;
