<template>
	<div class="root">
		<keep-alive>
			<router-view v-if="$route.meta.keepAlive"></router-view>
		</keep-alive>
		<router-view v-if="!$route.meta.keepAlive"></router-view>
	</div>
</template>

<script>
        import MiAlert from './components/MiAlert.vue';

export default {
        components: { MiAlert },
	provide() {
                return {
                        reload: this.reload
                }
	},
	method: {
                reload() {
                        this.$route.meta.keepAlive = false;
	                this.$nextTick(function(){
                                this.$route.meta.keepAlive = true;
                        })
                }
	}
}
</script>

<style lang='stylus' rel="stylesheet/stylus" scoped>
	.root
		width: 100%
		height: 100%
</style>
