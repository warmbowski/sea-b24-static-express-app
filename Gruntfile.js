module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jscs');

  grunt.initConfig({
    jshint: {
      all: ["app.js"],
      options: {
        jshintrc: true
      }
    },
    
    jscs: {
      all: {
        options: {
          standard: 'airbnb'
        },
        files: {
          src: [ 'app.js']
        }
      }
    }
    
  });
  grunt.registerTask('test', ['jshint', 'jscs']);
  grunt.registerTask('default', ['test']);
};