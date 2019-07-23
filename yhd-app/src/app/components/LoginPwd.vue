<template>
	<div>
		<div class="pwd-login">
			<div>
				<div class="header-box">
					<div class="header">
						<img src="../assets/images/5b63f035Ne178923f.png" alt=""/>
				<span>赢188元新人礼包</span>
			</div>
			<div class='open'><span>立即打开</span></div>
				</div>
				<div class='tit-box'>
					<span class='return'><i class="iconfont icon-return"></i></span>
					<span class="tit">登录1号店</span>
					<span class="zc">注册</span>
				</div>
			</div>
			<div class="login-box">
				<div>
					<label for="phone"><i class="iconfont icon-person"></i></label>
					<input id="phone" class="phone" type="text" placeholder="邮箱/手机/用户名" v-model="pswLoginInfo.account"></div>
				<div>
					<label for="pwd"><i class="iconfont icon-suo"></i></label>
					<input id="pwd" class="pwd" type="text" placeholder="请输入密码" v-model="pswLoginInfo.pwd">
				</div>
			</div>
			<div class="remember-box">
				<input type="checkbox" checked>
				<span>两周内记住登录</span>
				<a href="">忘记密码？</a>
			</div>
			<div class="login" @click="pswLogin">登录</div>

			<div class="hezuo">
				<div class="line"></div>
				<div>合作账号登录</div>
				<div class="line"></div>
			</div>
			<div class="other-login">
				<i class="iconfont icon-weibo"></i>
				<i class="iconfont icon-qq"></i>
				<i class="iconfont icon-jd"></i>
				<i class="iconfont icon-zfb"></i>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
        import Cookies from 'js-cookie';
        export default {
                data: function(){
                        return {
                                pswLoginInfo: { account:'', pwd: '' },
                        };
                },
                methods: {
                        pswLogin: function(){
                                this.$http({
                                        method: 'post',
                                        url: '/login/pwd',
                                        data: this.pswLoginInfo
                                })
                                        .then(data => this.$router.replace(Cookies.get('target') || '/'));
                        }
                }
        };
</script>

<style scoped>
	html,body {
		width: 100%;
		height: 100%;

	}
	body {
		font-size: 0.24rem;
		background-color: rgb(246,246,246);
	}
	.pwd-login {
		font-size: 0.24rem;
	}
	.header-box {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
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
		height: 1.2rem;
		color: #fff;
		position: absolute;
		top: 0;
		right: 0;
	}
	.header {
		position: relative;
		display: flex;
		align-items: center;
		flex-direction: row;
		height: 1.2rem;
		width: 100%;
		background-color: rgb(238,238,243);
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
	}
	.zc {
		font-size: 0.28rem;
		width: 1.04rem;
		height:0.6rem;
		line-height: 0.6rem;
		text-align: center;
		border:0.02rem solid rgb(221,221,221);
		background-color: rgb(245,245,245);
		border-radius: 0.06rem;
		margin-right: 0.1rem;
	}
	.login-box {
		box-sizing: border-box;
		width: 100%;
		background-color: white;
		border-top: 0.02rem solid rgb(220,220,220);
		border-bottom: 0.02rem solid rgb(220,220,220);
		margin-top: 0.88rem;
	}
	.login-box>div {
		display: flex;
		padding: 0 0.14rem;
	}
	.login-box label>i {
		font-size: 0.32rem;
	}
	.login-box label {
		display: inline-block;
		width:0.76rem;
		height:0.88rem;
		line-height: 0.88rem;
		text-align: center;
	}
	.login-box input {
		width: 5.96rem;
		height: 0.4rem;
		border: none;
		outline: none;
		padding: 0.24rem 0.2rem 0.24rem 0;
		font-size: 0.28rem;
	}
	.pwd-login .phone {
		border-bottom: 0.02rem solid rgb(220,220,220) !important;
	}
	.remember-box {
		display: flex;
		align-items: center;
		width: 5.8rem;
		height: 0.6rem;
		margin: 0.4rem 0.44rem 0;
	}
	.remember-box>input {
		width: 0.4rem;
		height: 0.4rem;
	}
	.remember-box>span {
		flex-grow: 1;
		margin-left: 0.2rem;
	}
	.remember-box>a {
		color: #07a5ff;
	}
	.pwd-login .login {
		margin: 0 auto;
		width: 5.8rem;
		height: 0.88rem;
		background-color: #ff3c25;
		color: white;
		line-height: 0.88rem;
		text-align: center;
		border-radius: 0.1rem;
		margin-top: 0.4rem;
	}
	.pwd-login .message {
		text-align: center;
		color: #07a5ff;
		margin-top: 0.5rem;
	}
	.hezuo {
		display: flex;
		align-items: center;
		margin-top: 0.4rem;
	}
	.hezuo>div:nth-child(2) {
		margin: 0 0.1rem;
	}
	.hezuo>.line {
		flex-grow: 1;
		height: 0.02rem;
		background-color: rgb(217,217,217);
	}
	.other-login {
		display: flex;
		margin-top: 0.4rem;
		align-items: center;
		justify-content: space-around;
	}
	.other-login>i {
		font-size: 0.68rem;
	}
	.icon-weibo,.icon-jd {
		color: #ff3c25;
	}
	.icon-qq,.icon-zfb {
		color: #007aff;
	}
	.phone-login {
	}
	.phone-login .tit {
		margin-right: 0.2rem;
	}
	.phone-wrapper {
		display: flex;
		background-color: white;
		margin-top: 0.8rem;
		border-top: 0.02rem solid #e0e0e0;
		border-bottom: 0.02rem solid #e0e0e0;
	}
	.phone-wrapper>input {
		flex-grow: 1;
		box-sizing: border-box;
		padding: 0.2rem 0.6rem 0.2rem 0;
		outline: none;
		border: none;
	}
	.phone-wrapper>* {
		height: 0.88rem;
		font-size: 0.28rem;
		color: #666;
		line-height: 0.88rem;
	}
	.phone-wrapper>label {
		padding-left: 0.32rem;
		text-align: center;
	}
	.code-box {
		display: flex;
		margin-top: 0.2rem;
		background-color: white;
		box-sizing: border-box;
	}
	.code-box>* {
		font-size: 0.28rem;
		outline: none;
		border: none;
		color: #666;
	}
	.code {
		width: 1.56rem;
		flex-grow: 1;
		box-sizing: border-box;
		padding: 0.2rem 0.6rem 0.2rem 0;
	}
	.code-box>label {
		width: 1.12rem;
		padding-left:0.32rem;
		text-align: left;
		white-space: nowrap;
		line-height: 0.88rem;
	}
	.get-code {
		width: 1.82rem;
		height: 0.88rem;
		background-color: #bbb;
		text-align: center;
	}
	.phone-login .login {
		margin: 0 auto;
		width: 5.8rem;
		height: 0.88rem;
		background-color: #ff3c25;
		color: white;
		line-height: 0.88rem;
		text-align: center;
		border-radius: 0.1rem;
		margin-top: 0.4rem;
	}
	.phone-login p {
		width: 5.7rem;
		margin: 0 auto;
	}
	.phone-login p>a {
		color: #007aff;
	}
	.phone {
		font-size: 0.28rem;
	}
	.pwd {
		font-size: 0.28rem;
	}
</style>