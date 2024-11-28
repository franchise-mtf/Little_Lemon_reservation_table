import React from "react";
import recipes from "../data/recipes";

export default function Menu() {
  function test() {
    console.log(recipes);
  }
  test();
  return (
    <section className="menu-section">
      <div className="card-special">
        <h2>This week is special </h2>
        <button>Order menu</button>
      </div>

      <div className="card-container">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="card">
            <img src={recipe.image} alt="recipe" />
            <div className="card-content">
              <h3>{recipe.title}</h3>
              <p>{recipe.price}</p>

              <p>{recipe.description}</p>
              <button className="orderBtn">Order now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
