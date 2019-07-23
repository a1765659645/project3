<template>
	<div class="page-wrapper">
		<div class="header">
			<span class="btn-return"><i class="iconfont icon-return"></i></span>
			<h3 class="category-title">热销榜</h3>
		</div>
		<div class="header-nav" ref="nav">
			<ul class="sub">
				<li v-for="item in subLists" :key="item.id" class="lis" :class="{ active: item.id === curCid }"
				    @click="changeCurCid(item.id);updateProduct(item.id)" >
					<span v-text="item.name"></span>
				</li>
			</ul>
		</div>
		<ul class="subProduct">
			<li v-for="item in product" :key="item.id">
				<router-link :to="`detail?id=${ item.id }`">
					<img class="left" :src="item.avatar" alt="">
				</router-link>
				<div class="right">
					<div>
						<span class="name" v-text="item.name"></span>
					</div>
					<div>
						<span class="price"><span>￥</span>{{ item.price }}</span>
						<i class="iconfont icon-cart"></i>
					</div>

				</div>

			</li>
		</ul>
		<div class="footer">
			<ul class="footer-wrap">
				<li>
					<span class="zq noact"></span>
					<span class="zq1 active"></span>
					<p>折扣榜</p>
				</li>
				<li>
					<span class="hd noact"></span>
					<span class="hd1 active"></span>
					<p>活动榜</p>
				</li>
				<li class="active">
					<span class="rx noact"></span>
					<span class="rx1 active"></span>
					<p>热销榜</p>
				</li>
				<li>
					<span class="rs noact"></span>
					<span class="rs1 active"></span>
					<p>热搜榜</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import BScroll from 'better-scroll';
	import Cookies from 'js-cookie';
	import { createNamespacedHelpers } from 'vuex';
	let { mapState, mapActions } = createNamespacedHelpers('sub');
        export default {
                computed: {
	                ...mapState(['subLists', 'curCid', 'product']),
                },
	        methods: {
		        ...mapActions(['getSub', 'updateProduct','changeCurCid']),

	        },
	        created() {
                        this.getSub();
	        },
	        updated() {

	        }
        };
</script>

<style scoped>
	.page-wrapper {
		font-size: 100px;
	}
	.header {
		position: relative;
		color: #ff3c25;
		flex-shrink: 0;
		align-items: center;
		width:100%;
		height: 0.76rem;
		line-height: 0.76rem;
	}
	.header>span {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 0.64rem;
		height:100%;
		z-index: 100000000;
	}
	.header>h3 {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		text-align: center;
		font-size: 0.4rem;
		z-index: -999999;
	}
	.header>span>i {
		font-size: 0.4rem;
	}
	.footer {
		width:100%;
		height:0.88rem;
		background-color: #fff;
		flex: none;
	}
	.footer-wrap {
		display: flex;
		font-size: 0.2rem;
		justify-content: space-around;
	}
	.footer-wrap {
		text-align: center;
	}
	.footer-wrap li {
		padding-top: 0.06rem;
		text-align: center;
	}
	.footer-wrap span {
		display: inline-block;
		width: 0.42rem;
		height: 0.42rem;
		background-size: 100%;
		background-repeat: no-repeat;
	}
	.footer li.active {
		color: red;
	}
	.footer li.active>span.active {
		display: inline-block;
	}
	.footer li.active>span.noact {
		display: none;
	}
	.footer li>span.active {
		display: none;
	}
	.sub {
		display: flex;
		overflow: auto;
		flex-wrap: nowrap;
		font-size: 0.25rem;
		white-space: nowrap;
		height: 0.6rem;
		flex: none;
		border-bottom: 1px solid #ccc;
		z-index: 3;
	}
	.sub::-webkit-scrollbar {display:none;}
	.sub>li {
		padding: 0 0.268rem;
		height: 0.6rem;
	}
	.sub>li>span {
		box-sizing: border-box;
		display: block;
		height: 100%;
		line-height: 0.6rem;
		border-bottom: 0.036rem solid transparent;
		color: #999;
	}
	.lis.active>span {
		color: #ff3c25;
		font-weight: 700;
		border-bottom: 0.036rem solid red;
	}
	.zq {
		background-image: url("../assets/images/subcategory/zq.png");
	}
	.hd {
		background-image: url("../assets/images/subcategory/hd.png");
	}
	.rx {
		background-image: url("../assets/images/subcategory/rx.png");
	}
	.rs {
		background-image: url("../assets/images/subcategory/rs.png");
	}
	.zq1 {
		background-image: url("../assets/images/subcategory/zqact.png");
	}
	.hd1 {
		background-image: url("../assets/images/subcategory/hdact.png");
	}
	.rx1 {
		background-image: url("../assets/images/subcategory/rxact.png");
	}
	.rs1 {
		background-image: url("../assets/images/subcategory/rsact.png");
	}
	.subProduct {
		padding-top: 0.2rem;
		flex-grow: 1;
		overflow: auto;
	}
	.subProduct>li {
		padding: 0.2rem 0;
		display: flex;
		height: 2rem;
	}
	.subProduct>li>a {
		flex-shrink: 0;
		width: 2rem;
	}
	.subProduct>li>a>img {
		width: 100%;
	}
	.subProduct .right {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.subProduct .right>div {
		padding-right: 0.4rem;
	}
	.subProduct .right>div:nth-child(1) {
		display: flex;
		flex-shrink: 0;
		height: 0.76rem;
	}
	.subProduct .right>div:nth-child(2) {
		flex-grow: 1;
		height: 0.94rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.subProduct .right>div>span {}
	.subProduct .right>div>span.zy {
		margin-right: 0.1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		text-align: center;
		font-size: 0.22rem;
		color: #fff;
		border-radius: 0.04rem;
		background-color: #ff3c25;
		width: 0.5rem;
		height: 0.3rem;
	}
	.subProduct .right>div>span.name {
		font-size: 0.28rem;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.subProduct .right>div>span.price {
		font-size: 0.38rem;
		color: #f00;
	}
	.subProduct .right>div>span.price>span {
		font-size: 0.24rem;
	}
	.subProduct .right>div>i {
		font-size: 0.48rem;
		color: #f00;
	}

</style>