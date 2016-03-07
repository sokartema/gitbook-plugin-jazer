module.exports = function(grunt) {

  grunt.initConfig({
    exec: {
      publish: {
        command: 'npm public --access=public',
        stdout: true,
        stderr: true
      },
      list_files: {
        cmd: 'ls'
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

  grunt.registerTask('default', ['exec:list_files']);

};
