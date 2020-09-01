/* 咨询结果 */
<template>
	<div class="result" ref="result">
		<Navlogo></Navlogo>
		<div class="result_main">
			<Location :isChildShow="showLocation"></Location>
			<div class="content" ref="content">
				<div class="title">评估结果</div>
				<div class="prompt">（仅以填报人提供的数据为基础予以测评、结果仅供参考）</div>
				<div class="company">
					受评企业 :
					<p>{{ companyName }}</p>
				</div>
				<div class="detail">具体情况如下：</div>
			</div>
			<el-button type="text" class="exportBtn" @click="exportBtn()">导出</el-button>
			<div class="table">
				<el-tabs v-model="activeName">
					<el-tab-pane label="政策评估结果" name="first">
						<el-table :data="tablePolicy" style="width: 100%" :height="tableHeight">
							<el-table-column prop="isOk" label="是否符合" align="center"> </el-table-column>
							<el-table-column prop="title" label="政策标准" align="center"> </el-table-column>
							<el-table-column prop="actual" label="企业实际情况" align="center"> </el-table-column>
						</el-table>
					</el-tab-pane>
					<el-tab-pane label="企业评估结果" name="second" >
						<el-table :data="tableScore" style="width: 100%" :height="tableHeight">
							<el-table-column prop="conditions" label="评分条件" align="center"> </el-table-column>
							<el-table-column prop="criterion" label="评分标准" align="center"> </el-table-column>
							<el-table-column prop="actual" label="企业实际情况" align="center"> </el-table-column>
							<el-table-column prop="score" label="得分" align="center" width="80"> </el-table-column>
						</el-table>
					</el-tab-pane>
				</el-tabs>
			</div>
		</div>
	</div>
</template>

<script>
import Navlogo from '../components/navLogo'
import Location from '../components/location'
import { policyData, scoreData } from '../api/form'
import { Form } from 'element-ui'
export default {
	data() {
		return {
			showLocation: '5',
			activeName: 'first',
			companyName: '',
			tablePolicy: '',
			tableScore: '',
			tableHeight: 300,
		}
	},
	components: {
		Navlogo,
		Location,
	},
	watch: {},
	created() {
		let tableData = JSON.parse(sessionStorage.getItem('tableData'))
		this.companyName = this.$route.query.name
		this.tablePolicy = tableData.policy_data
		this.tablePolicy.forEach((item) => {
			item.isOk = item.isOk == 1 ? '是' : '否'
		})
		this.tableScore = tableData.score_data
	},
	mounted() {
		setTimeout(() => {
			let resultHeight = this.$refs.result.offsetHeight
			let contentHeight = this.$refs.content.offsetHeight
			this.tableHeight = resultHeight - contentHeight - 200
		}, 100)
	},
	methods: {
		exportBtn() {
			//下载
			let token = localStorage.getItem('token')
			if (!token) {
				this.$confirm('此功能需要先登录, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
				})
					.then(() => {
						this.$router.push({
							path: '/login',
							query: {
								name: 'fromAdvisoryResult',
							},
						})
					})
					.catch(() => {
						this.$message({
							type: 'info',
							message: '已取消',
						})
					})
				return
			}
			let id = JSON.parse(sessionStorage.getItem('tableData')).id
			if (this.activeName == 'first') {
				window.location.href = 'api/Enterprise/policy_data?id=' + id
			} else if (this.activeName == 'second') {
				window.location.href = 'api/Enterprise/score_data?id=' + id
			}
		},
	},
}
</script>

<style scoped lang="scss">
.result {
	width: 100%;
	height: calc(100% - 80px);
	padding-top: 80px;
	background-color: #f2f5f4;
	.result_main {
		width: 1200px;
		height: 100%;
		margin: 0 auto;
		background-color: #ffffff;
		position: relative;
		.content {
			width: 100%;
			box-sizing: border-box;
			padding: 20px 30px 10px 30px;
			font-size: 18px;
			font-family: Source Han Sans CN;
			font-weight: bold;
			color: rgba(51, 51, 51, 1);
			.title {
				text-align: left;
				height: 30px;
			}
			.prompt {
				height: 40px;
				font-size: 16px;
				font-weight: 400;
			}
			.company,
			.detail {
				height: 40px;
				padding-left: 50px;
				display: flex;
				align-items: center;
				p {
					font-weight: 400;
					padding-left: 10px;
				}
			}
		}
		::v-deep .el-button--text {
			position: absolute;
			right: 50px;
			font-size: 16px;
			font-family: Source Han Sans CN;
			font-weight: bold;
			z-index: 666;
		}
		.table {
			width: 100%;
			box-sizing: border-box;
			padding: 0 30px;
			// ::v-deep .el-tabs__content {
			// height: 500px;
			// overflow: auto;
			// }
			::v-deep .el-tabs__item {
				font-size: 18px;
				font-family: Source Han Sans CN;
				font-weight: bold;
			}
			::v-deep .el-tabs__nav-wrap::after {
				height: 0;
			}
		}
	}
}
</style>
