import axios from 'axios'
import { MessageBox, Message } from 'element-ui'

// create an axios instance
const service = axios.create({
	baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
	// baseURL: '/api', // url = base url + request url
	withCredentials: true, // send cookies when cross-domain requests
	timeout: 5000, // request timeout
})

service.interceptors.request.use(
	(config) => {
		// if (localStorage.getItem('token')) {
		// 	config.headers['X-Token'] = localStorage.getItem('token')
		// }
		// config.headers['Content-Type'] = application / x - www - form - urlencoded
		return config
	},
	(error) => {
		// do something with request error
		return Promise.reject(error)
	}
)

service.interceptors.response.use(
	(response) => {
		const res = response.data

		if (res.errcode !== 0) {
			Message({
				message: res.msg || '错误',
				type: 'error',
				duration: 5 * 1000,
			})
			if (res.errcode === 4001) {
				MessageBox.confirm('您当前未登录', '重新登录提示', {
					confirmButtonText: '重新登录',
					cancelButtonText: '知道了',
					type: 'warning',
				}).then(() => {
					// store.dispatch('user/resetToken').then(() => {
					// 	location.reload()
					// })
					this.$router.push('/login')
				})
			}
			return Promise.reject(res.message || 'error')
		} else {
			// 判断列表提示语
			if (res.msg != 'success' && res.msg != '' && res.msg !== '获取成功') {
				Message({
					message: res.msg,
					type: 'success',
					duration: 5 * 1000,
				})
			}
			return res.res
		}
	},
	(error) => {
		Message({
			message: error.message,
			type: 'error',
			duration: 5 * 1000,
		})
		return Promise.reject(error)
	}
)

export default service
