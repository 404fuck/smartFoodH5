
module.exports = {
    plugins: {
        'autoprefixer': {
            overrideBrowserslist: [
                'Android 4.1',
                'iOS 7.1',
                'Chrome > 31',
                'ff > 31',
                'ie >= 8',
                "last 10 versions"
            ],
            grid: true,
        },
        'postcss-pxtorem': {
            rootValue: 102.4, //设计稿ipadx1024
            propList: ['*'],
            unitPrecision: 5, //保留rem小数点多少位
            mediaQuery: false, //媒体查询( @media screen 之类的)中不生效
            minPixelValue: 5, //px小于5的不会被转换
        }
    }
}