var toppingsarray = []
var price = 0
$(document).ready(function(){
  $("#pizzamakerform").submit(function(event){
    event.preventDefault()
//getting user's pizza size
  var sizeinput = $("input[name='size']:checked").val();
//getting their toppings
$('input[name="toppings"]:checked').each(function() {
toppingsarray.push(this.value);
alert(toppingsarray)
});
// if (toppingsarray.legnth === 1){
//   var price = 0 + 1
//   console.log(price);
// }
// else if (toppingsarray.legnth === 2){
//   var price = 0 + 2
// console.log(price);
// }
// else if (toppingsarray.legnth === 3){
//   var price = 0 + 3
// console.log(price);
// }
// else if (toppingsarray.legnth === 4){
//   var price = 0 + 4
// console.log(price);
// }
// else{
// console.log(price);
// }
});
});
