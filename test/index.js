var path = require('path');
var tester = require('gitbook-tester');
var assert = require('assert');

var pkg = require('../package.json');

describe('jazer', function() {
    it('should correctly replace by hola', function() {
        return tester.builder()
            .withContent('hola')
            .withLocalPlugin(path.join(__dirname, '..'))
            .withBookJson({
                gitbook: pkg.engines.gitbook,
                plugins: ['jazer']
            })
            .create()
            .then(function(result) {
                console.log("hey");
                console.log(result[0].content);
                assert.equal(result[0].content, '<p>hola</p>');
            });
    });

    it('should correctly include hola', function() {
        return tester.builder()
            .withContent('hola')
            .withBookJson({
                gitbook: pkg.engines.gitbook,
                plugins: ['jazer']
            })
            .withLocalPlugin(path.join(__dirname, '..'))
            .create()
            .then(function(result) {
                assert.equal(result[0].content, '<p>hola</p>');
            });
    });

});
