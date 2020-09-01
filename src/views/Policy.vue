/* 政策查询 */
<template>
	<div class="company">
		<div class="navLogo">
			<div class="navLogo_main">
				<div class="navLogo_left">
					<router-link to="/">LOGO</router-link>
				</div>
				<div class="navLogo_center">
					<el-input placeholder="请输入搜索内容" prefix-icon="el-icon-search" v-model="form.policy_name"> </el-input>
				</div>
				<div class="navLogo_right">
					<el-button type="primary" plain @click="fastSearch()">立即查询</el-button>
				</div>
			</div>
		</div>
		<div class="company_main">
			<Location :isChildShow="showLocation"></Location>
			<div class="condition">
				<el-form :model="form" label-width="100px" class="condition_one">
					<el-form-item label="选择地区">
						<!-- multiple: true, -->
						<el-cascader
							class="selectClass"
							v-model="form.region_id"
							:options="options_area"
							clearable
							:props="{
								checkStrictly: true,
								value: 'id',
								label: 'title',
								children: 'son',
								emitPath: false,
							}"
							@change="changeCascader"
						></el-cascader>
					</el-form-item>
					<el-form-item label="选择行业">
						<!-- multiple -->
						<el-select class="selectClass" v-model="form.industry_id" placeholder="请选择" @change="changeSelect">
							<el-option v-for="item in options_industry" :key="item.id" :label="item.name" :value="item.id"> </el-option>
						</el-select>
					</el-form-item>
					<div class="form-flex">
						<el-form-item label="立项时间">
							<el-date-picker v-model="form.project_start" type="date" value-format="yyyy-MM-dd" placeholder="开始时间" @change="changeStartTime"> </el-date-picker>
							<el-date-picker v-model="form.project_end" type="date" value-format="yyyy-MM-dd" placeholder="结束时间" @change="changeEndTime"> </el-date-picker>
						</el-form-item>
					</div>
				</el-form>
			</div>
			<div class="result">
				<p>已选条件 :</p>
				<div>{{ policyName }}</div>
				共为您查询
				<div style="color:#DA2F13">{{ count }}</div>
				条结果
			</div>
			<div class="table">
				<el-table :data="tableData" style="width: 100%" stripe fit highlight-current-row border>
					<el-table-column prop="name" label="企业名称" align="center"> </el-table-column>
					<el-table-column prop="policy_name" label="政策名称" width="180" align="center"> </el-table-column>
					<el-table-column prop="industry_name" label="所属行业" width="180" align="center"> </el-table-column>
					<el-table-column prop="merger_name" label="地址" align="center"> </el-table-column>
					<el-table-column label="操作" align="center" width="320">
						<template slot-scope="scope">
							<el-button type="primary" icon="el-icon-edit" size="small" round plain @click="goDetail(scope.row)">查看详情</el-button>
						</template>
					</el-table-column>
				</el-table>
			</div>
			<pagination :total="count" :page.sync="form.page" :limit.sync="form.pagesize" @pagination="searchs" />
		</div>
	</div>
</template>

<script>
import Navlogo from '../components/navLogo'
import Location from '../components/location'
import Pagination from '../components/pagination'
import { addEnterprise, industryList, policyList, search } from '../api/form'
import areaList from '../assets/areaList.js'
export default {
	data() {
		return {
			showLocation: '2',
			value: '',
			dialogForm: {},
			options_area: areaList,
			options_industry: [],
			policyName: '',
			count: 0,
			tableData: [],
			form: {
				policy_name: this.$route.query.name || '',
				enterprise_name: '',
				region_id: Number(this.$route.query.region_id) || '',
				industry_id: '',
				page: 1,
				pagesize: 10,
				project_start: '',
				project_end: '',
			},
		}
	},
	components: {
		Navlogo,
		Location,
		Pagination,
	},
	watch: {},
	created() {
		this.industryList()
		this.searchs()
	},
	mounted() {},
	methods: {
		industryList() {
			//所有行业
			industryList().then((res) => {
				this.options_industry = res
			})
		},
		searchs() {
			//页面进入直接搜索
			let array = JSON.parse(JSON.stringify(this.form))
			let flag = false
			this.$delete(array, 'page')
			this.$delete(array, 'pagesize')
			for (let key in array) {
				if (array[key] != '') {
					flag = true
				}
			}
			if (flag == false) {
				return
			}
			// if (!this.$route.query.name && !this.$route.query.region_id) {
			// 	return
			// }

			// if (this.$route.query.name) {
			// 	this.form.policy_name = this.$route.query.name
			// }
			// if (this.$route.query.region_id) {
			// 	this.form.region_id = Number(this.$route.query.region_id)
			// }
			search(this.form).then((res) => {
				this.tableData = res.data
				this.count = res.count
				this.policyName = this.form.policy_name
			})
		},
		fastSearch() {
			//按钮搜索
			this.searchs()
		},
		goDetail(formItem) {
			//详情
			this.$router.push({
				path: '/detail',
				query: {
					id: formItem.id,
				},
			})
		},
		changeCascader(value) {
			this.form.region_id = value
			this.searchs()
		},
		changeSelect(value) {
			this.form.industry_id = value
			this.searchs()
		},
		changeStartTime(value) {
			if (value == null) {
				value = ''
			}
			return
			this.form.project_start = value
			this.searchs()
		},
		changeEndTime(value) {
			if (value == null) {
				value = ''
			}
			return
			this.form.project_end = value
			this.searchs()
		},
	},
}
</script>

<style scoped lang="scss">
.company {
	width: 100%;
	padding-top: 80px;
	.navLogo {
		width: 100%;
		height: 80px;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 666;
		background-color: #136fdb;
		.navLogo_main {
			width: 1200px;
			height: 100%;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			.navLogo_left {
				width: 200px;
				height: 100%;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				font-size: 45px;
				font-family: PingFang SC;
				color: rgba(255, 255, 255, 1);
				cursor: pointer;
				a {
					display: block;
					width: 100%;
					color: rgba(255, 255, 255, 1);
				}
			}
			.navLogo_center {
				width: 850px;
				height: 80px;
				display: flex;
				align-items: center;
				::v-deep .el-input {
					height: 60px;
					.el-input__inner {
						height: 60px;
					}
				}
			}
			.navLogo_right {
				width: 120px;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				.el-button {
					width: 100px;
					height: 50px;
				}
			}
		}
	}
	.company_main {
		width: 1200px;
		margin: 0 auto;
		.condition {
			width: 100%;
			box-sizing: border-box;
			padding: 20px 0 0 30px;
			border-bottom: 1px solid rgba(226, 226, 226, 1);
			::v-deep .selectClass .el-input {
				width: 600px;
			}
			::v-deep .el-form-item__content {
				text-align: left;
			}
			// p {
			// 	width: 110px;
			// 	display: flex;
			// 	justify-content: flex-start;
			// 	align-items: center;
			// 	font-size: 18px;
			// 	font-family: PingFang SC;
			// 	font-weight: 500;
			// 	color: rgba(51, 51, 51, 1);
			// }
			// .el-select {
			// 	margin-right: 50px;
			// }
			// .condition_one {
			// 	display: flex;
			// 	margin-bottom: 20px;
			// }
			.form-flex {
				display: flex;
				// justify-content: space-between;
			}
			::v-deep .el-date-editor.el-input {
				margin-right: 160px;
			}
		}
		.result {
			width: 100%;
			height: 50px;
			box-sizing: border-box;
			padding-left: 30px;
			display: flex;
			align-items: center;
			font-size: 18px;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
			p {
				width: 90px;
				text-align: left;
			}
		}
	}
}
</style>
