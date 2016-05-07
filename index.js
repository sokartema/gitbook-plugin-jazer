var _ = require('lodash');
var fs = require("fs");
var path = require("path");
var marked = require("marked");

var REGEXP_WEBSITE_TEMPLATE = _.template(fs.readFileSync(path.resolve(__dirname, "./assets/regexp/regexp_website.html")));
var REGEXP_EBOOK_TEMPLATE = _.template(fs.readFileSync(path.resolve(__dirname, "./assets/regexp/regexp_ebook.html")));

var QUESTIONJS_WEBSITE_TEMPLATE = _.template(fs.readFileSync(path.resolve(__dirname, "./assets/questionjs/questionjs_website.html")));
var QUESTIONJS_EBOOK_TEMPLATE = _.template(fs.readFileSync(path.resolve(__dirname, "./assets/questionjs/questionjs_ebook.html")));

var QUESTION_WEBSITE_TEMPLATE = _.template(fs.readFileSync(path.resolve(__dirname, "./assets/question/question_website.html")));
var QUESTION_EBOOK_TEMPLATE = _.template(fs.readFileSync(path.resolve(__dirname, "./assets/question/question_ebook.html")));


module.exports = {

  website: {
    assets: './assets',
    css: [
      'regexp/regexp_website.css',
      'questionjs/questionjs_website.css',
      'question/question_website.css'
    ],
    js: [
      'questionjs/questionjs.js',
      'question/question.js',
      'regexp/regexp.js',
      'xregexp/xregexp.js',
      "ace/ace.js",
      "ace/theme-dreamweaver.js"
    ],
    html: {
        "body:start": function(options) {
            var scripts = "";
            _.each(this.book.config.options.pluginsConfig.jazer.support , function(x){

              scripts += "<script src='"+ x +"'></script>\n";

            });

            return scripts;
        }
    }
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

      blocks: ["editor", "solution", "validation"],
      process: function(blk) {

          var codes = {};

          var config = {};

          _.assignIn(config,this.book.config.options.pluginsConfig.jazer);

          if(blk.kwargs.editorAutoHeight === "true"){

            config.editorHeight = null;
          }

          _.assignIn(config, blk.kwargs);

          _.each(blk.blocks, function(_blk) {

              codes[_blk.name] = _blk.body.trim().replace(/"/g, "&quot;");
          });

          // Select appropriate template
          var tpl = (this.generator === 'website' ? REGEXP_WEBSITE_TEMPLATE : REGEXP_EBOOK_TEMPLATE);

          return tpl({
              message: marked(blk.body),
              codes: codes,
              config: config

          });
      }

    },
    questionjs: {

      blocks:["editor", "solution", "validation"],
      process: function(blk) {

        var codes = {};

        var config = {};

        _.assignIn(config,this.book.config.options.pluginsConfig.jazer);

        if(blk.kwargs.editorAutoHeight === "true"){

          config.editorHeight = null;
        }

        _.assignIn(config, blk.kwargs);

        _.each(blk.blocks, function(_blk) {

            codes[_blk.name] = _blk.body.trim().replace(/"/g, "&quot;");
        });

        // Select appropriate template
        var tpl = (this.generator === 'website' ? QUESTIONJS_WEBSITE_TEMPLATE : QUESTIONJS_EBOOK_TEMPLATE);

        return tpl({
            message: marked(blk.body),
            codes: codes,
            config: config

        });


      }

    },
    question: {

      blocks:["editor","solution", "validation","language"],
      process: function(blk) {

        var codes = {};

        var config = {};

        _.assignIn(config,this.book.config.options.pluginsConfig.jazer);

        if(blk.kwargs.editorAutoHeight === "true"){

          config.editorHeight = null;
        }

        _.assignIn(config, blk.kwargs);


        _.each(blk.blocks, function(_blk) {

            codes[_blk.name] = _blk.body.trim().replace(/"/g, "&quot;");
        });

        // Select appropriate template
        var tpl = (this.generator === 'website' ? QUESTION_WEBSITE_TEMPLATE : QUESTION_EBOOK_TEMPLATE);

        return tpl({
            message: marked(blk.body),
            codes: codes,
            config: config

        });


      }

    }

  }

};
