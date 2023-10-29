const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const gulpImagemin = require("gulp-imagemin");

function compilaSass() {
  return gulp
    .src("./src/styles/sass/**/*.scss") // indicando aonde esta os arquivos
    .pipe(sass({ outputStyle: "compressed" })) // chammando o sass para a compilação e informando que os arquivos seram compressos
    .pipe(gulp.dest("./dist/css")); // indicando onde os arquivos compressos deveram ser criados
}

function comprimeImagens() {
  return gulp
    .src("./src/images/**/*")
    .pipe(gulpImagemin())
    .pipe(gulp.dest("./dist/images/"));
}

exports.default = gulp.parallel(compilaSass, comprimeImagens);
exports.watch = function () {
  gulp.watch("./src/styles/sass/**/*.scss", gulp.parallel(compilaSass));
};
// Aqui criamos uma função em paralelo para a execução do watch
