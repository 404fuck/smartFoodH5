
import Vue from "vue";
import VueRouter from "vue-router";
import i18n from '../utils/i18n'
Vue.use(VueRouter);

const routes = [{
		path: '/reportManage',
		name: 'reportManage',
		component: () => import('../views/report/reportManage'),
		meta: {
			title: i18n.t('reportManage.pageName'),
			requireAuth: true,
			selectEdit: false,
		}
	},
	{
		path: '/orderDetail',
		name: 'orderDetail',
		component: () => import('../views/report/orderDetail'),
		meta: {
			title: i18n.t('orderDetail.pageName'),
			requireAuth: true,
			selectEdit: false,
		}
	},
	{
		path: '/refundReport',
		name: 'refundReport',
		component: () => import('../views/report/refundReport'),
		meta: {
			title: i18n.t('refundReport.pageName'),
			requireAuth: true,
			selectEdit: false,
		}
	},
    {
		path: '/storeComparison',
		name: 'storeComparison',
		component: () => import('../views/report/storeComparison'),
		meta: {
			title: i18n.t('storeComparison.pageName'),
			requireAuth: true,
			selectEdit: false,
		}
	},
	{
		path: '/productReport',
		name: 'productReport',
		component: () => import('../views/report/productReport'),
		meta: {
			title: i18n.t('productReport.pageName'),
			requireAuth: true,
			selectEdit: false,
		}
	},
	{
		path: '/productSales',
		name: 'productSales',
		component: () => import('../views/report/productSales'),
		meta: {
			title: i18n.t('productSales.pageName'),
			requireAuth: true,
			selectEdit: false,
		}
	},
	{
		path: '/paymentReport',
		name: 'paymentReport',
		component: () => import('../views/report/paymentReport'),
		meta: {
			title: i18n.t('paymentReport.pageName'),
			requireAuth: true,
			selectEdit: false,
		}
	},
	{
		path: '/promotionAnalysis',
		name: 'promotionAnalysis',
		component: () => import('../views/report/promotionAnalysis'),
		meta: {
			title: i18n.t('promotionAnalysis.pageName'),
			requireAuth: true,
			selectEdit: false,
		}
	},
	{
		path: '/dishProDetail',
		name: 'dishProDetail',
		component: () => import('../views/report/dishProDetail'),
		meta: {
			title: '',
			requireAuth: true,
			selectEdit: false,
		}
	},
	{
		path: '/orderDetailInfo',
		name: 'orderDetailInfo',
		component: () => import('../views/report/orderDetailInfo'),
		meta: {
			title: i18n.t('orderDetailInfo.pageName'),
			requireAuth: true,
			selectEdit: false,
		}
	},



];

const router = new VueRouter({
	// mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;