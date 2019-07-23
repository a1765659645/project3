<template>
	<el-container class="yhd-home">
		<el-aside width="auto">
			<HomeNav></HomeNav>
		</el-aside>
		<el-container>
			<el-header>
				<h1>一号店商城后台管理系统</h1>
			</el-header>
			<el-main>
				<HomeTab></HomeTab>
			</el-main>
			<el-footer height="30px">
				<p>&copy;版权所有：Bclound</p>
				<p>tel: 18734994291</p>
				<p>e-mail：1765659645@qq.com</p>
			</el-footer>
		</el-container>
	</el-container>
</template>

<script type="text/ecmascript-6">
        import HomeNav from '../components/HomeNav.vue';
        import HomeTab from '../components/HomeTab.vue';

        export default {
		components: {
		        HomeNav,
			HomeTab
		}
        };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.yhd-home
		height: 100%
		.el-aside
			background-color: #303133
		.el-header
			background-color: #000
			display: flex
			align-items: center
			h1
				color: #666
				font-size: 28px

		.el-footer
			background-color: #606266
			display: flex
			align-items: center
			p
				color: #fff
				font-size: 12px
				font-weight: normal
				margin-right: 50px
</style>