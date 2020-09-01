<template>
	<div class="about">
		<!-- <Header></Header> -->
		<div class="about_image_one">
			<img src="../assets/about_image/commitment.png" alt="" />
		</div>
		<div class="about_title">
			<div class="title_cn">我们的承诺</div>
			<div class="title_zn">Our commitment</div>
			<div class="title_desc">
				<p>为了解决国内外客户取得认证以及各国的非关税技术壁垒，已和35个国家67个试验认证机构签订了协定(MOU），为获得 海外规格认证，提供各种安全及质量认证、工厂审查、信息、技术教育等支援。</p>
			</div>
		</div>
		<div class="about_commitment">
			<div class="commitment_item" v-for="(item, index) in commitmentList" :key="index">
				<img :src="item.imgUrl" alt="" />
				<div>{{ item.title }}</div>
				<p>{{ item.desc }}</p>
			</div>
		</div>
		<div class="about_image_two">
			<div class="image_contain">
				<div class="text_top one">提供一站式服务</div>
				<div class="text_bottom one">公司注册 行业认证 代办服务 代理记账</div>
			</div>
		</div>
		<div class="about_title">
			<div class="title_cn">我们的服务</div>
			<div class="title_zn">Our services</div>
			<div class="title_desc">
				<p>通过试验评价技术的支援以提高产业技术而成 立的试验评价机构</p>
			</div>
		</div>
		<div class="about_server">
			<div class="server_item" v-for="(item, index) in serverList" :key="index">
				<img :src="item.imgUrl" alt="" />
				<div>{{ item.title }}</div>
				<p>{{ item.desc }}</p>
			</div>
		</div>
		<div class="about_image_two">
			<div class="image_contain">
				<div class="text_top two">优质 高效</div>
				<div class="text_bottom two">优质的客户服务 高效的办事效率</div>
			</div>
		</div>
		<div class="about_title">
			<div class="title_cn">企业新闻</div>
			<div class="title_zn">Corporate news</div>
			<div class="title_desc">
				<p>公司新闻实时更新，我们有最新的行业相关资讯</p>
			</div>
		</div>
		<div class="about_news">
			<img src="../assets/about_image/news.png" alt="" />
			<div class="news_contain">
				<div class="news_item" v-for="(item, index) in newsList" :key="index">
					<div class="news_item_date">{{ item.date }}</div>
					<div class="news_item_title">{{ item.title }}</div>
					<div class="news_item_year">{{ item.year }}</div>
					<p class="news_item_desc">{{ item.desc }}</p>
				</div>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
import Header from '../components/header'
import Footer from '../components/footer'
export default {
	name: 'About',
	data() {
		return {
			commitmentList: [
				{
					imgUrl: require('../assets/about_image/TARGET.png'),
					title: '一对一指导',
					desc: '我们专注品质与服务品质与服务决胜制高点细节决定成败我点细节决定成败',
				},
				{
					imgUrl: require('../assets/about_image/COMPASS.png'),
					title: '安全保障',
					desc: '我们专注品质与服务品质与服务决胜制高点细节决定成败我点细节决定成败',
				},
				{
					imgUrl: require('../assets/about_image/GLOBE.png'),
					title: '全程化透明',
					desc: '我们专注品质与服务品质与服务决胜制高点细节决定成败我点细节决定成败',
				},
			],
			serverList: [
				{
					imgUrl: require('../assets/about_image/server_1.png'),
					title: '知识产权',
					desc: '保护本国产业的各种认证制度',
				},
				{
					imgUrl: require('../assets/about_image/server_2.png'),
					title: '工商服务',
					desc: '保护本国产业的各种认证制度',
				},
				{
					imgUrl: require('../assets/about_image/server_3.png'),
					title: '知识产权',
					desc: '保护本国产业的各种认证制度',
				},
				{
					imgUrl: require('../assets/about_image/server_4.png'),
					title: '财税服务',
					desc: '保护本国产业的各种认证制度',
				},
				{
					imgUrl: require('../assets/about_image/server_5.png'),
					title: '法律服务',
					desc: '保护本国产业的各种认证制度',
				},
				{
					imgUrl: require('../assets/about_image/server_6.png'),
					title: '商账管理',
					desc: '保护本国产业的各种认证制度',
				},
			],
			newsList: [
				{
					year: '2020',
					date: '05-30',
					title: '关注社区我们也在行动',
					desc: ' 为了解决国内外客户取得认证以及各国的非关税技术壁垒，已和35个国家67个试验认证机构签订了协定',
				},
				{
					year: '2020',
					date: '05-30',
					title: '慈善我们也在行动',
					desc: ' 为了解决国内外客户取得认证以及各国的非关税技术壁垒，已和35个国家67个试验认证机构签订了协定',
				},
				{
					year: '2020',
					date: '05-30',
					title: '去相信，去证明，梦想一触即发',
					desc: ' 为了解决国内外客户取得认证以及各国的非关税技术壁垒，已和35个国家67个试验认证机构签订了协定',
				},
			],
		}
	},
	components: {
		Header,
		Footer,
	},
	created() {},
	mounted() {},
	methods: {},
}
</script>

<style scoped lang="scss">
.about {
	width: 100%;
	padding-top: 80px;
	.about_image_one {
		width: 100%;
		height: auto;
		img {
			width: 100%;
			height: auto;
			object-fit: cover;
		}
	}
	.about_title {
		width: 100%;
		// height: 280px;
		box-sizing: border-box;
		padding-top: 120px;
		.title_cn {
			width: 100%;
			height: 55px;
			font-size: 40px;
			font-family: Source Han Sans CN;
			font-weight: bold;
			color: rgba(69, 69, 69, 1);
		}
		.title_zn {
			width: 100%;
			height: 38px;
			font-size: 24px;
			font-family: SourceHanSansSC;
			font-weight: 500;
			color: rgba(69, 69, 69, 1);
		}
		.title_desc {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			p {
				width: 810px;
				height: 60px;
				font-size: 16px;
				font-family: SourceHanSansSC;
				font-weight: 400;
				color: rgba(136, 136, 136, 1);
			}
		}
	}
	.about_image_two {
		width: 100%;
		height: 500px;
		display: flex;
		justify-content: center;
		align-items: center;
		background: url(../assets/about_image/services.png) no-repeat center center;
		.image_contain {
			width: 801px;
			height: 261px;
			font-family: SourceHanSansSC;
			color: rgba(255, 255, 255, 1);
			font-weight: 500;
			.text_top.one {
				width: 100%;
				height: 130px;
				line-height: 130px;
				text-align: center;
				font-size: 66px;
			}
			.text_bottom.one {
				width: 100%;
				height: 130px;
				line-height: 130px;
				text-align: center;
				font-size: 31px;
			}
			.text_top.two {
				width: 100%;
				height: 150px;
				line-height: 150px;
				text-align: center;
				font-size: 97px;
			}
			.text_bottom.two {
				width: 100%;
				height: 110px;
				line-height: 110px;
				text-align: center;
				font-size: 49px;
			}
		}
	}
	.about_commitment {
		width: 900px;
		height: auto;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-content: center;
		.commitment_item {
			width: 200px;
			height: auto;
			img {
				width: 100px;
				height: 100px;
			}
			div {
				height: 66px;
				line-height: 66px;
				text-align: center;
				font-size: 20px;
				font-family: SourceHanSansSC;
				font-weight: bold;
				color: rgba(51, 51, 51, 1);
			}
			p {
				height: 63px;
				font-size: 14px;
				word-break: break-word;
				font-family: SourceHanSansSC;
				font-weight: 400;
				color: rgba(135, 135, 135, 1);
			}
		}
	}
	.about_server {
		width: 980px;
		height: auto;
		margin: 0 auto;
		padding-left: 20px;
		box-sizing: border-box;
		display: flex;
		flex-wrap: wrap;
		.server_item {
			width: 300px;
			height: auto;
			margin: 0 20px 30px 0;
			img {
				width: 300px;
				height: 220px;
			}
			div {
				height: 40px;
				line-height: 40px;
				text-align: center;
				font-size: 18px;
				font-family: SourceHanSansSC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
			}
			p {
				font-size: 14px;
				font-family: SourceHanSansSC;
				font-weight: 400;
				color: rgba(135, 135, 135, 1);
			}
		}
	}
	.about_news {
		width: 1200px;
		height: auto;
		margin: 0 auto;
		box-sizing: border-box;
		padding-bottom: 50px;
		display: flex;
		justify-content: space-between;
		img {
			width: 580px;
			height: 360px;
		}
		.news_contain {
			width: 520px;
			height: 360px;
			box-sizing: border-box;
			padding: 15px 0;
			display: flex;
			flex-wrap: wrap;
			.news_item {
				width: 100%;
				display: flex;
				flex-wrap: wrap;
				font-family: SourceHanSansSC;
				font-weight: 500;
				color: rgba(50, 50, 50, 1);
				.news_item_date {
					width: 120px;
					height: 30px;
					line-height: 30px;
					text-align: left;
					font-size: 28px;
				}
				.news_item_title {
					width: 400px;
					height: 25px;
					line-height: 25px;
					text-align: left;
					font-size: 16px;
				}
				.news_item_year {
					width: 120px;
					height: 50px;
					line-height: 50px;
					text-align: left;
					font-size: 14px;
				}
				.news_item_desc {
					width: 400px;
					height: 80px;
					line-height: 22px;
					text-align: left;
					font-size: 16px;
					font-weight: 400;
					color: rgba(162, 162, 162, 1);
				}
			}
		}
	}
}
</style>
