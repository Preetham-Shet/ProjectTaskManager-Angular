var gulp = require("gulp");

gulp.task("Copy-dist-to-wwwroot", ()=>{
    return gulp.src("./dist/project-task-manager/**/*")
    .pipe(gulp.dest(
        "D:\\Projects\\GitHub-Work\\ProjectTaskManager\\MVCProjectTaskManager\\MVCProjectTaskManager\\wwwroot"
    ))
})


gulp.task("default", ()=>{
    gulp.watch("./dist/project-task-manager", gulp.series("Copy-dist-to-wwwroot"))
})