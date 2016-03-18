require(["gitbook"],function(gitbook){

  var prepareExercise = function($regexp) {

      var codeSolution = $regexp.find(".respuesta").attr('data-solution');
      var codeValidation = $regexp.find(".respuesta").attr('data-validation');
      var correct = $regexp.find(".correct");
      var fail = $regexp.find(".fail");

      var match = codeValidation.match(/^\/((?:.|\n)*)\/([sxgimy]*)$/);
      var pattern = match[1]; 
      var flags = match[2];
      var regex;
        try {
          regex = XRegExp(pattern,flags);
        }
        catch(e) {
          alert('Error!. Bad Regular expression: /'+pattern+'/ '+e);
          regexp = XRegExp(/.*/);
        }

      // Submit: test code
      $regexp.find(".submit").click(function(e) {
          e.preventDefault();
          var textSolution = $regexp.find(".respuesta").val();

          correct.removeClass('show');
          fail.removeClass('show');

          if(XRegExp.test(textSolution, regex)){

            correct.addClass('show');

          }else{

            fail.addClass('show');
          }

      });

      // Set solution
      $regexp.find(".solution").click(function(e) {
          e.preventDefault();

        $regexp.find(".respuesta").val(codeSolution);
      });
  };

  // Prepare all regexps
  var init = function() {
      gitbook.state.$book.find(".regexp").each(function() {
          prepareExercise($(this));
      });
  };

  gitbook.events.bind("page.change", init);



});
