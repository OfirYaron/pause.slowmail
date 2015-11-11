var run = require('gulp-run');

module.exports = function (gulp, $, config) {

  var devHome = process.cwd() + '/..';

  gulp.task('copyBuild', ['build'], function(){
      var rm = 'rm -rf ' + devHome + '/letterz_server/static';
      var mkdir = 'mkdir -p ' + devHome + '/letterz_server/static';
      var cp = 'cp -r ' + devHome + '/eGeret/build/app/* ' + devHome + '/letterz_server/static';

      run(rm).exec(null, run(mkdir).exec(null, run(cp).exec()));
  });
}
