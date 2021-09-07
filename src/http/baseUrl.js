

//请求地址配置
const baseUrl = function () {
    const self = {};
    //获取基础地址
    self.getBaseUrl = function () {
        let base_url = ''
        switch (process.env.NODE_ENV) {
            case 'development': //本地http://192.168.1.221/apis
                base_url = "http://192.168.1.221/apis" //开发环境
                break
            case 'test': 
                base_url = "http://192.168.1.221/apis" //公测环境
                break
            case 'production': 
                base_url = "http://192.168.1.221/apis" //最终上线环境
                break
        }
        return base_url;
    }

    return self;
}();

export {
    baseUrl
}