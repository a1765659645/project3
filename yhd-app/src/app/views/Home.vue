<template>
	<div class="page-wrapper">
		<div class="header-box" :class="act === true ? 'active2' : ''">
			<div class="header">
				<img src="../assets/images/5b63f035Ne178923f.png" alt="">
				<div class="box">
					<span>下载1号店APP</span>
					<span>赢188元新人礼包</span>
				</div>
				<div class="open"><span>立即打开</span></div>
			</div>
			<div class="search-box" :class="act === true ? 'active2' : ''">
				<div class="logo" :class="act === true ? 'active2' : ''"><img src="../assets/images/logo.png" alt=""></div>
				<div class="address">上海</div>
				<span class="search-icon"><i class="iconfont icon-search"></i></span>
				<input class="search" type="text" placeholder="搜索你想要的商品">
				<div class="personal" @click="personal"><i class="iconfont icon-person" :class="act === true ? 'active2' : ''"></i></div>
				<div class="cart" @click="cart"><i class="iconfont icon-cart" :class="act === true ? 'active2' : ''"></i></div>
			</div>
		</div>
		<div class="content">
			<!--轮播图-->
			<div class="banner-box">
				<div class="swiper-container banner">
					<div class="swiper-wrapper">
						<div class="swiper-slide lis"><img src="../assets/images/index/banner/1.jpg" alt=""></div>
						<div class="swiper-slide lis"><img src="../assets/images/index/banner/2.jpg" alt=""></div>
						<div class="swiper-slide lis"><img src="../assets/images/index/banner/3.jpg" alt=""></div>
					</div>
					<!-- 如果需要分页器 -->
					<div class="swiper-pagination"></div>
				</div>
			</div>

			<div class="container">
				<!--ad部分-->
				<div class="ad-box">
					<div class="swiper-container ad">
						<div class="swiper-wrapper">
							<div class="swiper-slide lis">
								<a href="#">
									<img src="../assets/images/index/ad/1.gif" />
									<span>天天签到</span>
								</a>
								<a href="#">
									<img src="../assets/images/index/ad/2.png" />
									<span>天天抽奖</span>
								</a>
								<a href="#">
									<img src="../assets/images/index/ad/3.gif" />
									<span>答题赢金</span>
								</a>
								<a href="#">
									<img src="../assets/images/index/ad/4.png" />
									<span>拼手速</span>
								</a>
								<a href="#">
									<img src="../assets/images/index/ad/5.gif" />
									<span>抓娃娃</span>
								</a>
							</div>
							<div class="swiper-slide lis">
								<a href="#">
									<img src="../assets/images/index/ad/6.png" />
									<span>领券中心</span>
								</a>
								<a href="#">
									<img src="../assets/images/index/ad/7.png" />
									<span>超值9.9</span>
								</a>
								<a href="#">
									<img src="../assets/images/index/ad/8.gif" />
									<span>充值中心</span>
								</a>
								<a href="#">
									<img src="../assets/images/index/ad/9.png" />
									<span>三单有礼</span>
								</a>
								<a href="#">
									<img src="../assets/images/index/ad/10.png" />
									<span>福利市场</span>
								</a>
							</div>
						</div>
						<!-- 如果需要分页器 -->
						<div class="swiper-pagination"></div>
					</div>
				</div>
				<div class="hot-title">
					<div class="hot-title-l">
						<img src="../assets/images/hot-title_bg.png" />
					</div>
					<div class="hot-title-m">
						<div class="swiper-container hot-title-m-content">
							<ul class="swiper-wrapper">
								<li class="swiper-slide lis"><a href="#">史上最全金币玩法攻略！</a></li>
								<li class="swiper-slide lis"><a href="#">联手【加油宝】送您30元话费！</a></li>
							</ul>
						</div>
					</div>
					<div class="hot-title-r">
						<i class="iconfont icon-jiantou"></i>
					</div>
				</div>
				<div class="new">
					<img src="../assets/images/index/ad/e7f45198c817388e.gif" alt="">
					<img src="../assets/images/index/ad/9d969e7d85d84826.gif" alt="">
				</div>
				<div class="super-box">
					<div class="super-single">
						<h3>超级单品</h3>
						<CountDown :end-date="new Date(2019,8,7,0,0,0)"></CountDown>
						<span>超值甄选<i class="iconfont icon-double-jiantou"></i></span>
					</div>
					<ul class="super-pro">
						<li v-for="item in superList" :key="item.id">
							<img :src="item.avatar" alt="">
							<p v-text="item.name"></p>
							<span class="price"><span>￥</span>{{ item.price }}</span>
							<span class="old-price"><span>￥</span>{{ item.oldPrice }}</span>
						</li>
					</ul>
				</div>
				<div class="super-img">
					<a href=""><h3>超级品牌</h3></a>
					<a href=""><h3>超级品类</h3></a>
				</div>
				<div class="pic-box">
					<div>
						<div class="pic-head">
							<h3>领券中心</h3>
							<span>先领券 再购物</span>
						</div>
						<div class="pic-wrap">
							<img src="../assets/images/index/super/pic1.jpg" alt="">
							<img src="../assets/images/index/super/pic2.jpg" alt="">
						</div>
					</div>
					<div>
						<div class="pic-head">
							<h3>超值9.9</h3>
							<span>低价优选，放心购买</span>
						</div>
						<div class="pic-wrap">
							<img src="../assets/images/index/super/pic3.jpg" alt="">
							<img src="../assets/images/index/super/pic4.jpg" alt="">
						</div>
					</div>
				</div>
				<div class="category">
					<!--调味区-->
					<div class="sauce">
						<div>
							<div class="oil" @click="oil">
								<img src="../assets/images/index/category/group-purple.png" alt="">
								<h2>粮油调味</h2>
							</div>
							<div class="food" @click="food"></div>
						</div>
						<ul>
							<li>
								<img src="../assets/images/index/category/1.jpg" alt="">
								<p>牛奶</p>
							</li>
							<li>
								<img src="../assets/images/index/category/2.jpg" alt="">
								<p>坚果炒货</p>
							</li>
							<li>
								<img src="../assets/images/index/category/3.jpg" alt="">
								<p>巧克力/糖果</p>
							</li>
							<li>
								<img src="../assets/images/index/category/4.jpg" alt="">
								<p>饼干糕点</p>
							</li>
							<li>
								<img src="../assets/images/index/category/5.jpg" alt="">
								<p>肉干</p>
							</li>
							<li>
								<img src="../assets/images/index/category/6.jpg" alt="">
								<p>冲调</p>
							</li>
							<li>
								<img src="../assets/images/index/category/7.jpg" alt="">
								<p>饮料</p>
							</li>
							<li>
								<img src="../assets/images/index/category/8.jpg" alt="">
								<p>酒</p>
							</li>
						</ul>
					</div>
					<!--水果区-->
					<div class="fruit">
						<div>
							<div class="fresh" @click="fresh">
								<img src="../assets/images/index/category/group-yellow.png" alt="">
								<h2>水果</h2>
							</div>
							<div class="milk" @click="milk"></div>
						</div>
						<ul>
							<li>
								<img src="../assets/images/index/category/9.jpg" alt="">
								<p>冷冻冷藏</p>
							</li>
							<li>
								<img src="../assets/images/index/category/10.jpg" alt="">
								<p>猪牛羊肉</p>
							</li>
							<li>
								<img src="../assets/images/index/category/11.jpg" alt="">
								<p>海鲜水产</p>
							</li>
							<li>
								<img src="../assets/images/index/category/12.jpg" alt="">
								<p>禽肉蛋品</p>
							</li>
							<li>
								<img src="../assets/images/index/category/13.jpg" alt="">
								<p>尿裤湿巾</p>
							</li>
							<li>
								<img src="../assets/images/index/category/14.jpg" alt="">
								<p>营养健康</p>
							</li>
							<li>
								<img src="../assets/images/index/category/15.jpg" alt="">
								<p>喂养用品</p>
							</li>
							<li>
								<img src="../assets/images/index/category/16.jpg" alt="">
								<p>婴儿洗护</p>
							</li>
						</ul>
					</div>
					<!--纸品区-->
					<div class="paper">
						<div>
							<div class="paper-part" @click="paperPart">
								<img src="../assets/images/index/category/group-red.png" alt="">
								<h2>纸品清洁</h2>
							</div>
							<div class="hair" @click="hair"></div>
						</div>
						<ul>
							<li>
								<img src="../assets/images/index/category/17.jpg" alt="">
								<p>衣物清洁</p>
							</li>
							<li>
								<img src="../assets/images/index/category/18.jpg" alt="">
								<p>厨卫清洁</p>
							</li>
							<li>
								<img src="../assets/images/index/category/19.jpg" alt="">
								<p>清洁工具</p>
							</li>
							<li>
								<img src="../assets/images/index/category/20.jpg" alt="">
								<p>一次性用品</p>
							</li>
							<li>
								<img src="../assets/images/index/category/21.jpg" alt="">
								<p>身体护理</p>
							</li>
							<li>
								<img src="../assets/images/index/category/22.jpg" alt="">
								<p>女性护理</p>
							</li>
							<li>
								<img src="../assets/images/index/category/23.jpg" alt="">
								<p>面部护理</p>
							</li>
							<li>
								<img src="../assets/images/index/category/24.jpg" alt="">
								<p>口腔护理</p>
							</li>
						</ul>
					</div>
					<!--手机区-->
					<div class="phone">
						<div>
							<div class="phone-part" @click="phonePart">
								<img src="../assets/images/index/category/group-green.png" alt="">
								<h2>手机通讯</h2>
							</div>
							<div class="pet" @click="pet"></div>
						</div>
						<ul>
							<li>
								<img src="../assets/images/index/category/25.jpg" alt="">
								<p>空气净化</p>
							</li>
							<li>
								<img src="../assets/images/index/category/26.jpg" alt="">
								<p>吸尘除螨</p>
							</li>
							<li>
								<img src="../assets/images/index/category/27.jpg" alt="">
								<p>童书</p>
							</li>
							<li>
								<img src="../assets/images/index/category/28.jpg" alt="">
								<p>狗粮</p>
							</li>
							<li>
								<img src="../assets/images/index/category/29.jpg" alt="">
								<p>猫粮</p>
							</li>
							<li>
								<img src="../assets/images/index/category/30.jpg" alt="">
								<p>宠物零食</p>
							</li>
							<li>
								<img src="../assets/images/index/category/31.jpg" alt="">
								<p>猫狗日用</p>
							</li>
						</ul>
					</div>
				</div>
				<div class="understand-box">
					<h3>懂你想要</h3>
					<ul class="understand" >
						<li v-for="item in list" :key="item.id">
							<img :src="item.avatar" alt="">
							<span class="discount1" v-text="item.discount1"></span><span class="discount2" v-text="item.discount2"></span>
							<p v-text="item.name"></p>
							<div>
								<span class="price"><span>￥</span>{{ item.price }}</span>
								<span class="found" v-text="item.found"></span>
							</div>
						</li>
					</ul>
				</div>

			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import CountDown from '../components/CountDown.vue';
        import Swiper from 'swiper';
        import Cookies from 'js-cookie';
        import { createNamespacedHelpers } from 'vuex';
        let { mapState, mapActions } = createNamespacedHelpers('understand');
        export default {
                data() {
                        return {
                                act: false
                        }
                },
                components: {
                        CountDown
                },
                mounted() {
                        new Swiper ('.swiper-container', {
                                autoplay: true,
                                loop: true,
                                // 如果需要分页器
                                pagination: '.swiper-pagination',
                                // 如果需要前进后退按钮
                                nextButton: '.swiper-button-next',
                                prevButton: '.swiper-button-prev',
                        });
                        window.addEventListener('scroll', this.handleScroll);
                },
	        computed: {
		        ...mapState(['superList','list']),
	        },
	        methods: {
		        ...mapActions(['getData', 'getSuper']),
                        handleScroll () {
                                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                                if (scrollTop > 10) {
                                        this.act = true;
                                } else {
                                        this.act = false;
                                }

                        },
		        oil() {
                                Cookies.remove('id');
                                Cookies.set('id',1);
                                this.$router.push({
                                        path:"/sub",
                                });
		        },
		        food() {
                                Cookies.remove('id');
                                Cookies.set('id',2);
                                this.$router.push({
                                        path:"/sub",
                                });
		        },
		        fresh() {
                                Cookies.remove('id');
                                Cookies.set('id',3);
                                this.$router.push({
                                        path:"/sub",
                                });
		        },
		        milk() {
                                Cookies.remove('id');
                                Cookies.set('id',4);
                                this.$router.push({
                                        path:"/sub",
                                });
		        },
		        paperPart() {
                                Cookies.remove('id');
                                Cookies.set('id',5);
                                this.$router.push({
                                        path:"/sub",
                                });
		        },
		        hair() {
                                Cookies.remove('id');
                                Cookies.set('id',6);
                                this.$router.push({
                                        path:"/sub",
                                });
		        },
		        phonePart() {
                                Cookies.remove('id');
                                Cookies.set('id',7);
                                this.$router.push({
                                        path:"/sub",
                                });
		        },
		        pet() {
                                Cookies.remove('id');
                                Cookies.set('id',8);
                                this.$router.push({
                                        path:"/sub",
                                });
		        },
		        personal() {
                                window.location.href = 'app.html#/profile';
		        },
		        cart() {
                                window.location.href = 'app.html#/cart';
		        }
	        },
	        created() {
                        this.getData();
			this.getSuper();
	        },
                destroyed () {
                        window.removeEventListener('scroll', this.handleScroll)
                },
        };
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}
	ul {
		list-style: none;
	}
	a {
		text-decoration: none;
	}
	html,body {
		width: 100%;
		height: 100%;

	}
	.page-wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		font-size: 0.24rem;
		background-color: rgb(246,246,246);
	}
	.header-box {
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;

		display: flex;
		flex-wrap: wrap;
		transition: all 0.5s;
	}
	.box {
		display: flex;
		flex-wrap: wrap;
		flex-grow: 1;
	}
	.box>span {
		width: 100%;
	}
	.box>span:nth-child(1) {
		font-size: 0.26rem;
		color: #3d0609;
	}
	.box>span:nth-child(2) {
		font-size: 0.24rem;
		color: #613538;
	}
	.open {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 1.92rem;
		background-color: #FF0000;
		height: 100%;
		color: #fff;
	}
	.header {
		display: flex;
		align-items: center;
		flex-direction: row;
		height: 1.2rem;
		width: 100%;
		background-color: rgb(238,238,243);
	}
	.header-box {
		z-index: 1000;
	}
	.search-box {
		display: flex;
		width: 100%;
		flex-direction: row;
		flex: none;
	}

	.search {
		border-left: none;
		box-sizing: border-box;
		padding: 0.12rem 0;
		flex-grow: 1;
		outline: none;
		border: none;
		background-color: red;
		transition: all 0.5s;
		border-bottom-right-radius: 0.2rem;
		border-top-right-radius: 0.2rem;
	}
	input.search::-webkit-input-placeholder {
		font-size: 0.24rem;
		color: #333;
	}
	.logo{
		white-space: nowrap;
		overflow: hidden;
		transition: all 0.5s;
		background-color: orange;
	}
	.logo>img {
		width: 0.8rem;
		height: 0.8rem;

	}
	.address {
		background-color: aqua;
		width: 0.8rem;
		white-space: nowrap;
		overflow: hidden;
		transition: all 0.5s;
		text-align: center;
		line-height: 0.88rem;
	}
	.header>img {
		width: 1.2rem;
		height: 1.2rem;
	}
	.personal,.cart {
		width: 0.68rem;
		height: 0.88rem;
		text-align: center;
		line-height: 0.88rem;
	}
	.search-box i {
		font-size: 0.46rem;
	}
	.search-box>div i {
		color: white;
	}
	.search-box>* {
		background-color: transparent;
		color: white;
	}
	.search-box {
		display: flex;
		align-items: center;
		transition: all 0.3s;
	}
	.search-box>input.search {
		height: 0.64rem;
		background-color: rgba(255,255,255,0.8);
	}
	.search-icon {
		height: 0.64rem;
		text-align: center;
		line-height: 0.64rem;
		background-color: rgba(255,255,255,0.8);
		border-bottom-left-radius: 0.2rem;
		border-top-left-radius: 0.2rem;
		padding-left: 0.1rem;
	}
	.search-icon>i {
		color: #333;
	}
	.content {

		width:100%;
		background-color: rgb(246,246,246);

	}
	.banner {
		position: relative;
	}
	.banner .swiper-pagination-bullets {
		position: absolute;
		bottom: 20% !important;
	}
	.banner img {
		width: 100%;
	}
	.banner-box {
		z-index: -10;
	}
	.banner-box .swiper-pagination-bullet {
		background-color: #fff !important;
		opacity: 1;
	}
	.banner-box .swiper-pagination-bullet-active {
		background-color: #ff3c25 !important;
		width: 0.28rem;
		border-radius: 0.14rem;
	}
	.container {
		z-index: 10000;
		margin: 0 auto;
		width: 94%;
		margin-top: -1.2rem;

	}
	/*ad部分*/
	.ad-box {
		width:100%;
		border-radius: 0.08rem;
		padding: 0.3rem 0 0.1rem;
		overflow: auto;
		background-color: #fff;
		margin-bottom:0.03rem;


	}
	ad-box .swiper-wrapper {
		font-size: 0;
	}
	.ad .swiper-slide {
		font-size:0;
	}
	.ad-box a {
		box-sizing: border-box;
		border: 1px solid white;
		padding-top: 0.4rem;
		text-align: center;
		width: 20%;
		display: inline-block;
		background-color: #fff;
	}
	.ad-box img {
		width:0.8rem;
	}
	.ad-box span {
		width: 100%;
		margin: 0.2rem 0;
		display: block;
		white-space: nowrap;
		font-size: 0.24rem;
		color: #757575;
	}
	.ad .swiper-pagination {
		position: absolute;
		top: 1.6rem;
	}
	.ad .swiper-pagination span {
		display: inline-block;
	}
	.ad .swiper-pagination-bullet {
		width: 0.32rem;
		height: 0.06rem;
		border-radius: 0.03rem;
		background-color: rgb(204,204,204);
	}
	.hot-title {
		overflow: hidden;
		box-sizing: border-box;
		padding: 0.2rem;
		display: flex;
		height: 0.68rem;
		background-color: #fff;
		border-radius: 0.04rem;
	}
	.hot-title-l {
		width: 1.28rem;
	}
	.hot-title-l>img {
		width: 1.28rem;
	}
	.hot-title-m {
		justify-content: center;
		flex-grow: 1;
		text-overflow: ellipsis;
	}
	.hot-title-m a {
		padding-left: 0.4rem;
		color: #000;
		font-size: 0.26rem;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	.hot-title-r {
		display: flex;
		justify-content:center;
		align-items: center;
		width: 0.4rem;
	}
	.hot-title-r>i {
		font-size: 0.6rem;
	}

	.new {
		display: flex;
		margin-top: 0.2rem;
		justify-content: space-around;
	}
	.new>img {
		width:3.04rem;
		height: 1.96rem;
	}

	.countdown {
		flex-grow: 1;
	}
	.countdown>span {
		display: inline-block;
		width: 0.38rem;
		height:0.3rem;
		text-align: center;
		background-color: #6b6b6b;
		color: #fff;
		border-radius: 0.06rem;
		line-height: 0.28rem;
	}
	.super-box {
		background-color: white;
		border-top-left-radius: 0.08rem;
		border-top-right-radius: 0.08rem;
	}
	.super-single {
		display: flex;
		flex-wrap: nowrap;
		padding: 0.22rem 0.2rem 0.1rem;
		align-items: center;
	}

	.super-single>h3 {
		padding-right: 0.22rem;
	}

	.super-single>span {
		font-size: 0.28rem;
		color: #FF3c25;
		flex-grow: 1;
		text-align: right;
	}
	.super-single>span>i {
		font-size: 0.28rem;
		color: #FF3c25;
	}
	.super-pro {
		display: flex;
		font-size:0.24rem !important;
		overflow: hidden;
		overflow: auto;
		white-space: nowrap;
		padding-bottom: 0.22rem;
	}
	li.more {
		order: 2;
		width: 0.24rem !important;
		height: 1.6rem;
		white-space: normal !important;
		padding: 0.4rem 0.2rem;
		color: #757575;
	}
	li.more>i {
		font-size: 0.24rem;
	}
	.super-pro>li {
		display: inline-block;
		width: 1.6rem;
		text-align: center;
		margin-left: 0.18rem;
	}
	.super-pro>li>p {
		font-size: 0.24rem;
		color: #212121;
	}
	.super-pro>li>.price {
		font-size: 0.24rem;
		color: #ff3c25;
	}
	.super-pro>li>.old-price {
		font-size: 0.2rem;
		color: #999;
		text-decoration: line-through;
	}
	.super-pro img {
		width: 1.56rem;
		height: 1.56rem;
	}
	.super-img {
		display: flex;
		flex-wrap: nowrap;
	}
	.super-img>a {
		position: relative;
		width: 50%;
		height: 2.4rem;
		background-size: auto 100%;
	}
	.super-img>a:nth-child(1) {
		background-image: url("../assets/images/index/super/9.jpg");
		background-repeat: no-repeat;
	}
	.super-img>a:nth-child(2) {
		background-image: url("../assets/images/index/super/10.jpg");
		background-repeat: no-repeat;
	}
	.super-img>a>h3 {
		position: absolute;
		top: 0.14rem;
		left: 0.2rem;
	}
	.pic-box {
		width: 100%;
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-around;
		margin-top: 0.2rem;

	}
	.pic-box img {
		width: 1.24rem;
		height:1.24rem;
		margin-left: 0.2rem;
	}
	.pic-box>div {
		width: 49.5%;
		background-color: white;
	}
	.pic-box>div:nth-child(1) h3 {
		color: #ff2d18;
	}
	.pic-box>div:nth-child(1) {
		border-top-left-radius: 0.1rem;
		border-bottom-left-radius: 0.1rem;
	}
	.pic-box>div:nth-child(2) {
		border-top-right-radius: 0.1rem;
		border-bottom-right-radius: 0.1rem;
	}
	.pic-box>div:nth-child(2) h3 {
		color: #ff4891;
	}
	.pic-head>h3 {
		padding-left: 0.2rem;
		margin-top: 0.24rem;
	}
	.pic-head>span {
		padding-left: 0.2rem;
		font-size: 0.24rem;
		color: #757575;
	}
	.pic-wrap {
		margin-top: 0.08rem;
	}
	.sauce {
		margin-top: 0.2rem;
	}
	.sauce>div {
		width: 100%;
		display: flex;
		flex-wrap: nowrap;
	}
	.sauce>div>div {
		position: relative;
		width: 50%;
		height: 2.22rem;
		background-size: auto 100%;
	}
	.sauce>div>div>img {
		position: absolute;
		top:0;
		left:-2.8%;
	}
	.sauce>div>div>h2 {
		position: absolute;
		top: 0.1rem;
		left: 0.1rem;
		color: #fff;
	}
	.sauce>div>div:nth-child(1) {
		background-image: url("../assets/images/index/category/bg1.jpg");
		background-repeat: no-repeat;
	}
	.sauce>div>div:nth-child(2) {
		background-image: url("../assets/images/index/category/bg2.jpg");
		background-repeat: no-repeat;
	}
	.sauce>ul {
		display: flex;
		flex-wrap: nowrap;
		overflow: hidden;
		overflow: auto;
		padding-top: 0.3rem;
		background-color: white;
		text-align: center;
		border-bottom-left-radius: 0.1rem;
		border-bottom-right-radius: 0.1rem;
	}
	.sauce>ul>li {
		padding-left: 0.2rem;
	}
	.sauce>ul>li>img {
		width: 1.6rem;
		height:1.6rem;
	}
	.sauce>ul>li>p {
		margin: 0.18rem 0 0.34rem 0;
	}
	.oil {
		display: block;
	}
	.food {
		display: block;
	}
	.fruit {
		margin-top: 0.2rem;
	}
	.fruit>div {
		width: 100%;
		display: flex;
		flex-wrap: nowrap;
	}
	.fruit>div>div {
		position: relative;
		width: 50%;
		height: 2.22rem;
		background-size: auto 100%;
	}
	.fruit>div>div>img {
		position: absolute;
		top:0;
		left:-2.8%;
	}
	.fruit>div>div>h2 {
		position: absolute;
		top: 0.1rem;
		left: 0.1rem;
		color: #fff;
	}
	.fruit>div>div:nth-child(1) {
		background-image: url("../assets/images/index/category/bg3.jpg");
		background-repeat: no-repeat;
	}
	.fruit>div>div:nth-child(2) {
		background-image: url("../assets/images/index/category/bg4.jpg");
		background-repeat: no-repeat;
	}
	.fruit>ul {
		display: flex;
		flex-wrap: nowrap;
		overflow: hidden;
		overflow: auto;
		padding-top: 0.3rem;
		background-color: white;
		text-align: center;
		border-bottom-left-radius: 0.1rem;
		border-bottom-right-radius: 0.1rem;
	}
	.fruit>ul>li {
		padding-left: 0.2rem;
	}
	.fruit>ul>li>img {
		width: 1.6rem;
		height:1.6rem;
	}
	.fruit>ul>li>p {
		margin: 0.18rem 0 0.34rem 0;
	}

	.paper {
		margin-top: 0.2rem;
	}
	.paper>div {
		width: 100%;
		display: flex;
		flex-wrap: nowrap;
	}
	.paper>div>div {
		position: relative;
		width: 50%;
		height: 2.22rem;
		background-size: auto 100%;
	}
	.paper>div>div>img {
		position: absolute;
		top:0;
		left:-2.8%;
	}
	.paper>div>div>h2 {
		position: absolute;
		top: 0.1rem;
		left: 0.1rem;
		color: #fff;
	}
	.paper>div>div:nth-child(1) {
		background-image: url("../assets/images/index/category/bg5.jpg");
		background-repeat: no-repeat;
	}
	.paper>div>div:nth-child(2) {
		background-image: url("../assets/images/index/category/bg6.jpg");
		background-repeat: no-repeat;
	}
	.paper>ul {
		display: flex;
		flex-wrap: nowrap;
		overflow: hidden;
		overflow: auto;
		padding-top: 0.3rem;
		background-color: white;
		text-align: center;
		border-bottom-left-radius: 0.1rem;
		border-bottom-right-radius: 0.1rem;
	}
	.paper>ul>li {
		padding-left: 0.2rem;
	}
	.paper>ul>li>img {
		width: 1.6rem;
		height:1.6rem;
	}
	.paper>ul>li>p {
		margin: 0.18rem 0 0.34rem 0;
	}

	.phone {
		margin-top: 0.2rem;
	}
	.phone>div {
		width: 100%;
		display: flex;
		flex-wrap: nowrap;
	}
	.phone>div>div {
		position: relative;
		width: 50%;
		height: 2.22rem;
		background-size: auto 100%;
	}
	.phone>div>div>img {
		position: absolute;
		top:0;
		left:-2.8%;
	}
	.phone>div>div>h2 {
		position: absolute;
		top: 0.1rem;
		left: 0.1rem;
		color: #fff;
	}
	.phone>div>div:nth-child(1) {
		background-image: url("../assets/images/index/category/bg7.jpg");
		background-repeat: no-repeat;
	}
	.phone>div>div:nth-child(2) {
		background-image: url("../assets/images/index/category/bg8.jpg");
		background-repeat: no-repeat;
	}
	.phone>ul {
		display: flex;
		flex-wrap: nowrap;
		overflow: hidden;
		overflow: auto;
		padding-top: 0.3rem;
		background-color: white;
		text-align: center;
		border-bottom-left-radius: 0.1rem;
		border-bottom-right-radius: 0.1rem;
	}
	.phone>ul>li {
		padding-left: 0.2rem;
	}
	.phone>ul>li>img {
		width: 1.6rem;
		height:1.6rem;
	}
	.phone>ul>li>p {
		margin: 0.18rem 0 0.34rem 0;
	}
	.understand img {
		width:2.76rem;
		height:2.76rem;
	}
	.understand {
		display: flex;
		flex-wrap: wrap;
		background-color: white;
	}
	.understand-box> h3 {
		color: #212121;
		font-size: 0.32rem;
		background-color: white;
		border-bottom: 0.02rem solid rgb(246,246,246);
		padding: 0.14rem 0 0.1rem 0.2rem;
		margin-top: 0.2rem;
		border-top-left-radius: 0.1rem;
		border-top-right-radius: 0.1rem;
	}
	.understand>li {
		width:50%;
		box-sizing: border-box;
		padding: 0.14rem 0.17rem 0.22rem 0.23rem;
	}
	.understand>li>p {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		word-break: break-all;
		-webkit-line-clamp:2;
		font-size: 0.22rem;
		margin-top: 0.06rem;
	}
	.understand .price {
		color: #ff3c25;
		flex-grow: 1;
		font-size: 0.34rem;
	}
	.understand>li>div {
		display: flex;
		align-items: center;
		margin-top: 0.22rem;
	}
	.found {
		width: 1.22rem;
		height: 0.52rem;
		border: 0.02rem solid rgb(246,246,246);
		line-height: 0.52rem;
		text-align: center;
	}
	.discount1,.discount2 {
		display: inline-block;
		color: #ff3c25;
	}
	.active {
		color: #ff3c25;
		border: 0.02rem solid #ff3c25;
	}
	.header-box {
		top: 0rem;
	}
	.logo {
		width: 0.8rem;
	}
	.address {
		width: 0.8rem;
	}
	.search-box>div i {
		color: white;
	}
	.search-box {
		background-color: rgba(255,255,255,0);
		border: 1px solid transparent;
	}

	.header-box.active2 {
		top: -1.2rem;
	}
	.logo.active2 {
		width: 0rem;
	}
	.address.active2 {
		width: 0rem;
	}
	.search-box>div i.active2 {
		color: red;
	}
	.search-box.active2 {
		background-color: rgba(255,255,255,0.8);
		border: 1px solid #c6c6c6;
	}
</style>