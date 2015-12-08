module.exports = function(grunt) {
	grunt.config('sass', {
    dist: { // target
      files: { // dictionary of files
        '.tmp/styles/main.css': '<%= yeoman.app %>/styles/main.scss' // 'destination': 'source'
      }
    }
  });
}
