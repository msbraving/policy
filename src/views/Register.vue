/* 登录 */
<template>
	<div class="register">
		<img src="../assets/login.png" alt="" />
		<div class="register_contain">
			<div class="register_title">龙头企业评估平台</div>
			<div class="account">
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
					<el-form-item prop="phone">
						<el-input v-model="ruleForm.phone" placeholder="请输入手机号" prefix-icon="el-icon-mobile-phone" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item prop="code">
						<el-input type="phone" v-model="ruleForm.code" placeholder="请输入验证码" class="code" prefix-icon="el-icon-message" autocomplete="off"></el-input>
						<el-button class="sendCode" type="primary" round @click="send()" :disabled="disabled">{{ isSend ? time + 'S' : '获取验证码' }}</el-button>
					</el-form-item>
					<el-form-item prop="password">
						<el-input type="password" v-model="ruleForm.password" placeholder="请输入密码" prefix-icon="el-icon-lock" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item prop="password_re">
						<el-input type="password" v-model="ruleForm.password_re" placeholder="请确认密码" prefix-icon="el-icon-lock" autocomplete="off"></el-input>
					</el-form-item>
				</el-form>
				<el-button type="primary" class="yes" @click="registe('ruleForm')">确认</el-button>
			</div>
		</div>
	</div>
</template>

<script>
import { sendCode, register } from '../api/login'
export default {
	name: 'Register',
	data() {
		var checkPhone = (rule, value, callback) => {
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
		var checkCode = (rule, value, callback) => {
			if (!value) {
				return callback(new Error('验证码不能为空'))
			} else {
				const reg = /^\d{6}$/
				if (reg.test(value)) {
					callback()
				} else {
					return callback(new Error('请输入正确的6位验证码'))
				}
			}
		}
		var checkPass = (rule, value, callback) => {
			//密码验证规则
			if (value === '') {
				callback(new Error('请输入密码'))
			} else {
				if (this.ruleForm.password_re !== '') {
					this.$refs.ruleForm.validateField('password_re')
				}
				callback()
			}
		}
		var checkPass2 = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请再次输入密码'))
			} else if (value !== this.ruleForm.password) {
				callback(new Error('两次输入密码不一致!'))
			} else {
				callback()
			}
		}
		return {
			ruleForm: {
				phone: '',
				code: '',
				password: '',
				password_re: '',
				invite: '',
				nick_name: '',
			},
			timer: null,
			isSend: false,
			disabled: false,
			time: 60,
			rules: {
				phone: [{ validator: checkPhone, trigger: 'blur' }],
				code: [{ validator: checkCode, trigger: 'blur' }],
				password: [{ validator: checkPass, trigger: 'blur' }],
				password_re: [{ validator: checkPass2, trigger: 'blur' }],
			},
		}
	},
	components: {},
	watch: {},
	created() {},
	mounted() {},
	methods: {
		send() {
			//发送验证码
			if (this.ruleForm.phone == '') {
				this.$message.error('请先输入手机号')
				return
			}
			this.isSend = true
			this.disabled = true
			this.time = 60
			sendCode(this.ruleForm.phone).then((res) => {
				this.timer = setInterval(() => {
					this.time--
					if (this.time == 0) {
						this.isSend = false
						this.disabled = false
						clearInterval(this.timer)
						this.timer = null
					}
				}, 1000)
			})
		},
		registe(ruleForm) {
			//注册
			this.$refs[ruleForm].validate((valid) => {
				if (valid) {
					//验证通过
					let form = {
						code: this.ruleForm.code,
						phone: this.ruleForm.phone,
						password: this.ruleForm.password,
						password_re: this.ruleForm.password_re,
					}
					register(this.ruleForm).then((res) => {
						this.$message({
							message: '注册成功',
							type: 'success',
						})
						localStorage.setItem('token', res.token)
						localStorage.setItem('member', res.member)
						let fromName = this.$route.query.name
						if (fromName == 'fromAdvisoryResult') {
							this.$router.push('/advisoryResult')
						} else {
							this.$router.push('/')
						}
						return
					})
				} else {
					//验证不通过
					return false
				}
			})
		},
	},
}
</script>

<style scoped lang="scss">
.register {
	width: 100%;
	height: 100%;
	position: relative;
	img {
		width: 100%;
		height: 100%;
	}
	.register_contain {
		position: absolute;
		width: 320px;
		top: 25%;
		left: 60%;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		.register_title {
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
			.code.el-input {
				width: 60%;
			}
			.el-button.sendCode {
				width: 40%;
			}
			.el-button.yes {
				width: 100%;
			}
		}
	}
}
</style>
