/* 咨询 */
<template>
	<div class="advisory">
		<Navlogo></Navlogo>
		<div class="advisory_main">
			<Location :isChildShow="showLocation"></Location>
			<div class="contain">
				<div class="form">
					<el-form ref="form_one" :model="form_one" label-width="300px" :rules="rules_one">
						<div v-if="isShow == '1' ? true : false">
							<div class="form_content">
								<el-form-item label="选择地区" prop="region_id">
									<el-cascader
										class="selectClass"
										v-model="form_one.region_id"
										:options="options_area"
										clearable
										:props="{
											value: 'id',
											label: 'title',
											children: 'son',
										}"
									></el-cascader>
								</el-form-item>
								<el-form-item label="选择行业" prop="industry_id">
									<el-select v-model="form_one.industry_id" placeholder="选择行业">
										<el-option v-for="item in options_industry" :key="item.id" :label="item.name" :value="item.id"> </el-option>
									</el-select>
								</el-form-item>
								<el-form-item label="选择政策" prop="policy_id">
									<el-select v-model="form_one.policy_id" placeholder="选择政策">
										<el-option v-for="item in options_policy" :key="item.id" :label="item.name" :value="item.id"> </el-option>
									</el-select>
								</el-form-item>
								<el-form-item label="企业名称" prop="name">
									<el-input v-model="form_one.name"></el-input>
								</el-form-item>
								<el-form-item label="社会统一信用代码/组织机构代码" prop="credit_code">
									<el-input v-model="form_one.credit_code"></el-input>
								</el-form-item>
								<el-form-item label="近两年销售额" prop="sales">
									<el-input v-model="form_one.sales"></el-input>
								</el-form-item>
								<el-form-item label="科技成果转化能力平均每年转化" prop="science">
									<el-input v-model="form_one.science"></el-input>
								</el-form-item>
								<el-form-item label="近一年工资表体现人数" prop="wage">
									<el-input v-model="form_one.wage"></el-input>
								</el-form-item>
								<el-form-item label="近2年资产增长率" prop="growth">
									<el-input v-model="form_one.growth"></el-input>
								</el-form-item>
							</div>
							<el-form-item class="formButton">
								<el-button type="primary" @click="nextStep(2, 'form_one')">下一步</el-button>
							</el-form-item>
						</div>
					</el-form>
					<el-form ref="form_two" :model="form_two" label-width="300px" :rules="rules_two">
						<div v-if="isShow == '2' ? true : false">
							<div class="form_content">
								<el-form-item label="上一年纳税额" prop="ratal">
									<el-input v-model="form_two.ratal"></el-input>
								</el-form-item>
								<el-form-item label="上年企业人数" prop="number">
									<el-input v-model="form_two.number"></el-input>
								</el-form-item>
								<el-form-item label="社保人数" prop="security">
									<el-input v-model="form_two.security"></el-input>
								</el-form-item>
								<el-form-item label="个税人数" prop="tax">
									<el-input v-model="form_two.tax"></el-input>
								</el-form-item>
								<el-form-item label="专利数量" prop="patent">
									<el-input v-model="form_two.patent"></el-input>
								</el-form-item>
								<el-form-item label="类别" prop="type">
									<el-select v-model="form_two.type" placeholder="请选择">
										<el-option label="发明" value="1"> </el-option>
										<el-option label="实用新型软著" value="0"> </el-option>
									</el-select>
								</el-form-item>
								<el-form-item label="上一年度总资产" prop="assets">
									<el-input v-model="form_two.assets"></el-input>
								</el-form-item>
								<el-form-item label="高新技术产品收入占总收入的比例" prop="product">
									<el-input v-model="form_two.product"></el-input>
								</el-form-item>
								<el-form-item label="知识产权获得方式" prop="knowledge">
									<el-select v-model="form_two.knowledge" placeholder="请选择">
										<el-option label="自主研发" value="1"> </el-option>
										<el-option label="仅有受让，受赠和并购等" value="0"> </el-option>
									</el-select>
								</el-form-item>
							</div>
							<el-form-item class="formButton">
								<el-button type="primary" @click="nextStep(-1, '')">上一步</el-button>
								<el-button type="primary" @click="nextStep(3, 'form_two')">下一步</el-button>
							</el-form-item>
						</div>
					</el-form>
					<el-form ref="form_three" :model="form_three" label-width="300px" :rules="rules_three">
						<div v-if="isShow == '3' ? true : false">
							<div class="form_content">
								<el-form-item label="近两年企业收入" prop="enterprise_income">
									<el-input v-model="form_three.enterprise_income"></el-input>
								</el-form-item>
								<el-form-item label="企业成立时间" prop="establish_time">
									<el-date-picker type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form_three.establish_time" style="width: 100%;"></el-date-picker>
								</el-form-item>
								<el-form-item label="是否做过科技型企业备案" prop="record">
									<el-radio-group v-model="form_three.record">
										<el-radio-button label="1">是</el-radio-button>
										<el-radio-button label="0">否</el-radio-button>
									</el-radio-group>
								</el-form-item>
								<el-form-item label="企业进销项发票是否一致" prop="invoice">
									<el-radio-group v-model="form_three.invoice">
										<el-radio-button label="1">是</el-radio-button>
										<el-radio-button label="0">否</el-radio-button>
									</el-radio-group>
								</el-form-item>
								<el-form-item label="是否有研发团队" prop="team">
									<el-radio-group v-model="form_three.team">
										<el-radio-button label="1">是</el-radio-button>
										<el-radio-button label="0">否</el-radio-button>
									</el-radio-group>
								</el-form-item>
								<el-form-item label="是否制定过行业标准" prop="standard">
									<el-radio-group v-model="form_three.standard">
										<el-radio-button label="1">是</el-radio-button>
										<el-radio-button label="0">否</el-radio-button>
									</el-radio-group>
								</el-form-item>
								<el-form-item label="是否有研发费归集" prop="development">
									<el-radio-group v-model="form_three.development">
										<el-radio-button label="1">是</el-radio-button>
										<el-radio-button label="0">否</el-radio-button>
									</el-radio-group>
								</el-form-item>
								<el-form-item label="收入是否超过2000万" prop="income">
									<el-radio-group v-model="form_three.income">
										<el-radio-button label="1">是</el-radio-button>
										<el-radio-button label="0">否</el-radio-button>
									</el-radio-group>
								</el-form-item>
								<el-form-item label="近三年有没有重大安全事故" prop="accident">
									<el-radio-group v-model="form_three.accident">
										<el-radio-button label="1">是</el-radio-button>
										<el-radio-button label="0">否</el-radio-button>
									</el-radio-group>
								</el-form-item>
								<el-form-item label="研发费用辅助帐是否编制" prop="compile">
									<el-radio-group v-model="form_three.compile">
										<el-radio-button label="1">是</el-radio-button>
										<el-radio-button label="0">否</el-radio-button>
									</el-radio-group>
								</el-form-item>
							</div>
							<el-form-item class="formButton">
								<el-button type="primary" @click="nextStep(-2, '')">上一步</el-button>
								<el-button type="primary" @click="submit('form_three')">提交资料</el-button>
							</el-form-item>
						</div>
					</el-form>
				</div>
				<div class="steps">
					<el-steps direction="vertical" :active="active">
						<el-step title="步骤 1" icon="el-icon-edit"></el-step>
						<el-step title="步骤 2" icon="el-icon-edit-outline"></el-step>
						<el-step title="提交表单" icon="el-icon-upload"></el-step>
					</el-steps>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Navlogo from '../components/navLogo'
