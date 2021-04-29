const browserSync = require("browser-sync").create();
const {watch} = require("gulp");
const browserSync = require('browser-sync');

const serv = () => {
    browserSync.init({
        server:{
            baseDir: "./",
        },
        open: true,
    });

    watch("./*.html").on("change", browserSync.reload);
    watch("./src/styles/*scss", ["style"]);
};

exports.serv = serv;
exports.browserSync = browserSync;

// 21/24