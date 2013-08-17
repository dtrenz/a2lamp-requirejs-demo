module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    requirejs: {
      optimize: {
        options: {
            baseUrl: 'js',
            mainConfigFile: 'js/app.js',
            optimize: 'uglify2',
            preserveLicenseComments: false,
            name: 'app',
            out: 'built/app.min.js',
            paths: {
              requireLib: 'lib/require'
            },
            include: 'requireLib'
        }
      }
    }
  });

  // Load the plugin that provides the "requirejs" task.
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  // Default task(s).
  grunt.registerTask('default', ['requirejs:optimize']);

};