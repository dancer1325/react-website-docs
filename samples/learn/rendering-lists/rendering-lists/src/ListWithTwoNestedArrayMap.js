import {recipes} from './recipes';

// 1.       2 nested .map
/*export default function ListWithTwoNestedArrayMap() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe =>
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map(ingredient =>
              <li key={ingredient}>
                {ingredient}
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}*/


// 2.       2 nested .map / SPLIT | 2 React components
function Recipe({ id, name, ingredients }) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {/* FIRST .map */}
        {ingredients.map(ingredient =>
          <li key={ingredient}>
            {ingredient}
          </li>
        )}
      </ul>
    </div>
  );
}

export default function ListWithTwoNestedArrayMap() {
  return (
    <div>
      <h1>Recipes</h1>
      {/* SECOND / nested | FIRST, .map */}
      {recipes.map(recipe =>
        <Recipe {...recipe} key={recipe.id} />
      )}
    </div>
  );
}
