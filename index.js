var _ = require('lodash');
var fs = require("fs");
var path = require("path");

var WEBSITE_TEMPLATE = _.template(fs.readFileSync(path.resolve(__dirname, "./assets/website.html")));
var EBOOK_TEMPLATE = _.template(fs.readFileSync(path.resolve(__dirname, "./assets/ebook.html")));


module.exports = {

  website: {
    assets: './assets',
    css: [
      'regexp.css'
    ],
    js: [
      'regexp.js',
      'xregexp/xregexp.js',
      "ace/ace.js",
      "ace/theme-dreamweaver.js"
    ]
  },
  ebook: {
    assets: './assets',
    css: [
      'regexpebook.css'
    ]

  },
  blocks: {

    regexp: {

      blocks: ["solution", "validation"],
      process: function(blk) {

          var codes = {};

          _.each(blk.blocks, function(_blk) {
              codes[_blk.name] = _blk.body.trim();
          });

          // Select appropriate template
          var tpl = (this.generator === 'website' ? WEBSITE_TEMPLATE : EBOOK_TEMPLATE);

          return tpl({
              message: blk.body,
              codes: codes
          });
      }

    }


  }

};
