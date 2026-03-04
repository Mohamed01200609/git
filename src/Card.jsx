const response = await fetch("https://dummyjson.com/recipes");

const data = await response.json();
 const recipes = data.recipes;
 console.log(recipes[0])
 const {name,ingredients,image,preparation} =recipes[0]
const pizzaIngs = ingredients.map(ing => ing.name)



export default function Card() {

  return <div className="flex flex-1 flex-wrap justify-center items-center">
  <div className="border-2 border-amber-500 h-96 w-70 px-10 py-2 rounded-xl content-between">
   <img src={image} alt="" />
  <h1>{name}</h1>
  <ul className="border-2"><li>{pizzaIngs}</li>  </ul>
  
  </div>
  </div>
}
