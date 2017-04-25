var gulp = require('gulp');
var replace = require('gulp-replace');

gulp.task('default', function() {
  // place code for your default task here
});
function saveConfig(environment) {

  var config = require('./config/' + environment + '.json');

  // Use `constants.js` as the source.
  gulp.src(['constants.js'])

    // Replace all occurrences of @apiUrl@.
    .pipe(replace(/@mailChimpKey@/g, config.mailChimpKey))
    .pipe(replace(/@mailChimpUser@/g, config.mailChimpUser))

    // Save the result in www/js.
    .pipe(gulp.dest('src'));
}

gulp.task('config-development', function(){
  saveConfig('development');
});

gulp.task('config-production', function(){
  saveConfig('production');
});
