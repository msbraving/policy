/* 位置 */
<template>
	<div class="location">
		<p>当前位置 :</p>
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/' }"> &nbsp;首页</el-breadcrumb-item>
			<el-breadcrumb-item v-if="isShow == '1'">企业查询</el-breadcrumb-item>
			<el-breadcrumb-item v-if="isShow == '1'">查询结果</el-breadcrumb-item>
			<el-breadcrumb-item v-if="isShow == '2'">政策查询</el-breadcrumb-item>
			<el-breadcrumb-item v-if="isShow == '2'">查询结果</el-breadcrumb-item>
			<el-breadcrumb-item v-if="isShow == '3'">查询结果</el-breadcrumb-item>
			<el-breadcrumb-item v-if="isShow == '3'">详情</el-breadcrumb-item>
			<el-breadcrumb-item v-if="isShow == '4'">免费咨询</el-breadcrumb-item>
			<el-breadcrumb-item v-if="isShow == '5'">免费咨询</el-breadcrumb-item>
			<el-breadcrumb-item v-if="isShow == '5'">咨询结果</el-breadcrumb-item>
			<el-breadcrumb-item v-if="isShow == '6'">动态详情</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
</template>

<script>
export default {
	data() {
		return {}
	},
	props: ['isChildShow'],
	components: {},
	watch: {},
	created() {
		this.isShow = this.isChildShow
	},
	mounted() {},
	methods: {},
}
</script>
<style scoped lang="scss">
.location {
	width: 100%;
	height: 50px;
	box-sizing: border-box;
	padding-left: 30px;
	border-bottom: 1px solid rgba(226, 226, 226, 1);
	display: flex;
	align-items: center;
	p {
		width: 90px;
		text-align: left;
		font-size: 18px;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}
	.el-breadcrumb {
		font-size: 18px;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}
	::v-deep .el-breadcrumb__inner.is-link {
		font-weight: 500;
	}
}
</style>
