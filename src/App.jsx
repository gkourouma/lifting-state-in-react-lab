import IngredientList from './components/IngredientList/IngredientList';
import BurgerStack from './components/BurgerStack/BurgerStack';
import './App.css';
import { useState } from 'react';

const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

const App = () => {
  const [stack,setStack] = useState([])
  

  const addToBurger = (ingredient) => {
    setStack([...stack, ingredient]) //will place the ingredients on the stack display
  }

  const removeFromBurger = (index) => {
    const updatedStack = stack.filter((ingredient, i) => {
      return i !== index
    })
    setStack(updatedStack)
  }

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
      <IngredientList ingredients = {availableIngredients} addToBurger = {addToBurger} />
      <BurgerStack ingredients = {stack} removeFromBurger = {removeFromBurger} />
      </section>
    </main>
  );
};

export default App;
