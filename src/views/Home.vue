<template>
	<div class="home">
		<div class="home_swiper" ref="index_1">
			<el-carousel :interval="5000" arrow="always" :height="swiperHeight + 'px'">
				<el-carousel-item v-for="(item, index) in swiperList" :key="index">
					<p @click="$router.push('/advisory')">免费评估</p>
					<img :src="item.image" alt="" @click="$router.push('/advisory')" />
				</el-carousel-item>
			</el-carousel>
		</div>
		<div class="home_sesrch">
			<div class="city">选择城市</div>
			<el-cascader
				class="selectArea"
				v-model="region_id"
				:options="options_area"
				:props="{
					checkStrictly: true,
					value: 'id',
					label: 'title',
					children: 'son',
					emitPath: false,
				}"
			></el-cascader>
			<el-button type="primary" @click="search(3)" round>区域政策查询</el-button>
		</div>
		<div class="home_hotCity">
			<div class="city">热门城市</div>
			<div class="city_item" @click="selectHotCity(110100)">北京</div>
			<div class="city_item" @click="selectHotCity(310100)">上海</div>
			<div class="city_item" @click="selectHotCity(440100)">广州</div>
			<div class="city_item" @click="selectHotCity(440300)">深圳</div>
			<div class="city_item" @click="selectHotCity(320500)">苏州</div>
			<div class="city_item" @click="selectHotCity(210200)">大连</div>
			<div class="city_item" @click="selectHotCity(500100)">重庆</div>
			<div class="city_item" @click="selectHotCity(420100)">武汉</div>
			<div class="city_item" @click="selectHotCity(330100)">杭州</div>
			<div class="city_item" @click="selectHotCity(320100)">南京</div>
			<div class="city_item" @click="selectHotCity(610100)">西安</div>
			<div class="city_item" @click="selectHotCity(410100)">郑州</div>
			<div class="city_item" @click="selectHotCity(430100)">长沙</div>
		</div>
		<div class="home_sesrch">
			<el-input placeholder="查企业输入企业名称" prefix-icon="el-icon-search" v-model="searchContent1"> </el-input>
			<el-button type="primary" @click="search(1)" round>企业查询</el-button>
		</div>
		<div class="home_sesrch">
			<el-input placeholder="查政策输入政策名称" prefix-icon="el-icon-search" v-model="searchContent2"> </el-input>
			<el-button type="primary" @click="search(2)" round>政策查询</el-button>
		</div>
		<div class="home_title" ref="index_2">
			<div class="title_zn">Latest News</div>
			<div class="title_cn">最新资讯</div>
		</div>
		<div class="home_news">
			<div class="home_news_left">
				<el-tabs v-model="activeName" @tab-click="handleClick">
					<el-tab-pane label="政府最新政策资讯" name="first">
						<div class="item_list" v-for="(item, index) in govList" :key="index">
							<div class="dot"></div>
							<div class="desc" @click="goNewsDetail(item.id)">{{ item.in_title }}</div>
							<!-- <a :href="item.content" target="_blank" class="desc">{{ item.in_title }}</a> -->
							<div class="date">{{ item.create_time }}</div>
						</div>
					</el-tab-pane>
					<el-tab-pane label="公司最新行业资讯" name="second">
						<div class="item_list" v-for="(item, index) in indList" :key="index">
							<div class="dot"></div>
							<div class="desc" @click="goNewsDetail(item.id)">{{ item.in_title }}</div>
							<div class="date">{{ item.create_time }}</div>
						</div>
					</el-tab-pane>
					<el-tab-pane label="最新模块展示" name="third">
						<div class="item_list" v-for="(item, index) in newTemList" :key="index">
							<div class="dot"></div>
							<div class="desc" @click="goNewsDetail(item.id)">{{ item.in_title }}</div>
							<div class="date">{{ item.create_time }}</div>
						</div>
					</el-tab-pane>
				</el-tabs>
			</div>
			<div class="home_news_right">
				<img src="../assets/home_image/legal.png" alt="" />
			</div>
		</div>
		<div class="home_assess">
			<img src="../assets/home_image/assess.png" alt="" />
			<p @click="$router.push('/advisory')">免费评估</p>
		</div>
		<div class="home_title" ref="index_3">
			<div class="title_zn">Enterprise Template</div>
			<div class="title_cn">企业模板</div>
		</div>
		<div class="home_template">
			<div class="item_list" v-for="(item, index) in tempList" :key="index">
				<div class="dot"></div>
				<div class="desc" @click="goNewsDetail(item.id)">{{ item.in_title }}</div>
				<div class="date">{{ item.create_time }}</div>
			</div>
		</div>
		<div class="home_title" ref="index_4">
			<div class="title_zn">Agency</div>
			<div class="title_cn">代理机构</div>
		</div>
		<div class="home_agency">
			<div class="item_agency" v-for="(item, index) in agencyList" :key="index">
				<img class="comapnyIcon" :src="item.image" alt="" />
				<div class="comapnyName">{{ item.in_title }}</div>
			</div>
		</div>
		<div class="home_contact" ref="index_5">
			<div class="contact_main">
				<div class="contact_left">
					<div class="contact_left_item">
						<div class="contact_left_item_one">关于我们</div>
						<div class="contact_left_item_two">名词百科</div>
						<div class="contact_left_item_three">客服微信: {{ service.wx }}</div>
					</div>
					<div class="contact_left_item">
						<div class="contact_left_item_one">联系我们</div>
						<div class="contact_left_item_two">企业认证</div>
						<div class="contact_left_item_three">客服邮箱:{{ service.email }}</div>
					</div>
					<div class="contact_left_item">
						<div class="contact_left_item_one">用户协议</div>
						<div class="contact_left_item_two">问题反馈</div>
						<div class="contact_left_item_three">举报电话：{{ service.phone }}</div>
					</div>
					<div class="contact_left_item">
						<div class="contact_left_item_one">用户隐私权</div>
						<div class="contact_left_item_two">会员服务协议</div>
						<div class="contact_left_item_three">举报邮箱：{{ service.email }}</div>
					</div>
					<div class="contact_left_item">
						<div class="contact_left_item_one">用户帮助</div>
						<div class="contact_left_item_two">代理合作</div>
						<div class="contact_left_item_three">地址：{{ service.qq }}</div>
					</div>
					<div class="contact_left_item">
						<div class="contact_left_item_one">经营许可证</div>
						<div class="contact_left_item_two"></div>
						<div class="contact_left_item_three"></div>
					</div>
				</div>
				<div class="contact_right">
					<div class="contact_right_every">
						<img :src="service.code" alt="" />
						<p>官方客服</p>
					</div>
					<!-- <div class="contact_right_every">
						<img src="../assets/home_image/assess.png" alt="" />
						<p>微信公众号</p>
					</div> -->
				</div>
			</div>
		</div>
		<Footer ref="index_6"></Footer>
	</div>
