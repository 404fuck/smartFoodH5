
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible/index.js'
import { Locale } from 'vant';
import enUS from 'vant/es/locale/lang/en-US'
import zhCN from 'vant/lib/locale/lang/zh-CN'
import moment from 'moment/moment'
import * as echarts from 'echarts' //5.x版本

// 设置语言
if(store.getters.language=='zh_CN'){
    moment.locale("zh-CN");
    Locale.use('zhCN', zhCN)
}else{
    moment.locale("en-US");
    Locale.use('en-US', enUS)
}

// 导入封装工具
import {request} from './http/apiRequest'
import {toast} from './utils/toast'
import i18n from './utils/i18n'
import {stringutils} from './utils/stringutils'

Vue.prototype.moment = moment; //moment.js
Vue.prototype.$echarts = echarts;
Vue.prototype.request = request;//http请求
Vue.prototype.toast = toast;//吐司
Vue.prototype.stringutils = stringutils;//工具集
Vue.use(Vant);

/*
  ---过滤器filter---
*/
//日期
Vue.filter('YMD', function (value, formatString) {
	if (!value) {
		return i18n.t('select')
	}
	formatString = formatString || 'YYYYMMDD'
	return moment(value).format(formatString)
})
Vue.filter('moment', function (value, formatString) {
	if (!value) {
		return '-'
	}
	formatString = formatString || 'YYYY-MM-DD'
	return moment(value).format(formatString)
})
Vue.filter('moment_ss', function (value, formatString) {
	if (!value) {
		return '-'
	}
	formatString = formatString || 'YYYY-MM-DD HH:mm:ss'
	return moment(value).format(formatString)
})
//价格
Vue.filter('price', function (value) {
	if (!value||Number(value<0)) {
		return '0.00'
	}
	value = Number(value).toFixed(2); //保留两位小数 四舍五入
	return value;
})
//字段
Vue.filter('text', function (value) {
	if (!value) {
		return '-'
	}
	return value;
})
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
	/* 路由发生变化修改页面title */
	if (to.meta.title) {
	  document.title = `${to.meta.title}`;
	}
	next()
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
