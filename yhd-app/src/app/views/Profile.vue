<template>
	<div class="page-wrapper">
		<div class="header-box">
			<div class="home">
				<span @click="returnHome"><i class="iconfont icon-home"></i></span>
				<span class="address" @click="address">收货地址</span>
			</div>
			<div class="avatar">
				<img src="../assets/images/defaultUserPic.jpg" alt="">
				<div>
					<span class="name">{{ name }}</span>
					<img src="../assets/images/avatar_vip_00.png" alt="">
					<i class="iconfont icon-shezhi"></i>
				</div>
			</div>
			<div class="gold">
				<div>
					<span>0</span>
					<span>金币</span>
				</div>
				<div>
					<span>0</span>
					<span>抵用券</span>
				</div>
				<div>
					<span>0</span>
					<span>余额</span>
				</div>
			</div>
		</div>
		<div class="order-box">
			<div>我的订单</div>
			<ul>
				<li class="order" @click="order"><i class="iconfont icon-dingdan"></i><span>全部订单</span></li>
				<li @click="wait"><i class="iconfont icon-daifukuan"></i><span>待付款</span></li>
				<li @click="obligation"><i class="iconfont icon-webicon12"></i><span>待收货</span></li>
			</ul>
		</div>
		<div class="vip">
			<a href=""><i class="iconfont icon-huiyuanzhongxin"></i><span>会员中心</span></a>
			<a href=""><i class="iconfont icon-buoumaotubiao26"></i><span>联名卡</span></a>
			<a href=""><i class="iconfont icon-qianbao"></i><span>1号钱包</span></a>
			<a href=""><i class="iconfont icon-shouji"></i><span>手机充值</span></a>
			<a href=""><i class="iconfont icon-dianhua"></i><span>客户服务</span></a>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import Cookies from 'js-cookie';
        import { createNamespacedHelpers } from 'vuex';
        let { mapActions, mapState } = createNamespacedHelpers('profile');

        export default {
                computed: {
	                ...mapState(['name'])
                },
	        methods: {
		        ...mapActions(['getName']),
		        address() {
		                window.location.href = 'app.html#/address';
		        },
		        returnHome() {
		                window.location.href = 'app.html#/';
		        },
		        order() {
                                Cookies.set('test', 1);
		                window.location.href = 'app.html#/order';
		        },
		        wait() {
		                Cookies.set('test', 2);
                                window.location.href = 'app.html#/order';
		        },
                        obligation() {
                                Cookies.set('test', 3);
                                window.location.href = 'app.html#/order';
                        }
	        },
	        created() {
                        this.getName()
	                        .then(data => console.log(this.name));
	        }
        };
</script>

<style scoped>
	html,body {
		width: 100%;
		height: 100%;
	}
	.page-wrapper {
		width: 100%;
		height: 100%;
		font-size: 0.24rem;
		background-color: rgb(246,246,246);
	}
	.header-box {
		width: 100%;
		background-color: #FE555D;
	}
	.home {
		height: 0.88rem;
		display: flex;
		align-items: center;
	}
	.home>span {
		font-size: 0.28rem;
		color: #fff;

	}
	.home>span>i {
		font-size: 0.6rem;
	}
	.home>span:nth-child(1) {
		flex-grow: 1;
		margin-left: 0.1rem;
	}
	.home>span:nth-child(2) {
		margin-right: 0.4rem;
	}
	.avatar {
		position: relative;
	}
	.avatar>img {
		position: absolute;
		bottom: -0.3rem;
		left: 0.3rem;
		width: 1.2rem;
		height: 1.2rem;
		border-radius: 50%;
	}
	.avatar>div {
		display: flex;
		margin: 0 0.3rem 0 1.8rem;
		align-items: center;
		height: 1.16rem;
	}
	.name {
		width: 1.24rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: white;
		font-size: 0.32rem;
	}

	.avatar>div>img {
		justify-content: space-around;
	}
	.avatar>div>i {
		font-size: 0.4rem;
		color: white;
		flex-grow: 1;
		text-align: right;
	}
	.gold {
		box-sizing: border-box;
		display: flex;
		flex-grow: 1;
		align-items: center;
		width: 100%;
		height: 1.04rem;
		background-color: white;
		padding-left: 1.6rem;
		font-size: 0.24rem;
	}
	.gold span {
		display: block;
	}
	.gold>div {
		display: flex;
		flex-direction:column;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;

		height: 100%;
		flex-grow: 1;
	}
	.gold>div:nth-child(3) {
		border-left: 0.02rem solid #e0e0e0;
	}
	.order-box {
		width: 100%;
		margin-top: 0.2rem;
	}
	.order-box>div {
		font-size: 0.32rem;
		padding-left: 0.3rem;
		text-align: left;
		height: 0.9rem;
		line-height: 0.9rem;
		background-color: white;
		border-bottom: 0.02rem solid #e0e0e0;
	}
	.order-box>ul {
		box-sizing: border-box;
		display: flex;
		align-items: center;
		width: 100%;
		height: 1.68rem;
		background-color: white;
	}
	.order-box>ul>li {
		height: 100%;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.order-box i {
		font-size: 0.48rem;
	}
	.vip {
		margin-top: 0.2rem;
		box-sizing: border-box;
		display: flex;
		flex-wrap: wrap;
		background-color: white;
	}
	.vip>a {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 33.333333333%;
		height: 2rem;
		color: #333;
	}
	.vip i {
		font-size: 0.7rem;
	}
	.vip>a:nth-child(1) {
		border-bottom: 0.02rem solid #e0e0e0;
	}
	.vip>a:nth-child(2) {
		border-bottom: 0.02rem solid #e0e0e0;
	}
	.vip>a:nth-child(3) {
		border-bottom: 0.02rem solid #e0e0e0;
	}
	.vip a:nth-child(1)>i {
		color: #fc8485;
	}
	.vip a:nth-child(2)>i {
		color: #0000ee;
	}
	.vip a:nth-child(3)>i {
		color: #feb358;
	}
	.vip a:nth-child(4)>i {
		color: #5cb9ff;
	}
	.vip a:nth-child(5)>i {
		color: #fc8485;
	}
</style>