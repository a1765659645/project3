<template>
	<div>
		<div class="tit-box">
		<span class="return" @click="returnProfile"><i class="iconfont icon-return"></i></span>
		<span class="tit">我的订单</span>
	</div>
		<div class="order">
			<ul class="tab">
				<li :class="{ active: curIndex === 1 }" class="tab-all" @click="curIndex = 1">全部</li>
				<li :class="{ active: curIndex === 2 }" class="tab-obligation" @click="curIndex = 2">待付款</li>
				<li :class="{ active: curIndex === 3 }" class="tab-wait" @click="curIndex = 3">待收货</li>
			</ul>
			<div v-show="curIndex === 1" class="all same">
				<ul>
					<li v-for="(item, i) in list" :key="item.i">
						<div>
							<img :src="item.avatar" alt="">
							<div>
								<p v-text="item.name"></p>
								<p class="price-content">
									<span class="price">￥{{ item.price }}</span>
									<span class="count">共计{{item.count}}件商品</span>
								</p>
							</div>
						</div>
						<div>
							<span>{{item.shoppingTime}}</span>
							<div class="remove" @click="removeOrder(item.id)">删除订单</div>
							<div class="pay" ref="pay" @click="goPay($event, item.id)">{{ item.pay.data[0] === 1 ? '已支付' : '待付款' }}</div>
						</div>
					</li>
				</ul>
			</div>
			<div v-show="curIndex === 2" class="obligation same">
				<ul>
					<li v-for="(item, i) in list2" :key="item.i">
						<div>
							<img :src="item.avatar" alt="">
							<div>
								<p v-text="item.name"></p>
								<p class="price-content">
									<span class="price">￥{{ item.price }}</span>
									<span class="count">共计{{item.count}}件商品</span>
								</p>
							</div>
						</div>
						<div>
							<span>{{item.shoppingTime}}</span>
							<div class="remove" @click="removeOrder(item.id)">删除订单</div>
							<div class="pay" ref="pay" @click="goPay($event, item.id)">待付款</div>
						</div>
					</li>
				</ul>
			</div>
			<div v-show="curIndex === 3" class="wait same">
				<ul>
					<li v-for="(item, i) in list3" :key="item.i">
						<div>
							<img :src="item.avatar" alt="">
							<div>
								<p v-text="item.name"></p>
								<p class="price-content">
									<span class="price">￥{{ item.price }}</span>
									<span class="count">共计{{item.count}}件商品</span>
								</p>
							</div>
						</div>
						<div>
							<span>{{item.shoppingTime}}</span>
							<div class="remove" @click="removeOrder(item.id)">删除订单</div>
							<div class="pay">已支付</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
        import Cookies from 'js-cookie';
	import { createNamespacedHelpers } from 'vuex';
	let { mapActions, mapState } = createNamespacedHelpers('order');

        export default {
                computed: {
	                ...mapState(['list']),
                },
	        inject: ['reload'],
	        data() {
                        return{
                                curIndex: 1,
	                        list2: [],
	                        list3: []
                        }
	        },
                methods: {
	                ...mapActions(['getOrderList']),
                        returnProfile() {
	                        window.location.href = 'app.html#/profile'
                        },
	                goPay(e, id) {
	                        if(e.target.innerHTML == '待付款') {
	                                window.location.href = `app.html#/orderDetail/${id}`;
	                        } else {
	                                return;
	                        }
	                },
	                removeOrder(removeId) {
	                        this.$http({
		                        method: 'post',
		                        url: '/order/remove',
		                        data: {
		                                removeId
		                        }
	                        })
		                        .then(() => {
                                                alert('删除成功');
                                                window.location.reload();
		                        })
	                },
	                activeTab() {
	                        let activeId = Cookies.get('test');
                                if(activeId === 1) this.curIndex = 1;
	                        if(activeId === 2) this.curIndex = 2;
                                if(activeId === 3) this.curIndex = 3;
                                console.log(activeId);
	                }
                },
                created() {
                        this.getOrderList()
	                        .then(data => {
	                                this.list2 = this.list.filter(item => item.pay.data[0] === 0);
                                        this.list3 = this.list.filter(item => item.pay.data[0] === 1);
	                                console.log(this.list2);
                                        console.log(this.list3);
	                        });

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
	.tit-box {
		display: flex;
		align-items: center;
		height: 0.9rem;
		width: 100%;
		background-color: white;

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
		margin-right: 0.8rem;
		font-weight: 700;
	}
	.order {
		width: 100%;
	}
	.order>ul {
		border-top: 0.02rem solid #e0e0e0;
		width:100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: white;
	}
	.order>ul>li {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		flex-grow: 1;
		height: 0.92rem;
		font-size: 0.28rem;
	}

	.same>ul>li {
		border-top: 0.2rem solid #eee;
		box-sizing: border-box;
		margin-top: 0.2rem;
		display: flex;
		flex-direction: column;
	}
	.same>ul>li>div:nth-child(1) {
		padding: 0.2rem;
		display: flex;
	}
	.same>ul>li>div:nth-child(1) div{
		font-size: 0.32rem;
		color: #666;
	}
	.same>ul>li>div:nth-child(1) p {
		margin-bottom: 0.2rem;
	}
	.same>ul>li>div:nth-child(1) p.price-content {
		display: flex;
		justify-content: space-between;
	}
	.same>ul>li>div:nth-child(1) .price {
		color: #fe5955;
		font-weight: bold;
	}
	.same>ul>li>div:nth-child(1) .count { }
	.same>ul>li>div:nth-child(2) {
		padding: 0.2rem;
		align-items: center;
		display: flex;
		justify-content: space-between;
		border: 1px solid rgb(229,229,229);
	}
	.same>ul>li>div:nth-child(2)>span {
		font-size: 0.28rem;
	}
	.pay {
		padding: 0.08rem 0.3rem;
		background-color: #fe5955;
		color: #fff;
		font-size: 0.3rem;
		border-radius: 0.08rem;
	}

	.remove {
		box-sizing: border-box;
		padding: 0.08rem 0.3rem;
		background-color: #fff;
		color: #666;
		text-align: center;
		height: 0.56rem;
		font-size: 0.3rem;
		border-radius: 0.08rem;
		border:0.01rem solid #666;
	}

	.order>div {
		background-color: white;
		border-top: 0.01rem solid #e0e0e0;
	}
	.tab>li.active {
		color: #f00;
		border-bottom: 0.02rem solid #ff3c25;
	}

</style>