function cl(data) {
  console.log(data);
}

function getMyFood() {
  fetch("http://localhost:8088/food")
    .then(data => data.json())
    .then(foodData => {
      cl(foodData);
      foodData.forEach(foodItem => {
        fetch(
          `https://world.openfoodfacts.org/api/v0/product/${
            foodItem.barcode
          }.json`
        )
          .then(foodFromApi => foodFromApi.json())
          .then(foodItemFromApi => {
            if (foodItemFromApi.product.ingredients_text) {
              foodItem.ingredients = foodItemFromApi.product.ingredients_text;
            } else {
              foodItem.ingredients = "ingredients not listed";
            }
            foodItem.ingredients = foodItemFromApi.product.ingredients_text;
            document.querySelector("#food-list").innerHTML += foodItem;
          });
      });
    });
}

function createFoodComponent(foodObj) {
  return `
  <h2>${foodObj.name}</h2>
  <p><strong>ingredients:</strong> ${foodObj.ingredients}</p>
  `;
}
