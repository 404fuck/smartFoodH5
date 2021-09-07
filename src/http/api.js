import http from 'axios';
import {Toast} from 'vant';
import {baseUrl} from './baseUrl'

//导入axios
var base_url = baseUrl.getBaseUrl();
console.log(`当前环境是：${process.env.NODE_ENV} ${base_url}`);

var axios = http.create({
    baseUrl: base_url,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'X-REQUESTED-WITH': 'xmlhttprequest',
        'Request-App': 'web',
        'lang': 'zh_CN'
    },
    transformRequest: [function (data) {
        // 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等，这里可以使用开头引入的Qs（这个模块在安装axios的时候就已经安装了，不需要另外安装）
        // var token = store.getters.token
        // if (token !== null && token !== "" && typeof (token) !== "undefined") {
        //     data['token'] = token;
        // }
        return JSON.stringify(data);
    }]
});
export const ajax = function (action, data, async, type, successfn, noLoading, errorFun) {
    var url = action;

    Toast.loading({
        duration: 200, // 持续展示 toast
        forbidClick: true, // 禁用背景点击
        loadingType: 'spinner',
        message: '加载中...',
        onClose: timeOut(),
    });
    async = (async ==null || async =="" || typeof (async) == "undefined") ? true : async;
    type = (type == null || type == "" || typeof (type) == "undefined") ? "post" : type;
    data = (data == null || data == "" || typeof (data) == "undefined") ? {
        "date": new Date().getTime()
    } : data;

    //使用get 方法的时候将参数拼入url中
    if (type == 'get') {
        for (let i in data) {
            if (url.indexOf("?") != -1) {
                url += '&' + i + '=' + data[i]
            } else {
                url += '?' + i + '=' + data[i]
            }

        }
    };
    // 发送 ajax 请求
    axios({
            method: (type == null || type == "" || typeof (type) == "undefined") ? "post" : type, // default,
            url: base_url + url,
            data: data,
            timeout: 30000,
        }).then(function (info) {
            // Toast.clear();
            let res = info.data;

            //登录失效
            if (res.code == '401') {
                // store.dispatch('setToken', null)
                // router.push({
                //     name: "login",
                // });
                return
            }

            //接口中的token不为空将token存储起来;

            // var token = res.token
            // if (token !== null && token !== "" && typeof (token) !== "undefined") {
            //     store.dispatch('setToken', token)
            // }
            successfn(res);
        })
        .catch(function (e) {
            // Toast.clear();
            // Dialog.alert({
            //   title: '提示',
            //   message: '网络超时'
            // }).then(() => {
            // });
            // toast.error('网络异常：' + e)
            successfn({
                code: '500',
                msg: e,
            });
            window.console.log(e);
        });
};
//请求超时
function timeOut() {
    Toast("Time out");
}