import request from './request'
//轮播列表
export function bannerList(data) {
	return request({
		url: 'api/banner/bannerList',
		method: 'get',
		data,
	})
}
//公告
export function noticeList(data) {
	return request({
		url: 'api/notice/noticeList',
		method: 'get',
		data,
	})
}
// 公告详情
export function noticeDetail(data) {
	return request({
		url: 'api/notice/noticeDetail',
		method: 'get',
		data,
	})
}
// 资讯 模板 机构
export function configList(data) {
	return request({
		url: 'api/Index/indexConfigList',
		method: 'post',
		data,
	})
}
// 客服
export function selService(data) {
	return request({
		url: 'api/Enterprise/selService',
		method: 'get',
		data,
	})
}
// 资讯详情
export function newsDetail(id) {
	return request({
		url: 'admin/indexConfig/editIndexConfig',
		method: 'post',
		data: { id },
	})
}
