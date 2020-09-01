/* 头部搜索 */
<template>
	<div class="navLogo">
		<div class="navLogo_main">
			<div class="navLogo_left">
				<router-link to="/">LOGO</router-link>
			</div>
			<div class="navLogo_center" v-if="$route.name == 'Company' || $route.name == 'Policy'">
				<el-input placeholder="请输入搜索内容" prefix-icon="el-icon-search" v-model="searchContent"> </el-input>
			</div>
			<div class="navLogo_right" v-if="$route.name == 'Company' || $route.name == 'Policy'">
				<el-button type="primary" plain>立即查询</el-button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			searchContent: '',
		}
	},
	components: {},
	watch: {},
	created() {},
	mounted() {},
	methods: {},
}
</script>

<style scoped lang="scss">
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
</style>
