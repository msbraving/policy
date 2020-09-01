import request from './request'
//添加公司信息
export function addEnterprise(data) {
	return request({
		url: 'api/Enterprise/addEnterprise',
		method: 'post',
		data,
	})
}
//地区
export function areaList(data) {
	return request({
		url: 'api/Enterprise/regionList',
		method: 'post',
		data,
	})
}
//所有行业
export function industryList(data) {
	return request({
		url: 'api/Enterprise/selIndustry',
		method: 'get',
		data,
	})
}
//所有政策
export function policyList(data) {
	return request({
		url: 'api/Enterprise/selPolicy',
		method: 'post',
		data,
	})
}
//所有部门
export function departList(data) {
	return request({
		url: 'api/Enterprise/selDepartment',
		method: 'post',
		data,
	})
}
//下载政策
export function policyData(id) {
	return request({
		url: 'api/Enterprise/policy_data',
		method: 'post',
		data: { id },
		//responseType: 'blob',
	})
}
//下载评分
export function scoreData(id) {
	return request({
		url: 'api/Enterprise/score_data',
		method: 'post',
		data: { id },
		//responseType: 'blob'
	})
}
//搜索
export function search(data) {
	return request({
		url: 'api/Enterprise/selEnterprise',
		method: 'post',
		data,
	})
}
//公司详情
export function enterpriseDetail(enterprise_id) {
	return request({
		url: 'api/Enterprise/enterpriseDetail',
		method: 'post',
		data: { enterprise_id },
	})
}