</template>

<script>
import { bannerList, configList, selService } from '../api/home'
import areaList from '../assets/areaList.js'
import Footer from '../components/footer'
import myMap from '../components/map'
export default {
	name: 'Home',
	data() {
		return {
			swiperHeight: '',
			searchContent1: '',
			searchContent2: '',
			region_id: '',
			options_area: areaList,
			activeName: 'first',
			swiperList: [], //轮播
			govList: [],
			indList: [],
			newTemList: [],
			tempList: [],
			agencyList: [],
			service: {}, //客服
		}
	},
	components: {
		Footer,
	},
	created() {
		this.bannerList()
		this.configList(1, '政策')
		this.getTempList()
		this.getAgencyList()
		this.serviceList()
		this.getCity()
	},
	mounted() {
		//设置swiper 高度
		let swiperWidth = this.$refs.index_1.offsetWidth
		this.swiperHeight = swiperWidth * 0.34
	},
	methods: {
		bannerList() {
			bannerList({ type: 1 }).then((res) => {
				this.swiperList = res
			})
		},
		configList(type, intype) {
			// 资讯 模板 机构
			let listQuery = {
				page: 1,
				pagesize: 10,
				type: type,
				intype: intype,
			}
			configList(listQuery).then((res) => {
				res.data.forEach((item) => {
					item.create_time = item.create_time.slice(0, 10)
				})
				// if(intype=='政策'){
				//     this.govList = res.data
				// }else if(intype=='行业' ){
				//     this.indList = res.data
				// }else if(intype=='模板'){
				//     this.newTemList = res.data
				// }
				switch (intype) {
					case '政策':
						this.govList = res.data

					case '行业':
						// debugger
						this.indList = res.data

					case '模板':
						this.newTemList = res.data
					default:
						break
				}
			})
		},
		getTempList() {
			//企业模板
			let listQuery = {
				page: 1,
				pagesize: 10,
				type: 2,
				intype: '',
			}
			configList(listQuery).then((res) => {
				res.data.forEach((item) => {
					item.create_time = item.create_time.slice(0, 10)
				})
				this.tempList = res.data
			})
		},
		getAgencyList() {
			//机构模板
			let listQuery = {
				page: 1,
				pagesize: 10,
				type: 3,
				intype: '',
			}
			configList(listQuery).then((res) => {
				res.data.forEach((item) => {
					item.create_time = item.create_time.slice(0, 10)
				})
				this.agencyList = res.data
			})
		},
		goNewsDetail(id) {
			this.$router.push({
				path: '/newsDetail',
				query: {
					id: id,
				},
			})
		},
		serviceList() {
			selService().then((res) => {
				if (res[0]) {
					this.service = res[0]
				}
			})
		},
		//锚点定位 点击导航滚动
		goIndex() {
			let activeIndex = sessionStorage.getItem('activeIndex')
			if (activeIndex < '6') {
				let refID = 'index_' + activeIndex
				document.documentElement.scrollTop = this.$refs[refID].offsetTop - 50
			}
		},
		//企业政策查询
		search(key) {
			switch (key) {
				case 1:
					this.$router.push({
						path: '/company',
						query: {
							name: this.searchContent1,
						},
					})
					break
				case 2:
					this.$router.push({
						path: '/policy',
						query: {
							name: this.searchContent2,
						},
					})
					break
				case 3:
					this.$router.push({
						path: '/policy',
						query: {
							region_id: this.region_id,
						},
					})
					break
				default:
					break
			}
		},
		selectHotCity(key) {
			//选择热门城市
			this.region_id = key
		},
		getCity() {
			//定位
			myMap.init().then((BMap) => {
				const geolocation = new BMap.Geolocation()
				geolocation.getCurrentPosition(
					(position) => {
						let city = position.address.city //获取城市信息
						areaList.filter((item) => {
							item.son.filter((ele) => {
								if (ele.title == city) {
									return (this.region_id = ele.id)
								}
							})
						})
					},
					(e) => {
						console.log(e)
						console.log('定位失败')
					},
					{ provider: 'baidu' }
				)
			})
		},
		handleClick(tab, event) {
			switch (tab.name) {
				case 'first':
					this.configList(1, '政策')
				case 'second':
					this.configList(1, '行业')
				case 'third':
					this.configList(1, '模板')
				default:
					break
			}
		},
	},
}
</script>
<style lang="scss" scoped>
.home {
	width: 100%;
	height: auto;
	padding-top: 80px;
	.home_swiper {
		width: 100%;
		::v-deep .el-carousel__container {
			cursor: pointer;
		}
		p {
			width: 100px;
			height: 36px;
			line-height: 36px;
			text-align: center;
			background: rgba(0, 201, 207, 1);
			border-radius: 10px;
			position: absolute;
			left: 13.5%;
			top: 69%;
			font-size: 16px;
			font-family: Source Han Sans CN;
			font-weight: 400;
			color: rgba(255, 255, 255, 1);
		}
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.home_sesrch {
		width: 1000px;
		margin: 0 auto;
		padding: 20px 0 10px 0;
		box-sizing: border-box;
		display: flex;
		.el-input {
			margin-right: 10px;
		}
		.city {
			width: 80px;
			display: flex;
			align-items: center;
		}
		::v-deep .selectArea.el-cascader .el-input {
			width: 780px;
			margin-right: 10px;
		}
		::v-deep .el-button--primary {
			background-color: #ff654d;
			border-color: #ff654d;
			span {
				display: block;
				width: 84px;
			}
		}
	}
	.home_hotCity {
		width: 1000px;
		margin: 0 auto;
		display: flex;
		.city {
			width: 80px;
			display: flex;
			align-items: center;
		}
		.city_item {
			width: 60px;
			display: flex;
			align-items: center;
			cursor: pointer;
		}
	}
	.home_title {
		width: 450px;
		padding: 50px 0;
		box-sizing: border-box;
		margin: 0 auto;
		font-family: Source Han Sans CN;
		color: rgba(0, 3, 8, 1);
		.title_zn {
			height: 22px;
			font-size: 16px;
			font-weight: 400;
		}
		.title_cn {
			width: 450px;
			height: 40px;
			background: url(../assets/home_image/title.png) no-repeat center center;
			font-size: 30px;
			font-weight: bold;
		}
	}
	.home_news {
		width: 1200px;
		margin: 0 auto;
		display: flex;
		box-sizing: border-box;
		padding-bottom: 30px;
		.home_news_left {
			width: 840px;
			::v-deep .el-tabs__content {
				height: 500px;
			}
			::v-deep .el-tabs__item {
				font-size: 20px;
				font-family: Source Han Sans CN;
				font-weight: bold;
			}
			::v-deep .el-tabs__nav-wrap::after {
				height: 0;
			}
		}
		.home_news_right {
			margin-left: 30px;
			box-sizing: border-box;
			padding-top: 55px;
			img {
				width: 270px;
				height: 480px;
			}
		}
	}
	.home_assess {
		width: 100%;
		position: relative;
		cursor: pointer;
		img {
			width: 100%;
			height: auto;
		}
		p {
			width: 100px;
			height: 36px;
			line-height: 36px;
			text-align: center;
			background: rgba(0, 201, 207, 1);
			border-radius: 10px;
			position: absolute;
			left: 13.5%;
			top: 69%;
			font-size: 16px;
			font-family: Source Han Sans CN;
			font-weight: 400;
			color: rgba(255, 255, 255, 1);
		}
	}
	.home_template {
		width: 1200px;
		margin: 0 auto;
		height: 500px;
	}
	.home_agency {
		width: 1200px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		.item_agency {
			width: 200px;
			img {
				width: 100px;
				height: 100px;
			}
			.comapnyName {
				height: 60px;
				line-height: 60px;
				text-align: center;
				font-size: 20px;
				font-family: Source Han Sans CN;
				font-weight: 400;
				color: rgba(51, 51, 51, 1);
			}
		}
	}
	.home_contact {
		width: 100%;
		height: 360px;
		background-color: #393939;
		.contact_main {
			width: 1200px;
			height: 360px;
			margin: 0 auto;
			display: flex;
			font-size: 16px;
			font-family: Source Han Sans CN;
			font-weight: 400;
			color: rgba(255, 255, 255, 1);
			.contact_left {
				width: 800px;
				height: 100%;
				.contact_left_item {
					height: 60px;
					display: flex;
					align-items: center;
					div {
						text-align: left;
						cursor: pointer;
					}
					.contact_left_item_one {
						width: 200px;
					}
					.contact_left_item_two {
						width: 200px;
					}
					.contact_left_item_three {
						width: 400px;
					}
				}
			}
			.contact_right {
				width: 400px;
				height: 100%;
				box-sizing: border-box;
				padding: 60px;
				display: flex;
				justify-content: space-between;
				align-items: flex-start;
				.contact_right_every {
					width: 110px;
					height: 150px;
					img {
						width: 110px;
						height: 110px;
					}
					p {
						width: 110px;
						height: 40px;
						line-height: 40px;
						text-align: center;
					}
				}
			}
		}
	}
	//公共样式
	.item_list {
		width: calc(100% - 10px);
		height: 50px;
		display: flex;
		align-items: center;
		cursor: pointer;
		.dot {
			width: 10px;
			height: 10px;
			background: rgba(19, 111, 219, 1);
			border-radius: 50%;
			margin-right: 20px;
		}
		.desc {
			width: calc(100% - 110px);
			text-align: left;
			color: #2c3e50;
		}
		.date {
			width: 100px;
		}
	}
}
</style>
