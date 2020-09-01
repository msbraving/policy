<template>
	<div id="app">
		<div id="nav">
			<!-- <router-link to="/">首页</router-link>
      <router-link to="/news">最新资讯</router-link>
      <router-link to="/template">企业模板</router-link>
      <router-link to="/agency">代理机构</router-link>
      <router-link to="/public">公众号</router-link>
      <router-link to="/VIP">VIP服务</router-link>
      <router-link to="/about">关于我们</router-link> -->
			<Header v-if="$route.name == 'Home' || $route.name == 'About'"></Header>
		</div>
		<router-view />
	</div>
</template>

<script>
import Header from './components/header'

export default {
	data() {
		return {}
	},
	components: {
		Header,
	},
	created() {},
	mounted() {},
	methods: {
		parentmethods() {
			// 调用 home 中函数
			this.$children[1].goIndex()
		},
	},
}
</script>

<style lang="scss">
html,
body {
	width: 100%;
	height: 100%;
	margin: 0;
}
::-webkit-scrollbar {
	width: 5px;
}
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
	border-radius: 10px;
	background-color: rgba(0, 0, 0, 0.1);
}
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	background-color: rgba(0, 0, 0, 0.1);
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	width: 100%;
	height: 100%;
	a {
		text-decoration: none;
	}
}
</style>
