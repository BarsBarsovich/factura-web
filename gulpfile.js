var gulp = require("gulp"),
  sass = require("gulp-sass"),
  autoprefixer = require("gulp-autoprefixer"),
  browserSync = require("browser-sync"),
  fileinclude = require("gulp-file-include");

gulp.task("sass", function () {
  return gulp
    .src("app/scss/*.scss")
    .pipe(sass())
    .pipe(autoprefixer(["last 15 versions", ">1%", "ie 9"], { cascade: true }))
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("code", function () {
  return gulp.src("app/*.html").pipe(browserSync.reload({ stream: true }));
});

gulp.task("browser-sync", function () {
  browserSync({
    server: {
      baseDir: "app",
    },
    notify: false,
  });
});

// gulp.task("fileinclude", function () {
//   gulp
//     .src(["app/index.html"])
//     .pipe(
//       fileinclude({
//         prefix: "@",
//         basepath: "@file",
//       })
//     )
//     .pipe(gulp.dest("./test.html"));
// });

gulp.task("watch", function () {
  gulp.watch("app/scss/**/*.scss", gulp.parallel("sass"));
  gulp.watch("app/*.html", gulp.parallel("code"));
});

gulp.task(
  "default",
  gulp.parallel("sass", "browser-sync", "code", "watch")
);
