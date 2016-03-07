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
      }
    }
  });

  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('default','Version of grunt', function(){
    grunt.log.write(grunt.version);

  });
  grunt.registerTask('publish','Publish proyect on npm', ['exec:publish']);
  grunt.registerTask('push', 'Publish proyect on github', ['exec:push']);
  grunt.registerTask('up','Publish proyect on github and npm', function(msg){

    grunt.task.run(['exec:publish','exec:push:'+msg]);

  });

};
