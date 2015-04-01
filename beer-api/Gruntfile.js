module.exports = function(grunt) {
  grunt.initConfig({
    express: {
      options: {
        hostname: process.env.IP || 'localhost',
        port: process.env.PORT || 9000,
        script: 'server.js'
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['express', 'express-keepalive']);

};