import Location from '../components/location'
import { addEnterprise, industryList, policyList } from '../api/form'
import areaList from '../assets/areaList.js'
/* 按照上下步分为3个表单 提交时解构 ,添加到一个对象中 */
export default {
	name: 'Advisory',
	data() {
		return {
			showLocation: '4',
			policy: {
				page: '',
				pagesize: '',
				department_name: '',
				start_time: '',
				end_time: '',
				name: '',
			},
			form_one: {},
			form_two: {},
			form_three: {},
			options_area: areaList,
			options_industry: [],
			options_policy: [],
			isShow: '1',
			active: 1,
			rules_one: {
				name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
				region_id: [{ required: true, message: '请选择地区', trigger: 'change' }],
				industry_id: [{ required: true, message: '请选择行业', trigger: 'change' }],
				policy_id: [{ required: true, message: '请选择政策', trigger: 'change' }],
				credit_code: [{ required: true, message: '请输入信用代码', trigger: 'blur' }],
				sales: [{ required: true, message: '请输入销售额', trigger: 'blur' }],
				science: [{ required: true, message: '请输入转化率', trigger: 'blur' }],
				wage: [{ required: true, message: '请输入体现人数', trigger: 'blur' }],
				growth: [{ required: true, message: '请输入体现人数', trigger: 'blur' }],
			},
			rules_two: {
				ratal: [{ required: true, message: '请输入纳税额', trigger: 'blur' }],
				number: [{ required: true, message: '请输入企业人数', trigger: 'blur' }],
				security: [{ required: true, message: '请输入社保人', trigger: 'blur' }],
				tax: [{ required: true, message: '请输入个税人数', trigger: 'blur' }],
				patent: [{ required: true, message: '请输入专利数量', trigger: 'blur' }],
				type: [{ required: true, message: '请输入类别', trigger: 'change' }],
				assets: [{ required: true, message: '请输入年度资产', trigger: 'blur' }],
				product: [{ required: true, message: '请输入比例', trigger: 'blur' }],
				knowledge: [{ required: true, message: '请输入比例', trigger: 'change' }],
			},
			rules_three: {
				enterprise_income: [{ required: true, message: '请输入比例', trigger: 'blur' }],
				establish_time: [{ required: true, message: '请输入日期', trigger: 'blur' }],
				record: [{ required: true, message: '请选择企业备案', trigger: 'change' }],
				invoice: [{ required: true, message: '请选择发票', trigger: 'change' }],
				team: [{ required: true, message: '请选择团队', trigger: 'change' }],
				standard: [{ required: true, message: '请选择行业标准', trigger: 'change' }],
				development: [{ required: true, message: '请选择研发费归集', trigger: 'change' }],
				income: [{ required: true, message: '请选择收入', trigger: 'change' }],
				accident: [{ required: true, message: '请选择收入', trigger: 'change' }],
				compile: [{ required: true, message: '请选择收入', trigger: 'change' }],
			},
		}
	},
	components: {
		Navlogo,
		Location,
	},
	watch: {},
	created() {
		this.industryList()
		this.policyList()
	},
	mounted() {},
	methods: {
		industryList() {
			industryList().then((res) => {
				this.options_industry = res
			})
		},
		policyList() {
			policyList(this.policy).then((res) => {
				this.options_policy = res
			})
		},
		nextStep(key, formName) {
			switch (key) {
				case 2:
					this.$refs[formName].validate((valid) => {
						if (valid) {
							this.isShow = '2'
							this.active = 2
						}
					})
					break
				case 3:
					this.$refs[formName].validate((valid) => {
						if (valid) {
							this.isShow = '3'
							this.active = 3
						}
					})
					break
				case -1:
					this.isShow = '1'
					this.active = 1
					break
				case -2:
					this.isShow = '2'
					this.active = 2
					break
				default:
					break
			}
		},
		submit(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					let areaID = this.form_one.region_id
					let form = Object.assign(this.form_one, this.form_two, this.form_three)
					delete form.region_id
					this.$set(form, 'province', areaID[0])
					this.$set(form, 'city', areaID[1])
					this.$set(form, 'district', areaID[2])
					this.$set(form, 'department_id', '')
					addEnterprise(form).then((res) => {
						sessionStorage.setItem('tableData', JSON.stringify(res))
						this.$router.push({
							path: '/advisoryResult',
							query: {
								name: this.form_one.name,
							},
						})
					})
				}
			})
		},
	},
}
</script>

