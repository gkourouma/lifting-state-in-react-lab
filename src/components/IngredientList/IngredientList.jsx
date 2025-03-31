const IngredientList = (props) => {
  return (
    <div className="Ingredients">
      <h2>Ingredients</h2>
      <ul>
        {props.ingredients.map((ingredient, index) => (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            <p>{ingredient.name}</p>
            <button onClick={() => props.addToBurger(ingredient)}>+</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;
