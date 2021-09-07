
let stringutils = function () {
    let self = {};
    //排序
    self.sortBy = function (attr, rev) {
        return function (a, b) {
            a = Number(a[attr]); 
            b = Number(b[attr]); 
            if (a < b) {
                return rev * -1
            }
            if (a > b) {
                return rev * 1
            }
            return 0
        }
    }
    //深拷贝
    self.deepClone = function (obj) {
        let objClone = Array.isArray(obj) ? [] : {};
        if (obj && typeof obj === "object") {
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    //判断ojb子元素是否为对象，如果是，递归复制
                    if (obj[key] && typeof obj[key] === "object") {
                        objClone[key] = this.deepClone(obj[key]);
                    } else {
                        //如果不是，简单复制
                        objClone[key] = obj[key];
                    }
                }
            }
        }
        return objClone;
    }

    self.formatPrice = function (value) {
        if (!value) {
            return '0.00'
        }
        if (!value||Number(value<0)) {
            return '0.00'
        }
        value = Number(value).toFixed(2); //保留两位小数 四舍五入
        return value;
    }
    
    return self;
}();


export {
    stringutils
}