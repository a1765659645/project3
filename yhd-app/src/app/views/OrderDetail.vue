<template>
	<div class="page-wrapper">
		<div class="header">
			<div class="back">
				<span><i class="iconfont icon-return"></i></span>
				<h2>确认订单</h2>
			</div>
			<div class="info" @click="toAddress">
				<div>
					<span class="name" v-text="this.addressList[0].receiveName"></span>
					<span v-text="this.addressList[0].receiveTel"></span>
					<p v-text="this.addressList[0].receiveAddress"></p>
				</div>
				<div><i class="iconfont icon-jiantou"></i></div>
			</div>
		</div>
		<div class="content">
			<ul>
				<li v-for="(item,i) in product" :key="i">
					<div>
						<div class="info">
							<p class="avatar"><img :src="item.avatar" alt=""></p>
							<div>
								<p>
									<span style="color: #ff3c3c">￥{{item.price}}</span>
									<br>
									<span>共{{item.count}}件</span>
								</p>
								<p><i class="iconfont icon-jiantou"></i></p>
							</div>
						</div>
						<p style="color: #f39700;margin: 0.4rem 0 0.2rem;">!&nbsp;该商品不支持“7天无理由退货”商品，请确认后下单</p>
					</div>
				</li>
			</ul>
			<div class="physical">
				<p>支付配送</p>
				<div>
					<p style="color: #333;">在线支付</p>
					<p>京东配送</p>
					<p>预计明天09:00-15:00送达</p>
					<p>总运费&nbsp;<span style="color: #ff3c3c;">￥0.00</span></p>
				</div>
				<p class="arrow"><i class="iconfont icon-jiantou"></i></p>
			</div>
			<div class="bill">
				<p>发票</p>
				<p style="flex-grow: 1; text-align: right; color: #666;">商品明细（电子普通发票）-个人</p>
				<p><i class="iconfont icon-jiantou"></i></p>
			</div>
		</div>
		<div class="footer">
			<p>需支付：<span>￥{{ this.product[0].account }}</span></p>
			<p class="pay" @click="pay">立即支付</p>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import Cookies from 'js-cookie';
	import { createNamespacedHelpers } from 'vuex';
	let { mapState, mapActions } = createNamespacedHelpers('orderDetail');

        export default {
                computed: {
	                ...mapState(['product'])
                },
                data() {
                        return{
                                addressList: {}
                        }
                },
                methods: {
	                ...mapActions(['getProduct']),
	                getAddress() {
                                this.$http({
                                        method: 'post',
	                                url: 'address/isdef',
	                                data: { id: 1 }
                                })
	                                .then(data => {
                                                this.addressList = data;
	                                })
	                },
	                toAddress() {
	                        window.location.href = 'app.html#/address';
	                },
	                pay() {
                                let orderId1 = window.location.href.split('/');
                                let orderId = orderId1[orderId1.length-1];
                                this.$http({
	                                method: 'post',
	                                url: '/order/pay',
	                                data: {
	                                        id: orderId
	                                }
                                })
	                                .then(() => {
                                                alert('支付成功~');
                                                window.location.href = 'app.html#/order';
	                                })
	                }
                },
	        created() {
                        this.getProduct()
	                        .then(data => {
	                                this.product = data;
	                        });
		        this.getAddress()
	        }
        };
</script>

<style scoped>
	.page-wrapper {
		display: flex;
		flex-direction: column;
		background-color: rgb(238,238,238);
	}
	.header {
		flex-shrink: 0;
		height: 3rem;
		background-color: #fff;
	}
	.header>.back {
		padding: 0.2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: 0.04rem solid #eee;
	}
	.header>.back span { width: 0.4rem; }
	.header>.back i {
		color: #ff3c3c;
		font-size: 0.4rem;
	}
	.header>.back h2 {
		text-align: center;
		flex-grow: 1;
		font-weight: normal;
	}
	.header>.info {
		display: flex;
		padding: 0.6rem 0.2rem 0.2rem;
		justify-content: center;
		align-items: center;
	}
	.header>.info>div:nth-child(1) {
		flex-grow: 1;
	}
	.header>.info>div:nth-child(1) .name {
		font-size: 0.32rem;
	}
	.header>.info>div:nth-child(1) p {
		padding-top: 0.2rem;
		color: #999;
	}
	.header>.info>div:nth-child(2) {
		width: 0.4rem;
		flex-shrink: 0;
	}
	.header>.info>div:nth-child(2) i {
		font-size: 0.48rem;
		color: #aaa;
	}
	.content {
		flex-grow: 1;
		overflow: auto;
	}
	.content>ul {
		background-color: #fff;
		margin-top: 0.24rem;
	}
	.content>ul>li {
		padding: 0.2rem;
	}
	.content .info {
		display: flex;
	}
	.content i {
		font-size: 0.48rem;
		color: #aaa;
	}
	.content .info>div {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-grow: 1;
		width: 0.4rem;
	}
	.content .info>div>p:nth-child(1) {
		color: #555;
		flex-grow: 1;
		text-align: right;
	}
	.content>ul>li>div:nth-child(1) .avatar {
		width: 1.6rem;
		border: 1px solid #aaa;
	}
	.content>ul>li>div:nth-child(1) .avatar>img {
		width: 100%;
	}
	.physical {
		margin-top: 0.2rem;
		padding: 0.2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		border-top: 1px solid #aaa;
		background-color: #fff;
	}
	.physical>div {
		flex-grow: 1;
		text-align: right;
	}
	.physical>div>p {
		padding: 0.04rem 0;
		color: #666;
	}
	.physical i {
		font-size: 0.48rem;
		color: #aaa;
	}
	.bill {
		margin-top: 0.24rem;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #fff;
		padding: 0.2rem;
		border-top: 0.02rem solid #eee;
		border-bottom: 0.02rem solid #eee;
	}
	.footer {
		background-color: #fff;
		font-size: 0.36rem;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-shrink: 0;
		border-top: 1px solid #ffb0a7;
	}
	.footer span { color: #ff3c3c; font-size: 0.44rem; }
	.footer>p:nth-child(1) {
		padding-left: 0.2rem;
		flex-grow: 1;
		color: #555;
	}
	.footer>.pay {
		height: 1rem;
		line-height: 1rem;
		text-align: center;
		flex-shrink: 0;
		color: #fff;
		width: 2.20rem;
		background-color: #ff3c3c;
	}
</style>