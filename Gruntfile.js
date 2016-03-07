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

  grunt.registerTask('default', ['exec:publish']);
  grunt.registerTask('publish', ['exec:publish']);
  grunt.registerTask('push', ['exec:push']);
  grunt.registerTask('up', ['exec:push', 'exec:publish']);

};
