<template>
	<div>
		<el-tree :data="treeData" :props="{ label: 'name' }" ref="tree" node-key="id" :expand-on-click-node="false">

		</el-tree>
	</div>
</template>

<script type="text/ecmascript-6">
	import { createNamespacedHelpers } from 'vuex';
	let { mapState, mapActions } = createNamespacedHelpers('category');

        export default {
                data() {
                        return {
                                mainList: [
	                                { id: 1, name: '粮油调味', children: [] },
                                        { id: 2, name: '进口食品', children: [] },
                                        { id: 3, name: '水果', children: [] },
                                        { id: 4, name: '母婴奶粉', children: [] },
                                        { id: 5, name: '纸品清洁', children: [] },
                                        { id: 6, name: '洗发护发', children: [] },
                                        { id: 7, name: '手机通讯', children: [] },
                                        { id: 8, name: '宠物主粮', children: [] }
                                ]
                        }
                },
	        computed: {
		        ...mapState([ 'subList' ]),
		        treeData() {
				let temp = [{ id: 0, name: 'root' }];
				let mainList = [ ...this.mainList ];
				mainList.forEach(item => {
				        item.children = this.subList.filter(item2 => item2.cid === item.id);
				});
				temp[0].children = mainList;
				return temp;
		        }
	        },
	        methods: {
		        ...mapActions([ 'getSubList' ]),
		        updateSub() {
				let temp = {};

		        }

	        },
	        created() {
                        this.getSubList()
	        },
	        mounted() {

	        },
	        updated() {

	        }
        };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>