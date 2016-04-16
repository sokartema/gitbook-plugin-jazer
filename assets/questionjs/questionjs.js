require(["gitbook"],function(gitbook){

  var prepareExercise = function($questionjs) {

      var codeSolution = $questionjs.find(".editor").attr('data-solution');
      var codeValidation = $questionjs.find(".editor").attr('data-validation');
      var correct = $questionjs.find(".correct");
      var fail = $questionjs.find(".fail");
      var editor = ace.edit($questionjs.find(".editor").get(0));
      editor.setTheme("ace/theme/dreamweaver");

      if($questionjs.find(".editor").attr('data-gutter')){
        editor.renderer.setShowGutter(true);
      }else{
        editor.renderer.setShowGutter(false);
      }


      try{

        eval('var test = '+ codeValidation);

      }catch(e){

        alert('Function error = '+ e);

      }

      // Submit: test code
      $questionjs.find(".submit").click(function(e) {
          e.preventDefault();
          var textSolution = editor.getValue();

          var respuesta = test(textSolution);

          correct.removeClass('show');
          fail.removeClass('show');

          if(respuesta){

            correct.addClass('show');

          }else{

            fail.addClass('show');
          }

      });

      // Set solution
      $questionjs.find(".solution").click(function(e) {
        e.preventDefault();

        correct.removeClass('show');
        fail.removeClass('show');

        editor.setValue(codeSolution);
      });
  };

  // Prepare all regexps
  var init = function() {
      gitbook.state.$book.find(".questionjs").each(function() {
          prepareExercise($(this));
      });
  };

  gitbook.events.bind("page.change", init);



});
