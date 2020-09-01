import request from './request'
export function register(data) {
	return request({
		url: 'api/Login/register',
		method: 'post',
		data,
	})
}
export function login(data) {
	return request({
		url: 'api/login/login',
		method: 'post',
		data,
	})
}
export function sendCode(phone) {
	return request({
		url: 'api/Login/sendSms',
		method: 'post',
		data: { phone },
	})
}
export function logOut(data) {
	return request({
		url: 'api/Login/logOut',
		method: 'get',
		data,
	})
}
