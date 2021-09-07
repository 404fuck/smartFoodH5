import {Toast} from 'vant';

var toast = function () {
    var self = {};
    //信息消息提示 
    self.info = function (msg) {
        Toast(msg);
    };

    //成功消息提示 
    self.success = function (msg) {
        Toast.success(msg);
    };

    //加载消息提示 
    self.loading = function (msg) {
        Toast.loading({
            mask: true,
            message: msg | '加载中...'
        });
    };

    //失败消息提示 
    self.fail = function (msg) {
        Toast.fail(msg);
    };
    return self;
}();

export {
    toast
}