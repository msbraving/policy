/* 咨询结果 */
<template>
	<div class="detail">
		<Navlogo></Navlogo>
		<div class="detail_main">
			<Location :isChildShow="showLocation"></Location>
			<div class="content">
				<div class="title">企业信息</div>
				<div class="title_bottom">
					<div>企业名:{{ form.name }}</div>
					<div>地区:{{ form.merger_name }}</div>
					<div>行业:{{ form.industry_name }}</div>
					<div>立项年份:{{ form.project_time }}</div>
					<div>主管部门:{{ form.department_name }}</div>
					<div>支持对象:{{ form.object }}</div>
				</div>
				<div class="title">申报标准</div>
				<div class="title_bottom">
					<div v-for="(item, index) in form.declares" :key="index" class="declares">
						<div>申报条件:{{ item.title }}</div>
						<div>申报标准:{{ item.conditions }}</div>
					</div>
				</div>
				<div class="title">奖品制度</div>
				<div class="title_bottom">
					<div v-for="(item, index) in form.reward" :key="index" class="reward">申报条件:{{ item.title }}</div>
				</div>
				<div class="title">申报时间</div>
				<div class="title_bottom">
					<div>申报开始时间:{{ form.start_time }}</div>
					<div>申报结束时间:{{ form.end_time }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Navlogo from '../components/navLogo'
import Location from '../components/location'
import { enterpriseDetail } from '../api/form'
export default {
	data() {
		return {
			showLocation: '3',
			form: { declares: [], reward: [] },
		}
	},
	components: {
		Navlogo,
		Location,
	},
	watch: {},
	created() {
		this.detail()
	},
	mounted() {},
	methods: {
		detail() {
			let enterprise_id = this.$route.query.id
			enterpriseDetail(enterprise_id).then((res) => {
				this.form = res
				// this.declares = res.declares
			})
		},
	},
}
</script>

<style scoped lang="scss">
.detail {
	width: 100%;
	padding-top: 80px;
	.detail_main {
		width: 1200px;
		margin: 0 auto;
		.content {
			padding: 20px;
			.title {
				height: 30px;
				text-align: left;
			}
			.title_bottom {
				width: 100%;
				padding-left: 30px;
				div {
					height: 30px;
					text-align: left;
				}
				.declares {
                    display: flex;
                    div{
                        width: 500px;
                    }
				}
			}
		}
	}
}
</style>
