require(["gitbook"],function(gitbook){

  var prepareExercise = function($question) {

      var codeSolution = $question.find(".editor").attr('data-solution');
      var codeValidation = $question.find(".editor").attr('data-validation');
      var language = $question.find(".editor").attr('data-language');
      var correct = $question.find(".correct");
      var fail = $question.find(".fail");
      var editor = ace.edit($question.find(".editor").get(0));
      var loadIcon =   $question.find('.load-icon');
      var server = $question.find(".editor").attr('data-server');
      editor.setTheme("ace/theme/dreamweaver");

      if($question.find(".editor").attr('data-gutter') === "true"){
        editor.renderer.setShowGutter(true);
      }else{
        editor.renderer.setShowGutter(false);
      }

      // Submit: test code

      $question.find(".submit").click(function(e) {

          e.preventDefault();

          correct.removeClass('show');
          fail.removeClass('show');

          var textSolution = editor.getValue();

          var obj = {

            "codeValidation": codeValidation,
            "textSolution": textSolution,
            "language": language

          };

          loadIcon.addClass('show');

                $.ajax({
                  url: server || 'http://10.6.128.62:8080/',
                  type: 'POST',
                  data: JSON.stringify(obj),
                  contentType: 'application/json',
                  dataType: 'json',
                  async: true,
                  success: function(msg) {

                      loadIcon.removeClass('show');

                      var message = JSON.parse(msg);

                      if(message.respuesta === true || message.respuesta === "true"){

                        correct.addClass('show');

                      }else{

                        fail.addClass('show');
                      }

                  },
                  error: function(xhr, status, errorThrown ) {

                    loadIcon.removeClass('show');

                    console.log(xhr);
                    console.log(status);
                    console.log(errorThrown);

                    if(status === 'timeout'){

                      alert('Error: Timeout');

                    }else{

                      alert(errorThrown + ": " + xhr.responseText);

                    }

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
