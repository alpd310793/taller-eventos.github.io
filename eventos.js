document.addEventListener('DOMContentLoaded', function () {


   
    
let div = document.getElementById("primerDiv");
div.addEventListener("click", function() {
    alert("Hola! Soy el div");
});

let button = document.getElementById("button");
button.addEventListener("click", function(x){
    alert("Hola!");
    x.stopPropagation();
}); 

});
