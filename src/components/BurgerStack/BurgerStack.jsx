const BurgerStack = (props) => {
  return (
    <div className="Ingredients">
      <h2>Burger Stack</h2>
      <ul>
        {props.ingredients.map((ingredient, index) => (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            <p>{ingredient.name}</p>
            <button onClick={() => props.removeFromBurger(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BurgerStack;
