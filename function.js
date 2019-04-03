//funtion from routes/index.js
const variables = { height: 1000, width: 1000, thickness: 8, mounting: false};
const priceFunction = (variables) => {
    var price = variables.height*variables.width*variables.thickness/10000;
    if (variables.mounting)
        return price += 100;
    else return price; 
};
console.log(priceFunction(variables));
const priceF = priceFunction(variables);