<style scoped lang="scss">
.advisory {
	width: 100%;
	padding-top: 80px;
	.advisory_main {
		width: 1200px;
		margin: 0 auto;
		.contain {
			display: flex;
			.form {
				width: 85%;
				padding-top: 20px;
				box-sizing: border-box;
				.form_content {
					width: 100%;
					height: 650px;
				}
				::v-deep .el-form-item__label {
					padding: 0 40px 0 0;
				}
				::v-deep .el-form-item__content {
					width: 600px;
					text-align: left;
				}
				::v-deep .selectClass.el-cascader {
					width: 600px;
				}
				::v-deep .el-select {
					width: 600px;
				}
				::v-deep .el-radio-button {
					margin-right: 36px;
				}
				::v-deep .el-radio-button__inner {
					width: 100px;
					border-left: 1px solid #dcdfe6;
					box-shadow: none;
					border-radius: 4px;
				}
				::v-deep .el-form-item.formButton .el-form-item__content {
					text-align: center;
					.el-button {
						width: 160px;
					}
				}
			}
			.steps {
				width: 15%;
				height: 460px;
				box-sizing: border-box;
				padding: 50px 0;
				display: flex;
			}
		}
	}
}
// .result {
// 	width: 100%;
// 	height: calc(100% - 80px);
// 	padding-top: 80px;
// 	background-color: #f2f5f4;
// 	.result_main {
// 		width: 1200px;
// 		margin: 0 auto;
// 		background-color: #ffffff;
// 		position: relative;
// 		.content {
// 			width: 100%;
// 			box-sizing: border-box;
// 			padding: 20px 30px 10px 30px;
// 			font-size: 18px;
// 			font-family: Source Han Sans CN;
// 			font-weight: bold;
// 			color: rgba(51, 51, 51, 1);
// 			.title {
// 				text-align: left;
// 				height: 30px;
// 			}
// 			.prompt {
// 				height: 40px;
// 				font-size: 16px;
// 				font-weight: 400;
// 			}
// 			.company,
// 			.detail {
// 				height: 40px;
// 				padding-left: 50px;
// 				display: flex;
// 				align-items: center;
// 				p {
// 					font-weight: 400;
// 					padding-left: 10px;
// 				}
// 			}
// 		}
// 		::v-deep .el-button--text {
// 			position: absolute;
// 			right: 50px;
// 			font-size: 16px;
// 			font-family: Source Han Sans CN;
// 			font-weight: bold;
// 			z-index: 666;
// 		}
// 		.table {
// 			width: 100%;
// 			box-sizing: border-box;
// 			padding: 0 30px;
// 			::v-deep .el-tabs__content {
// 				height: 500px;
// 			}
// 			::v-deep .el-tabs__item {
// 				font-size: 18px;
// 				font-family: Source Han Sans CN;
// 				font-weight: bold;
// 			}
// 			::v-deep .el-tabs__nav-wrap::after {
// 				height: 0;
// 			}
// 		}
// 	}
// }
</style>
