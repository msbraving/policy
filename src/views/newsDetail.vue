/* 资讯详情 */
<template>
	<div class="newsDetail">
		<Navlogo></Navlogo>
		<div class="main">
			<Location :isChildShow="showLocation"></Location>
			<!-- <div class="title">{{ form.in_title }}</div> -->
			<div v-html="form.content" class="content"></div>
			<!-- <div class="create_time">{{ form.create_time }}</div> -->
		</div>
	</div>
</template>

<script>
import Navlogo from '../components/navLogo'
import Location from '../components/location'
import { newsDetail } from '../api/home'
export default {
	data() {
		return {
			showLocation: '6',
			form: {},
		}
	},
	components: {
		Navlogo,
		Location,
	},
	watch: {},
	created() {
		this.newsDetail()
	},
	mounted() {},
	methods: {
		newsDetail() {
			let id = this.$route.query.id
			newsDetail(id).then((res) => {
				this.form = res
			})
		},
		// showHtml(str) {
		// 	return str
		// 		.replace(str ? /&(?!#?\w+;)/g : /&/g, '&amp;')
		// 		.replace(/&amp;nbsp;/g, '')
		// 		.replace(/&lt;/g, '<')
		// 		.replace(/&gt;/g, '>')
		// 		.replace(/&quot;/g, '"')
		// 		.replace(/&#39;/g, "'")
		// },
	},
}
</script>

<style scoped lang="scss">
.newsDetail {
	width: 100%;
	padding-top: 80px;
	.main {
		width: 1200px;
		margin: 0 auto;
		// .title {
		// 	width: 100%;
		// 	height: 50px;
		// 	line-height: 50px;
		// 	text-align: center;
		// 	font-size: 20px;
		// 	font-family: PingFang SC;
		// 	font-weight: 700;
		// 	color: #333333;
		// }
		.content {
			// width: 80%;
			// margin: 0 auto;
			// font-size: 18px;
			// line-height: 30px;
			// text-indent: 2em;
			text-align: left;
		}
		// .create_time {
		// 	width: 100%;
		// 	height: 50px;
		// 	line-height: 50px;
		// 	text-align: right;
		// }
	}
}
</style>
