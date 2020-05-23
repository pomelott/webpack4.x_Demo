const dirs = require('../../tools/path')
module.exports= {
    alias: {
        '@': dirs.srcDir,
        'js': dirs.jsDir,
        'sass': dirs.sassDir,
        'components': dirs.componentsDir,
        'less': dirs.lessDir,
        'assets': dirs.assetsDir,
        'images': dirs.imgDir,
        'vue': 'vue/dist/vue.esm.js'
    }
}