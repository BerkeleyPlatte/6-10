function cl(data) {
    console.log(data);
}

fetch("http://localhost:8088/food")
.then ( data => data.json())
.then ( foodData => {
    cl(foodData);
})