module.exports = function(grunt) {

  grunt.initConfig({
    exec: {
      publish: {
        command: 'npm publish --access=public',
        stdout: true,
        stderr: true
      },
      push: {
        cmd: function(msg) {

          return 'git add . && git commit -m "' + msg +'" && git push -u origin master';
        },
        stdout: true,
        stderr: true
      },
      testregexp: {
        command: 'cd test && gitbook install && gitbook serve',
        stdout: true,
        stderr: true
     }
    }
  });

  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('default', ['test']); 
  grunt.registerTask('publish','Publish proyect on npm', ['exec:publish']);
  grunt.registerTask('push', 'Publish proyect on github', ['exec:push']);
  grunt.registerTask('test', 'Open book example in test', ['exec:testregexp']);
  grunt.registerTask('up','Publish proyect on github and npm', function(msg){

    grunt.task.run(['exec:publish','exec:push:'+msg]);

  });

};
