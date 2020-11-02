const port = 8080
const title = '基础项目配置'

const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set("@", resolve("src"))
            .set("assets", resolve("src/assets"))
            .set("components", resolve("src/components"))
            .set("views", resolve("src/views"))
        config.module.rule('svg')
            .exclude.add(resolve('src/assets/icons'))

        config.module.rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/assets/icons'))
                .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({symbolId: 'zm-icon-[name]'})
            .end()

    }
}