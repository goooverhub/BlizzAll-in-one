module.exports = function(grunt) {

  // Project configuration.

  grunt.initConfig({
    concat: {
      options: {
        separator: '\n',
      },
      dist: {
        src: ['app/client/d3/**/*.js','app/client/login/**/*.js','app/client/nav/**/*.js','app/client/starcraft/**/*.js'
        ,'app/client/*.js'],
        dest: 'app/client/wrapper/app.js',
      },
    },

    bowercopy: {
      options: {
        
      },
      folders: {
        files: {
          'app/client/wrapper/css/':'/bootstrap/dist/css/',
          'app/client/wrapper/js/':'/bootstrap/dist/js/',
          'app/client/wrapper/fonts/':'/bootstrap/dist/fonts/',
          'app/client/wrapper/angular/':'/angular/',
          'app/client/wrapper/angular-route/':'/angular-route/'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-bowercopy');

  // Default task(s).
  grunt.registerTask('default', ['concat','bowercopy']);

};