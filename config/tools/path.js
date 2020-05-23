const path = require('path')
module.exports.rootDir = path.resolve(__dirname, '../../');
module.exports.distDir = path.resolve(this.rootDir, 'dist');
module.exports.srcDir  = path.resolve(this.rootDir, 'src');
module.exports.jsDir  = path.resolve(this.srcDir, 'js');
module.exports.componentsDir  = path.resolve(this.srcDir, 'components');
module.exports.sassDir  = path.resolve(this.srcDir, 'sass');
module.exports.lessDir  = path.resolve(this.srcDir, 'less');
module.exports.assetsDir  = path.resolve(this.srcDir, 'assets');
module.exports.imgDir  = path.resolve(this.srcDir, 'images');
module.exports.pageDir = path.resolve(this.rootDir, 'page');
module.exports.distPageDir = path.resolve(this.distDir, 'page');
module.exports.distJsDir = path.resolve(this.distDir, 'js');
module.exports.distCssDir = path.resolve(this.distDir, 'css');
module.exports.distAssetsDir = path.resolve(this.distDir, 'assets');
module.exports.distImgDir = path.resolve(this.distDir, 'images');

module.exports.confDir = path.resolve(this.rootDir, 'config');
module.exports.tplDir = path.resolve(this.confDir, 'template');
module.exports.tplCompiledDir = path.resolve(this.tplDir, 'compiledTpl');