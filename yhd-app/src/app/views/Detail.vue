<template>
	<div class="page-wrapper">
		<div class="tit-box">
			<span class="return"><i class="iconfont icon-return"></i></span>
			<span class="tit">商品详情</span>
			<span class="login"><i class="iconfont icon-iconfontzhizuobiaozhun0257"></i></span>
		</div>

		<div class="content">
			<div class="product">
				<div class="swiper-container banner">
					<div class="swiper-wrapper">
						<div class="swiper-slide" v-for="item in detail.banner">
							<img :src="item" />
						</div>
					</div>
					<div class="swiper-pagination"></div>
				</div>
				<p class="name" v-text="detail.name"></p>
				<div class="low">
					<span class="price">￥&nbsp;<span v-text="detail.price"></span></span>
					<span>降价通知</span>
				</div>
				<div class="evaluation">8.2万+评价[<span>100%</span>好评]</div>
				<div class="empty" style="height: 0.24rem; background-color: rgb(243,243,243);"></div>
				<div class="address">
					<div>
						送货至 <span>上海静安区 城区</span>
						<p>有货</p>
						由&nbsp;1号店&nbsp;发货，并提供售后服务 23:10前下单，预计明天送达
					</div>
					<div><span>&#46;</span>&nbsp;&nbsp;&nbsp;准时达</div>
					<div>服务保障：<span>&times;</span>&nbsp;&nbsp;不支持七天无理由退货</div>
				</div>
				<div class="empty" style="height: 0.24rem; background-color: rgb(243,243,243);"></div>
				<div class="store">
					<div>
						<div style="flex-grow: 1; padding: 0.2rem 0 0 0.2rem;">百福旗舰店</div>
						<div class="store-remark">
							<p>描述相符&nbsp;<span style="color: #666; font-weight: bold;">9.55</span>&nbsp;&nbsp;&nbsp;<span style="color: #f00; font-weight: bold;">↑</span></p>
							<p>服务态度&nbsp;<span style="color: #666; font-weight: bold;">9.75</span>&nbsp;&nbsp;&nbsp;<span style="color: #f00; font-weight: bold;">↑</span> </p>
							<p>发货速度&nbsp;<span style="color: #666; font-weight: bold;">8.97</span>&nbsp;&nbsp;&nbsp;<span style="color: #096; font-weight: bold;">↓</span> </p>
						</div>
					</div>
					<div>进入店铺</div>
				</div>
			</div>

			<div class="pic">
				<ul>
					<li>图文详情</li>
					<li>规格参数</li>
					<li>评论386万+</li>
					<li>售后服务</li>
				</ul>
			</div>
			<div>

			</div>
		</div>
		<div class="cart" @click="this.addCart">加入购物车</div>
	</div>
</template>

<script type="text/ecmascript-6">
        import Swiper from 'swiper';
	import { createNamespacedHelpers } from 'vuex';
	let { mapState, mapActions } = createNamespacedHelpers('detail');


        export default {
                computed: {
	                ...mapState(['detail'])
                },
	        methods: {
		        ...mapActions(['updateDetail', 'emptyBanner', 'addCart'])
	        },
	        mounted() {
                        this.updateDetail().then(() => {
                                new Swiper ('.banner', {
                                        autoplay: true,
                                        loop: true,
                                        // 如果需要分页器
                                        pagination: {
                                                el:'.swiper-pagination',
                                                type: 'fraction'
                                        }
                                });
                        })
	        },
	        destroyed() {
                        this.emptyBanner();
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
		display: flex;
		flex-direction: column;
		font-size: 0.24rem;
		background-color: rgb(246,246,246);
	}
	.tit-box {
		display: flex;
		align-items: center;
		height: 0.9rem;
		width: 100%;
		background-color: white;
		border-bottom: 0.02rem solid #e0e0e0;
	}
	.return {
		display: flex;
		align-items: center;
		width: 0.6rem;
		padding: 0 0.1rem;
	}
	.return>i {
		font-size: 0.4rem;
		color: #ff3c25;
	}
	.tit {
		font-size: 0.34rem;
		flex-grow: 1;
		text-align: center;
	}
	.login {
		font-size: 0.28rem;
		width: 1.04rem;
		height: 0.6rem;
		line-height: 0.6rem;
		text-align: center;
		border-radius: 0.06rem;
		margin-right: 0.1rem;
		color: #ff3c25;
	}
	.login i {
		font-size: 0.48rem;
	}
	.pic {
		width: 100%;
		background-color: white;
		height: 0.88rem;
	}
	.pic>ul {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-around;
		font-size: 0.28rem;
	}
	div.banner {

		width:100%;
		height:8rem;
		font-size: 0;
	}
	div.swiper-wrapper {

		height: 100%;
	}
	div.swiper-wrapper img {
		width: 100%;
	}
	div.swiper-pagination {
		text-align: center;
		width: 0.8rem;
		height: 0.4rem;
		line-height: 0.4rem;
		font-size: 0.26rem;
		color: #666;
		background-color: rgba(0,0,0,0.2);
		border-radius: 0.2rem;
		z-index: 20;
	}
	.cart {
		text-align: center;
		line-height: 0.68rem;
		margin:0 auto;
		width: 5.36rem;
		height: 0.68rem;
		background-color: #ff3c25;
		color: white;
		border-radius: 0.1rem;
	}
	.content {
		flex-grow: 1;
		overflow: auto;
	}
	.product {
		background-color: #fff;
	}
	.price {
		height: 0.4rem !important;
		font-size: 0.32rem;
		z-index: 100;
		color: #fe5955;
		font-weight: bold;
	}
	.low {
		border-bottom: 1px solid #666;
		padding: 0.2rem;
	}
	.low span:nth-child(2) {
		float: right;
		color: #666;
		border: 0.02rem solid #bdbdbd;
		padding: 0.1rem 0.2rem;
		border-radius: 0.4rem;
	}
	.name {
		height: 0.4rem !important;
		font-size: 0.28rem;
		z-index: 100;
		color: #333;
		padding: 0.2rem;
	}
	div.evaluation {
		padding: 0.4rem 0.2rem 0.2rem 0.2rem;
		color: #666;
		border-bottom: 1px solid #666;
	}
	div.evaluation span {
		color: #fe5955;
	}
	div.address {
		color: #666;
		background-color: #fff;
		border-bottom: 1px solid #666;
	}
	div.address>* {
		padding: 0.2rem;
	}
	div.address>div:nth-child(1)>span {
		color: #333;
		font-size: 0.28rem;
	}
	div.address>div:nth-child(1)>p {
		font-weight: bold;
		color: #757575;
		padding-top: 0.2rem;
	}
	div.address>div:nth-child(2) {
		border-top: 1px solid #666;
		border-bottom: 1px solid #666;
	}
	div.address>div:nth-child(2)>span {
		font-weight: bold;
		color: #ff9c0a;
	}
	div.address>div:nth-child(3)>span {
		font-weight: bold;
		color: #ff9c0a;
	}
	div.store {
		padding: 0.2rem 0.4rem;
	}
	div.store>div:nth-child(1) {
		color: #333;
		display: flex;
		padding-bottom: 0.4rem;
	}
	div.store>div:nth-child(2) {
		color: #666;
		border: 0.02rem solid #ccc;
		border-radius: 0.08rem;
		text-align: center;
		padding: 0.2rem;
	}
	.store-remark {
		border-left: 1px solid #999;
		padding-left: 0.2rem;
		flex-shrink: 0;
		width: 30%;
	}
	.store-remark>p {
		color: #999;
	}
</style>