/* 底部 */
<template>
	<div class="footer">
		<!-- <div class="footer_link">
			友情链接:
			<div class="links" v-for="(item, index) in links" :key="index">
				<a :href="item.url" target="_blank">{{ item.title }}</a>
			</div>
		</div> -->
		<div class="footer_link">
			相关网站链接:
			<div class="links" v-for="(every, index) in govLinks" :key="index">
				<a :href="every.url" target="_blank">{{ every.title }}</a>
            </div>
		</div>
		<div class="footer_record">
			<a href="https://beian.miit.gov.cn" target="_blank">备案号：豫ICP备19023096号</a>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Footer',
	data() {
		return {
			links: [
				{ title: '科技部', url: 'http://www.most.gov.cn/' },
				{ title: '发改委', url: 'https://www.ndrc.gov.cn/' },
				{ title: '工信部', url: 'http://www.miit.gov.cn/' },
				{ title: '科技技术厅', url: 'http://kjt.henan.gov.cn/' },
				{ title: '高新技术企业协会', url: 'http://kjt.henan.gov.cn/gqrd/' },
				{ title: '天眼查', url: 'https://www.tianyancha.com/' },
			],
			govLinks: [
				{ title: '科技部', url: 'http://www.most.gov.cn/' },
				{ title: '发改委', url: 'https://www.ndrc.gov.cn/' },
				{ title: '工信部', url: 'http://www.miit.gov.cn/' },
				{ title: '科技技术厅', url: 'http://kjt.henan.gov.cn/' },
				{ title: '高新技术企业协会', url: 'http://kjt.henan.gov.cn/gqrd/' },
				{ title: '天眼查', url: 'https://www.tianyancha.com/' },
			],
		}
	},
	components: {},
	created() {},
	mounted() {},
	methods: {},
}
</script>

<style scoped lang="scss">
.footer {
	width: 100%;
	height: 100px;
	background-color: #232323;
	font-size: 16px;
	font-family: Source Han Sans CN;
	font-weight: 400;
	color: rgba(255, 255, 255, 1);
	.footer_link {
		width: 100%;
		height: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		.links {
			cursor: pointer;
			margin-left: 10px;
		}
	}
	.footer_record {
		width: 100%;
		height: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}
	a {
		color: #ffffff;
	}
}
</style>
