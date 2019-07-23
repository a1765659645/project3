<template>
	<div class="phone-login">
		<div class="tit-box">
			<span class="return"><i class="iconfont icon-return"></i></span>
			<span class="tit">1号店短信快捷登录</span>
		</div>
		<div class="phone-wrapper">
			<label for="phone">手机号：</label>
			<input id="phone" class="phone1" type="text" placeholder="请输入手机号" v-model="loginInfo.phone">
		</div>
		<div class="code-box">
			<label for="code">验证码：</label>
			<input id="code" class="code" type="text" placeholder="请输入短信验证码" v-model="loginInfo.code">
			<button class="get-code" @click="getCode" v-text="code">获取验证码</button>
		</div>
		<div class="remember-box">
			<input type="checkbox" checked>
			<span>两周内记住登录</span>
		</div>
		<p class="xieyi">若您输入手机号未被注册，将为您直接注册。注册即视为同意一号店
			<a class="xieyi" href="">《服务协议及隐私声明》</a>
		</p>
		<div class="login" @click="login">登录</div>
	</div>
</template>

<script type="text/ecmascript-6">
        import Cookies from 'js-cookie';
        export default {
                data: function(){
                        return {
                                loginInfo: { phone: '', code: '' },
                                code: '获取验证码'
                        };
                },
                methods: {
                        getCode: function(){
                                this.$http({ url: '/login/getcode' })
                                        .then(data => this.code = data)
                        },
                        login: function(){
                                // 客户端进行验证码比对，减少不必要的ajax请求
                                if(this.code !== this.loginInfo.code.toUpperCase()) {
                                        alert('验证码错误');
                                        return;
                                }
                                this.$http({
                                        method: 'post',
                                        url: '/login/phone',
                                        data: this.loginInfo
                                })
                                        .then(data => this.$router.replace(Cookies.get('target') || '/'));
                        }
                }
        };
</script>

<style scoped>

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
		height: 100%;
		color: #fff;
		font-size: 0.28rem;
	}
	.header {
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
		font-size: 0.2rem;
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
		color: #fff;
		background-color: #8ab746;
	}
	.remember-box>span {
		flex-grow: 1;
		margin-left: 0.2rem;
		color: #666;
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
	.xieyi {
		font-size: 0.24rem;
		color: #666;
	}
</style>