

module.exports = {

  website: {
      assets: "./assets",
      js: [
          "example.js"
      ],
      css: [
          "example.css"
      ],
      html: {
          "body:start": function(options) {
              return '<script src="'+options.staticBase+'/plugins/gitbook-plugin-exercises/jsrepl/jsrepl.js" id="jsrepl-script"></script>';
          }
      }
  },
  ebook: {
      assets: "./assets",
      css: [
          "ebook.css"
      ]
  }


};
