window.onload = function(){

  var submitB = document.getElementById("submit");
  var solutionB = document.getElementById("solution");
  var input = document.getElementById("respuesta");
  var correct = document.getElementById("correct");
  var fail = document.getElementById("fail");
  var solution = input.getAttribute('data-solution');
  var validation = input.getAttribute('data-validation');
  var text = "";
  var regexp = new RegExp(validation, "i");

  submitB.addEventListener("click", function(){

    correct.classList.remove('show');
    fail.classList.remove('show');
    text = input.value;
    input.value = "";
    if(regexp.test(text)){

      correct.classList.add('show');

    }else{

      fail.classList.add('show');
    }

  });

  solutionB.addEventListener("click", function(){

    input.value = solution;

  });


};
