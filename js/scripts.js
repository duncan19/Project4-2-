var toppingsarray = []
var pizzaarray  = []
var price = 0
$(document).ready(function(){
  $("#pizzamakerform").submit(function(event){
    event.preventDefault()
//getting user's pizza size
  var sizeinput = $("input[name='size']:checked").val();
//getting their toppings
$('input[name="toppings"]:checked').each(function() {
toppingsarray.push(this.value);
console.log(toppingsarray)
});
var userpizza = new Pizza(sizeinput, toppingsarray)
});
});
