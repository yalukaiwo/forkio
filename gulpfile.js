const { series, parallel } = require("gulp")
const styles = require("./gulp-task/styles.js")

exports.default = series(styles)