<template>
	<div class="mi-alert" v-show="isShow">
		<div class="content">
			<h2>提 示</h2>
			<p v-text="message"></p>
			<button @click="close">关闭</button>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
        import { createNamespacedHelpers } from 'vuex';

        let { mapState, mapMutations } = createNamespacedHelpers('alert');
        export default {
                computed: mapState(['isShow', 'message']),
                methods: mapMutations(['close'])
        };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.mi-alert
		text-align center
		position: fixed
		left: 0rem
		top: 0rem
		width: 100%
		height: 100%
		background-color: rgba(0,0,0,0.5)
		border-radius: 0.06rem
		.content
			box-shadow: 0 0.02rem 0.06rem 0.02rem #ccc
			background-color: #eee
			position: absolute
			left: 50%
			top: 50%
			transform: translate(-50%,-50%)
			border-radius: 0.1rem
			h2
				width: 5rem
				height: 0.6rem
				line-height: 0.6rem
				border-bottom: 0.02rem solid #999
				text-align: center
				background-color: dodgerblue
				border-top-left-radius: 0.1rem
				border-top-right-radius: 0.1rem
			p
				margin: 0.2rem 0
				font-weight: 600
			button
				border: none
				outline: none
				background-color: burlywood
				padding: 0.06rem 0.4rem
				margin-bottom: 0.2rem
				border-radius: 0.06rem
</style>