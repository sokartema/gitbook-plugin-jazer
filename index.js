module.exports = {

  blocks: {

    tag1: {

      process: function(block){

        return "Hello this is the block";

      }

    }


  },
  filters: {

    fullName: function(firstName, lastName, kwargs){

      var name = firstName + ' ' + lastName;

      if (kwargs.man) name = "Mr" + name;
      else name = "Mrs" + name;

      return name;

    }
  },
  book: {
       assets: './assets',
       css: [
           'mystyle.css'
       ],
       js: [
           'myfile.js'
       ]
  }



};
