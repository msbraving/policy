/* 登录 */
<template>
	<div class="login">
		<img src="../assets/login.png" alt="" />
		<div class="login_contain">
			<div class="login_title">龙头企业评估平台</div>
			<div class="account">
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
					<el-form-item prop="member">
						<el-input v-model="ruleForm.member" placeholder="请输入手机号" prefix-icon="el-icon-mobile-phone" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item prop="password">
						<el-input type="password" v-model="ruleForm.password" placeholder="请输入密码" prefix-icon="el-icon-lock" autocomplete="off"></el-input>
					</el-form-item>
				</el-form>
				<div class="aboutWords">
					<el-checkbox v-model="checked">记住密码</el-checkbox>
					<div>忘记密码</div>
				</div>
				<el-button type="primary" @click="login('ruleForm')">登录</el-button>
				<div class="aboutRegister" @click="goRegister()">
					还没有账号?立即注册
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { login } from '../api/login'
export default {
	name: 'Login',
	data() {
		let checkPhone = (rule, value, callback) => {
			//手机号验证规则
			if (!value) {
				return callback(new Error('手机号不能为空'))
			} else {
				const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
				if (reg.test(value)) {
					callback()
				} else {
					return callback(new Error('请输入正确的手机号'))
				}
			}
		}
		let checkPass = (rule, value, callback) => {
			//密码验证规则
			if (value === '') {
				callback(new Error('请输入密码'))
			} else {
				callback()
			}
		}
		return {
			checked: false,
			ruleForm: {
				member: '',
				password: '',
			},
			rules: {
				//验证规则
				member: [{ validator: checkPhone, trigger: 'blur' }],
				password: [{ validator: checkPass, trigger: 'blur' }],
			},
		}
	},
	components: {},
	watch: {},
	created() {},
	mounted() {},
	methods: {
		goRegister() {
			let fromName = this.$route.query.name
			if (!fromName) {
				this.$router.push('/register')
			} else {
				this.$router.push({
					path: '/register',
					query: {
						name: fromName,
					},
				})
			}
		},
		login(ruleForm) {
			this.$refs[ruleForm].validate((valid) => {
				if (valid) {
					login(this.ruleForm).then((res) => {
						localStorage.setItem('token', res.token)
						localStorage.setItem('member', res.member)
						this.$message({
							message: '登录成功',
							type: 'success',
						})
						this.$router.go(-1)
						// this.$router.push('/home')
					})
				}
			})
		},
	},
	// beforeRouteLeave(to, from, next) {
	// console.log(to)
	// console.log(from)
	// console.log(next)
	// },
}
</script>

<style scoped lang="scss">
.login {
	width: 100%;
	height: 100%;
	position: relative;
	img {
		width: 100%;
		height: 100%;
	}
	.login_contain {
		position: absolute;
		width: 320px;
		top: 25%;
		left: 60%;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		.login_title {
			width: 100%;
			height: 70px;
			line-height: 70px;
			text-align: center;
			font-size: 36px;
			font-family: Adobe Heiti Std;
			font-weight: normal;
			color: rgba(19, 141, 227, 1);
		}
		.account {
			width: 100%;
			box-sizing: border-box;
			padding-top: 50px;
			::v-deep .el-form-item__content {
				margin-left: 0 !important;
			}
			.aboutWords {
				display: flex;
				justify-content: space-between;
				font-size: 16px;
				font-family: Adobe Heiti Std;
				font-weight: normal;
				color: rgba(153, 153, 153, 1);
				line-height: 38px;
				cursor: pointer;
				::v-deep .el-checkbox__label {
					font-size: 16px;
					font-family: Adobe Heiti Std;
					font-weight: normal;
					color: rgba(153, 153, 153, 1);
					line-height: 38px;
				}
			}
			.el-button {
				width: 100%;
			}
			.aboutRegister {
				width: 100%;
				box-sizing: border-box;
				padding-top: 50px;
				font-size: 16px;
				font-family: Adobe Heiti Std;
				font-weight: normal;
				color: rgba(153, 153, 153, 1);
				line-height: 38px;
				cursor: pointer;
				a {
					color: #136fda;
				}
			}
		}
	}
}
</style>
