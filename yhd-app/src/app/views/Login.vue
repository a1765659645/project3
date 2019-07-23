<template>
	<div class="wrapper">
		<LoginPhone v-show="loginType === 1"></LoginPhone>
		<LoginPwd v-show="loginType !== 1"></LoginPwd>
		<span class='title-phone' v-show="loginType !==1" @click="loginType = 1">手机短信登录注册</span>
		<span class='title-pwd' v-show="loginType ===1" @click="loginType = 0">用户密码登录</span>
	</div>
</template>

<script type="text/ecmascript-6">
        import LoginPhone from '../components/LoginPhone.vue';
        import LoginPwd from '../components/LoginPwd.vue';

        export default {
                components: {
                        LoginPhone,
                        LoginPwd
                },
                data: function(){
                        return {
                                loginType: 1    //表示手机登录
                        };
                }
        };
</script>

<style scoped>
	html,body {
		width: 100%;
		height: 100%;
	}
	.wrapper {
		width: 100%;
		height: 100%;
		background-color: #f5f5f5;
	}
	.title-pwd,.title-phone {
		margin-top: 1rem;
		font-size: 0.28rem;
		color: #07a5ff;
		width: 100%;
		display: inline-block;
		text-align: center;
	}
</style>