const {
    series,
    src,
    dest,
    task
} = require('gulp');
const imagemin = require('gulp-imagemin');
const smushit = require('gulp-smushit');
const tinypng_nokey = require('gulp-tinypng-nokey');
// 通过使用缓存提高压缩速度
const cache = require('gulp-cache');
task('minImg', function () {
    return src('dist/images/**/*.*')
        // 脚本压缩
        // .pipe(
        //     cache(
        //         imagemin([
        //             // imagemin.gifsicle({interlaced: true}),
        //             imagemin.mozjpeg({quality: 75, progressive: true}),
        //             imagemin.optipng({optimizationLevel: 5}),
        //             imagemin.svgo({
        //                 plugins: [
        //                     {removeViewBox: true},
        //                     {cleanupIDs: false}
        //                 ]
        //             })
        //         ])
        //     )
        // )
        // 在线压缩，压缩率较高但需要翻墙且图片格式有限制
        // .pipe(
        //     cache(
        //         smushit({
        //             verbose: true
        //         })
        //     )
        // )
        // 在线压缩
        .pipe(cache(tinypng_nokey()))
        .pipe(dest('dist/images'))

})

task('minImg')