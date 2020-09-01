/* 企业查询 */
<template>
	<div class="company">
		<div class="navLogo">
			<div class="navLogo_main">
				<div class="navLogo_left">
					<router-link to="/">LOGO</router-link>
				</div>
				<div class="navLogo_center">
					<el-input placeholder="请输入搜索内容" prefix-icon="el-icon-search" v-model="enterprise_name"> </el-input>
				</div>
				<div class="navLogo_right">
					<el-button type="primary" plain @click="fastSearch()">立即查询</el-button>
				</div>
			</div>
		</div>
		<div class="company_main">
			<Location :isChildShow="showLocation"></Location>
			<div class="result">
				<p>已选条件 :</p>
				<div>{{ enterpriseName }}</div>
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
							<el-button type="primary" icon="el-icon-edit" size="small" round plain @click="editIndustry(scope.row)">查看详情</el-button>
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
import { search } from '../api/form'
export default {
	data() {
		return {
			showLocation: '1',
			enterprise_name: this.$route.query.name || '',
			enterpriseName: '',
			count: 0,
			tableData: [],
			form: {
				policy_name: '',
				enterprise_name: this.$route.query.name || '',
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
		this.searchs()
	},
	mounted() {},
	methods: {
		searchs() {
			if (this.form.enterprise_name == '') {
				return
			}
			search(this.form).then((res) => {
				this.tableData = res.data
				this.count = res.count
				this.enterpriseName = this.form.enterprise_name
			})
		},
		fastSearch() {
			if (this.enterprise_name != '') {
				this.form.enterprise_name = this.enterprise_name
			} else {
				this.$message.error('请输入搜索内容')
				return
			}
			search(this.form).then((res) => {
				this.tableData = res.data
				this.enterpriseName = this.form.enterprise_name
				this.count = res.count
			})
		},
		editIndustry(formItem) {
			this.$router.push({
				path: '/detail',
				query: {
					id: formItem.id,
				},
			})
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
