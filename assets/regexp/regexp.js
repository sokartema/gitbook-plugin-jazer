require(["gitbook"],function(gitbook){

  var prepareExercise = function($regexp) {

      var codeSolution = $regexp.find(".editor").attr('data-solution');
      var codeValidation = $regexp.find(".editor").attr('data-validation');
      var correct = $regexp.find(".correct");
      var fail = $regexp.find(".fail");
      var editor = ace.edit($regexp.find(".editor").get(0));
      editor.setTheme("ace/theme/dreamweaver");

      if($regexp.find(".editor").attr('data-gutter')){
        editor.renderer.setShowGutter(true);
      }else{
        editor.renderer.setShowGutter(false);
      }

        try {
          var match = codeValidation.match(/^\/((?:.|\n)*)\/([sxgimy]*)$/);
          var pattern = match[1];
          var flags = match[2];
          var regex;
          regex = XRegExp(pattern,flags);
        }
        catch(e) {
          alert('Error!. Bad Regular expression: /'+pattern+'/ '+e);
          regexp = XRegExp(/.*/);
        }

      // Submit: test code
      $regexp.find(".submit").click(function(e) {
          e.preventDefault();
          var textSolution = editor.getValue();

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

        correct.removeClass('show');
        fail.removeClass('show');

        editor.setValue(codeSolution);
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
