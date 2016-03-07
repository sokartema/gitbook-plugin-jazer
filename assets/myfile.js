window.onload = function(){

  var submit = document.getElementById("submit");
  var solution = document.getElementById("solution");
  var input = document.getElementById("respuesta");
  var text = "";

  submit.addEventListener("click", function(){

    text = input.value;
    input.value = "";

  });

  solution.addEventListener("click", function(){

    console.log("Solution");
  });


};
