import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// 解决路由重复添加报错
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
// 	return originalPush.call(this, location).catch((err) => err)
// }
Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		meta: {
			title: '首页',
		},
		component: Home,
	},
	{
		path: '/company',
		name: 'Company',
		meta: {
			title: '一键查询',
		},
		component: () => import(/* webpackChunkName: "Company" */ '../views/Company.vue'),
	},
	{
		path: '/policy',
		name: 'Policy',
		meta: {
			title: '一键查询',
		},
		component: () => import(/* webpackChunkName: "Policy" */ '../views/Policy.vue'),
	},
	{
		path: '/detail',
		name: 'Detail',
		meta: {
			title: '详情',
		},
		component: () => import(/* webpackChunkName: "Detail" */ '../views/Detail.vue'),
	},
	{
		path: '/advisory',
		name: 'Advisory',
		meta: {
			title: '免费咨询',
		},
		component: () => import(/* webpackChunkName: "Advisory" */ '../views/Advisory.vue'),
	},
	{
		path: '/advisoryResult',
		name: 'advisoryResult',
		meta: {
			title: '咨询结果',
		},
		component: () => import(/* webpackChunkName: "advisoryResult" */ '../views/advisoryResult.vue'),
	},
	{
		path: '/about',
		name: 'About',
		meta: {
			title: '关于我们',
		},
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
	},
	{
		path: '/login',
		name: 'Login',
		meta: {
			title: '登录',
		},
		component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue'),
	},
	{
		path: '/register',
		name: 'Register',
		meta: {
			title: '注册',
		},
		component: () => import(/* webpackChunkName: "Register" */ '../views/Register.vue'),
	},
	{
		path: '/newsDetail',
		name: 'newsDetail',
		meta: {
			title: '资讯详情',
		},
		component: () => import(/* webpackChunkName: "Register" */ '../views/newsDetail.vue'),
	},
]

const router = new VueRouter({
	mode: 'hash',
	routes,
	scrollBehavior(to, from, savedPosition) {
		return {
			x: 0,
			y: 0,
		}
	},
})

export default router
