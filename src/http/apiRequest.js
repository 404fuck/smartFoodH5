import {ajax} from '@/http/api'

var request = function () {
    var self = {};
    //tab分类字典查询
    self.tabTypes = function (data, successfn) {
        ajax('/apis/xvideos/type', data, false, 'post', successfn);
    };
    //视频列表
    self.videoList = function (data, successfn) {
        ajax('/apis/xvideos/list', data, false, 'post', successfn);
    };
    return self;
}();

export {
    request
}