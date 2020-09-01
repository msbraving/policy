/* 头部导航 */
<template>
	<div class="header" :style="{ backgroundColor: headerBac }">
		<div class="header_main">
			<div class="header_lift">
				<router-link to="/">LOGO</router-link>
			</div>
			<div class="header_right">
				<div class="header_menu">
					<el-menu :default-active="activeIndex" mode="horizontal" class="el-menu-demo" @select="handleSelect" :background-color="navColor" text-color="#fff" active-text-color="#fff">
						<el-menu-item index="1">
							<router-link to="/">首页</router-link>
						</el-menu-item>
						<el-menu-item index="2">
							<router-link to="/">最新资讯</router-link>
						</el-menu-item>
						<el-menu-item index="3">
							<router-link to="/">企业模板</router-link>
						</el-menu-item>
						<el-menu-item index="4">
							<router-link to="/">代理机构</router-link>
						</el-menu-item>
						<el-menu-item index="5">
							<router-link to="/">公众号</router-link>
						</el-menu-item>
						<el-menu-item index="6">
							<router-link to="/">VIP服务</router-link>
						</el-menu-item>
						<el-menu-item index="7">
							<router-link to="/about">关于我们</router-link>
						</el-menu-item>
					</el-menu>
				</div>
				<div>
					<div class="header_login" v-if="hasToken" @click="$router.push('/login')">登录/注册</div>
					<el-dropdown v-else>
						<span class="member"> {{ member }}<i class="el-icon-arrow-down el-icon--right"></i> </span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>
								<span @click="logout">退出登录</span>
							</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
					<!-- <el-popover  placement="bottom" title="标题" width="200" trigger="click" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
						<el-button slot="reference">click 激活</el-button>
						<div>{{ member }}</div>
					</el-popover> -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { logOut } from '../api/login'
export default {
	data() {
		return {
			headerBac: '#136fdb',
			activeIndex: localStorage.getItem('activeIndex') || '1',
			navColor: '#136fdb',
			hasToken: true,
			member: localStorage.getItem('member'),
		}
	},
	created() {
		this.isHaveToken()
		// if (this.$route.name == 'Home') {
		// 	this.navColor = 'transparent'
		// } else {
		// 	this.headerBac = '#136fdb'
		// 	this.navColor = '#136fdb'
		// 	this.activeIndex = '7'
		// }
		if (this.$route.name == 'About') {
			this.activeIndex = '7'
		}
	},
	mounted() {
		window.addEventListener('scroll', this.scrollTop, true)
	},
	watch: {
		// 监听路由
		$route: function() {
			// if (this.$route.name == 'Home') {
			// this.headerBac = 'transparent'
			// this.navColor = 'transparent'
			// } else {
			// this.headerBac = '#136fdb'
			// this.navColor = '#136fdb'
			// this.activeIndex = '7'
			// }
			if (this.$route.name == 'About') {
				this.activeIndex = '7'
			}
		},
	},
	methods: {
		handleSelect(key, keyPath) {
			if (key != '7') {
				this.activeIndex = key
				sessionStorage.setItem('activeIndex', this.activeIndex)
				this.$parent.parentmethods() //调用父组件方法
			}
		},
		isHaveToken() {
			// 登录
			let token = localStorage.getItem('token')
			if (token) {
				this.hasToken = false
			} else {
				this.hasToken = true
			}
		},
		logout() {
			//退出
			localStorage.removeItem('token')
			localStorage.removeItem('member')
			this.isHaveToken()
			// logOut().then((res) => {})
		},
		scrollTop() {
			//滚动
			let scrollTop = document.documentElement.scrollTop //滚动条的高
			let documentTop = document.body.scrollHeight //全部内容的高screenHeight
			let screenHeight = window.screen.availHeight //当前屏幕的高
			// console.log(scrollTop)
			return
			if (scrollTop < 990) {
				// this.headerBac = 'transparent'
				// this.navColor = 'transparent'
				this.activeIndex = '1'
			} else if (990 < scrollTop < 2032) {
				// this.headerBac = '#136fdb'
				// this.navColor = '#136fdb'
				this.activeIndex = '2'
			} else if (2032 < scrollTop < 2694) {
				// this.headerBac = '#136fdb'
				// this.navColor = '#136fdb'
				this.activeIndex = '3'
			} else if (2694 < scrollTop < 2800) {
				// this.headerBac = '#136fdb'
				// this.navColor = '#136fdb'
				this.activeIndex = '4'
			} else if (2800 < scrollTop) {
				// this.headerBac = '#136fdb'
				// this.navColor = '#136fdb'
				this.activeIndex = '5'
			}
		},
	},
}
</script>

<style lang="scss" scoped>
.header {
	width: 100%;
	height: 80px;
	position: fixed;
	z-index: 666;
	// background-color: #136fdb;
	.header_main {
		width: 1200px;
		height: 100%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		.header_lift {
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
				// height: 100%;
				color: rgba(255, 255, 255, 1);
			}
		}
		.header_right {
			width: 800px;
			height: 100%;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			.el-menu.el-menu--horizontal {
				border-bottom: none;
			}
			a {
				display: block;
				width: 56px;
				height: 60px;
			}
			.header_login {
				width: 100px;
				height: 36px;
				background: rgba(1, 201, 207, 1);
				border-radius: 10px;
				display: flex;
				justify-content: center;
				align-items: center;
				cursor: pointer;
				div {
					font-size: 16px;
					font-family: Source Han Sans CN;
					font-weight: 400;
					color: rgba(255, 255, 255, 1);
				}
			}
			.member {
				color: #fff;
			}
		}
	}
}
</style>
