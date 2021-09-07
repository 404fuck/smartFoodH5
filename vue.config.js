
module.exports = {
    // 基本路径
    publicPath: './',
    // 输出文件目录
    outputDir: 'dist',
    // 用于嵌套生成的静态资产（js，css，img，fonts）的目录。
    assetsDir: '',
    // 以多页模式构建应用程序。
    pages: {
        index: {
            entry: "src/main.js", //配置入口js文件
            template: "public/index.html", //主页面
            filename: "index.html", //打包后的html文件名称
            title: "" //打包后的.html中<title>标签文本内容
        },
    },
    // eslint-loader 是否在保存的时候检查
    lintOnSave: false,
    // 是否使用包含运行时编译器的Vue核心的构建。
    runtimeCompiler: false,
    // 默认情况下babel-loader忽略其中的所有文件node_modules。
    transpileDependencies: [],
    // 生产环境sourceMap
    productionSourceMap: false,
    // webpack配置
    configureWebpack: () => {},
    chainWebpack: () => {},
    // css相关配置
    css: {
        // 启用 CSS modules
        // 是否使用css分离插件
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
    },
    // webpack-dev-server 相关配置
    devServer: {
        // host: 'localhost',
        // port: 8080,
        https: false,
        hotOnly: false,

    },
    // enabled by default if the machine has more than 1 cores
    parallel: require('os').cpus().length > 1,
    // PWA 插件相关配置
    pwa: {},
    // 第三方插件配置
    pluginOptions: {
        // ...
    },
}