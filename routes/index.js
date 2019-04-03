var express = require('express');
var router = express.Router();

var variables = { height: 1000, width: 1000, thickness: 6, mounting: false};
const priceF = (variables) => {
    var price = variables.height*variables.width*variables.thickness/10000;
    if (variables.mounting)
        return price += 100;
    else return price; 
};
//console.log(priceF(variables));

router.get('/', function(req, res, next) {
  res.render('form')
});

router.post('/index', function(req, res, next){
  if(req.body.height != '')
    variables.height = req.body.height;
  if(req.body.width != '')
    variables.width = req.body.width;
  if(req.body.thickness != '')
    variables.thickness = req.body.thickness;
    variables.mounting = req.body.mounting;
  console.log(variables);
  res.render('index', { price: priceF(variables), title: 'Glassamera Evaluation Task', variables: variables })
});
module.exports = router;
