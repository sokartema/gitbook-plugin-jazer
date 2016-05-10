require(["gitbook"],function(gitbook){

  var prepareExercise = function($question) {

      var codeSolution = $question.find(".editor").attr('data-solution');
      var codeValidation = $question.find(".editor").attr('data-validation');
      var language = $question.find(".editor").attr('data-language');
      var correct = $question.find(".correct");
      var fail = $question.find(".fail");
      var editor = ace.edit($question.find(".editor").get(0));
      editor.setTheme("ace/theme/dreamweaver");

      if($question.find(".editor").attr('data-gutter') === "true"){
        editor.renderer.setShowGutter(true);
      }else{
        editor.renderer.setShowGutter(false);
      }


      // Submit: test code

      $question.find(".submit").click(function(e) {

          e.preventDefault();

          var textSolution = editor.getValue();

          var obj = {

            "codeValidation": codeValidation,
            "textSolution": textSolution,
            "language": language

          };

                $.ajax({
                  url: 'http://127.0.0.1:8888/',
                  type: 'POST',
                  data: JSON.stringify(obj),
                  contentType: 'application/json',
                  dataType: 'json',
                  async: true,
                  success: function(msg) {

                      var message = JSON.parse(msg);

                      correct.removeClass('show');
                      fail.removeClass('show');

                      if(message.respuesta){

                        correct.addClass('show');

                      }else{

                        fail.addClass('show');
                      }

                  },
                  error: function(xhr, status, errorThrown ) {
                    
                    alert(errorThrown + ": " + xhr.responseText);

                  }

                });


      });

      // Set solution
      $question.find(".solution").click(function(e) {
        e.preventDefault();

        correct.removeClass('show');
        fail.removeClass('show');

        editor.setValue(codeSolution);
      });
  };

  // Prepare all regexps
  var init = function() {
      gitbook.state.$book.find(".question").each(function() {
          prepareExercise($(this));
      });
  };

  gitbook.events.bind("page.change", init);



});
