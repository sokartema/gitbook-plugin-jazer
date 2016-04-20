var _ = require('lodash');
var fs = require("fs");
var path = require("path");

var REGEXP_WEBSITE_TEMPLATE = _.template(fs.readFileSync(path.resolve(__dirname, "./assets/regexp/regexp_website.html")));
var REGEXP_EBOOK_TEMPLATE = _.template(fs.readFileSync(path.resolve(__dirname, "./assets/regexp/regexp_ebook.html")));

var QUESTIONJS_WEBSITE_TEMPLATE = _.template(fs.readFileSync(path.resolve(__dirname, "./assets/questionjs/questionjs_website.html")));
var QUESTIONJS_EBOOK_TEMPLATE = _.template(fs.readFileSync(path.resolve(__dirname, "./assets/questionjs/questionjs_ebook.html")));


module.exports = {

  website: {
    assets: './assets',
    css: [
      'regexp/regexp_website.css',
      'questionjs/questionjs_website.css'
    ],
    js: [
      'questionjs/questionjs.js',
      'regexp/regexp.js',
      'xregexp/xregexp.js',
      "ace/ace.js",
      "ace/theme-dreamweaver.js"
    ]
  },
  ebook: {
    assets: './assets',
    css: [
      'questionjs/questionjs_ebook.css',
      'regexp/regexp_ebook.css'
    ]

  },
  blocks: {

    regexp: {

      blocks: ["solution", "validation"],
      process: function(blk) {

          var codes = {};

          var config = {};

          _.assignIn(config,this.book.config.options.pluginsConfig.jazer);

          _.assignIn(config, blk.kwargs);

          _.each(blk.blocks, function(_blk) {
              codes[_blk.name] = _blk.body.trim();
          });

          // Select appropriate template
          var tpl = (this.generator === 'website' ? REGEXP_WEBSITE_TEMPLATE : REGEXP_EBOOK_TEMPLATE);

          return tpl({
              message: blk.body,
              codes: codes,
              config: config

          });
      }

    },
    questionjs: {

      blocks:["solution", "validation"],
      process: function(blk) {

        var codes = {};

        var config = {};

        _.assignIn(config,this.book.config.options.pluginsConfig.jazer);

        _.assignIn(config, blk.kwargs);

        _.each(blk.blocks, function(_blk) {
            codes[_blk.name] = _blk.body.trim();
        });

        // Select appropriate template
        var tpl = (this.generator === 'website' ? QUESTIONJS_WEBSITE_TEMPLATE : QUESTIONJS_EBOOK_TEMPLATE);

        return tpl({
            message: blk.body,
            codes: codes,
            config: config

        });


      }

    }

  }

};
