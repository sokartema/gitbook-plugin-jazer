window.onload = function(){

  var submitB = document.getElementById("submit");
  var solutionB = document.getElementById("solution");
  var input = document.getElementById("respuesta");
  var solution = input.getAttribute('data-solution');
  var validation = input.getAttribute('data-validation');
  var text = "";
  var regexp = new RegExp(validation, "i");

  submitB.addEventListener("click", function(){

    text = input.value;
    input.value = "";
    if(regexp.test(text)){
      console.log("Correcto!");

    }else{

      console.log("Incorrecto!");
    }

  });

  solutionB.addEventListener("click", function(){

    input.value = solution;

  });


};
