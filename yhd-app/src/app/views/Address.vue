<template>
	<div class="page-wrapper">
		<div class="tit-box">
			<span class="return"><i class="iconfont icon-return"></i></span>
			<span class="tit">地址管理</span>
		</div>
		<div class="content">
			<div class="add-address" @click="showAddress" v-show="!isActive">+添加收货地址</div>
			<div class="return-list" @click="showAddress2" v-show="isActive">返回地址列表</div>
			<div class="address">
				<ul class="address-list" v-show="!isActive">
					<li v-for="(item, i) in list" :key="item.id">
						<div>
							<span class="name" v-text="item.receiveName"></span>
							<span class="num" v-text="item.receiveTel"></span>
							<p class="address-p" v-text="item.receiveAddress"></p>
						</div>
						<div>
							<span class="edit" @click="showAddress3(item.id)">编辑</span>
							<span>|</span>
							<span class="remove" @click="removeAddress(item.id)">删除</span>
							<span class="default" :class="{ active: item.isDef.data[0] === 1 }" @click="setDefault(item.id)"><i class="iconfont icon-customdefault"></i></span>
						</div>
					</li>
				</ul>
			</div>
		</div>

		<div class="address-message" v-show="isActive">
			<ul>
				<li>
					<input class="receive-name" type="text" placeholder="收货人姓名" ref="receiveName"></li>
				<li  >
					<!--省市区三级联动-->
					<div class="divwrap" v-if="show">
						<v-distpicker type="mobile" @province="onChangeProvince1" @city="onChangeCity"
						              @area="onChangeArea"></v-distpicker>
					</div>
					<!--遮罩层-->
					<div class="blacks" v-if="show" @click="countermand"></div>
					<!--触发选择-->
					<input @click="choose" type="text" placeholder="省市区" v-model="this.city" ref="city" />
				</li>
				<li><input class="address-a" type="text" placeholder="详细地址" ref="receiveAddress"></li>
				<li><input class="a" type="text" placeholder="联系电话" ref="receiveTel"></li>
			</ul>
			<div class="save" v-show="!isActive3" @click="addAddress">保存</div>
			<div class="update" v-show="isActive2" @click="editAddress">确认修改</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
        import VDistpicker from 'v-distpicker'
        import Cookies from 'js-cookie';
        import { createNamespacedHelpers } from 'vuex';
        let { mapActions, mapState } = createNamespacedHelpers('address');

        export default {
                components: {VDistpicker},
                name: "particular",
                data() {
                        return {
                                isActive: false,
                                isActive2: false,
                                isActive3: false,
                                show: false,
                                lxr: '',
                                lxdh: '',
                                //省市区
                                province: '',
                                city: '',
                                area: '',
	                        receiveName: '',
	                        receiveAddress: '',
	                        receiveTel: '',
	                        temp: {},
	                        isdef: false
                        }
                },
                props: ['ips'],
	        computed: {
		        ...mapState(['list'])
	        },
                methods: {
	                ...mapActions(['getAddress']),
			//取消选择地区
                        countermand: function () {
                                this.show = false
                        },
                        //打开选择地区
                        choose: function () {
                                this.show = true;
                        },
                        onChangeProvince1: function (a) {
                                this.province = a.value;
                                if (a.value == '台湾省') {
                                        this.show = false;
                                }
                        },
                        onChangeCity: function (a) {
                                this.city = a.value;
                        },
                        onChangeArea: function (a) {
                                this.area = a.value;
                                this.show = false;
                                this.city = this.province + this.city + this.area;
                        },
	                showAddress() {
				this.isActive = true;
				console.log('1');
	                },
	                showAddress2() {
	                        this.isActive = false;
	                },
                        showAddress3(id) {
                                this.isActive = true;
                                this.isActive2 = true;
                                this.isActive3 = true;
                                Cookies.set('addressId', id);
				this.$http({
					method: 'post',
					url: 'address/temp',
					data: {
					        id: id
					}
				})
					.then(data => {
                                                this.$refs.receiveName.value = data[0].receiveName;
                                                this.$refs.receiveTel.value = data[0].receiveTel;
					})
                        },
	                addAddress() {
	                        this.receiveName =  this.$refs.receiveName.value;
	                        this.receiveAddress = this.$refs.city.value + this.$refs.receiveAddress.value;
	                        this.receiveTel = this.$refs.receiveTel.value;
	                        this.$http({
		                        method: 'post',
                                        url: '/address/add',
                                        data: {
                                                receiveName: this.receiveName,
                                                receiveTel: this.receiveTel,
                                                receiveAddress: this.receiveAddress,
                                        }
	                        })
		                        .then(() => {
	                                        alert('新增地址成功');
                                                window.location.reload();
		                        });
	                },
	                removeAddress(id) {
	                        this.$http({
		                        method: 'post',
                                        url: '/address/remove',
		                        data: { id: id }
	                        })
		                        .then(() => {
	                                        alert('删除地址成功');
                                                window.location.reload();
		                        })
	                },
	                editAddress() {
                                var id = Cookies.get('addressId');
                                this.receiveName =  this.$refs.receiveName.value;
                                this.receiveAddress = this.$refs.city.value + this.$refs.receiveAddress.value;
                                this.receiveTel = this.$refs.receiveTel.value;
                                this.$http({
	                                method: 'post',
                                        url: '/address/update',
                                        data: {
                                                receiveName: this.receiveName,
                                                receiveTel: this.receiveTel,
                                                receiveAddress: this.receiveAddress,
                                                id:id,
                                        },
                                })
	                                .then(() => {
                                                alert('修改成功');
                                                window.location.reload();
	                                })
	                },
                        setDefault(id) {
	                        this.$http({
		                        method: 'post',
                                        url: '/address/default',
                                        data: { id:id },
	                        })
		                        .then(() => {
	                                        alert('默认地址设置成功');
                                                window.location.reload();
		                        })
                        }
                },
	        created() {
                         this.getAddress()
	                         .then(data => {
                                         console.log(data[0].isDef.data[0]);
	                         })
	        },
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
		background-color: white;
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
	.add-address, .return-list {
		font-size: 0.28rem;
		color: #ff3c25;
		text-align: center;
		height:0.84rem;
		line-height: 0.84rem;
		background-color: white;
		border-top: 0.02rem solid #e0e0e0;
		border-bottom: 0.02rem solid #e0e0e0;
		margin-top: 0.2rem;
	}
	.address-message>ul {
		display: flex;
		flex-direction: column;
		padding: 0.2rem;
		border-top: 0.02rem solid #e0e0e0;
	}
	.address-message>ul>li {
		margin-bottom: 0.2rem;
	}
	.address-message>ul>li input {
		box-sizing: border-box;
		color: #333;
		height: 0.68rem;
		font-size: 0.28rem;
		width: 100%;
		text-indent: 1em;

	}
	.save {
		width: 5.2rem;
		height: 0.8rem;
		color: white;
		font-size: 0.28rem;
		text-align: center;
		line-height: 0.8rem;
		border-radius: 0.1rem;
		background-color: #ff3c25;
		margin: 0 auto;
	}
	.address ul {
		background-color: rgb(246,246,246);
		padding: 0.2rem;
	}
	.address ul>li {
		display: flex;
		background-color: white;
		margin-bottom: 0.2rem;
		padding: 0.2rem 0 0.24rem 0.56rem;
		border: 0.01rem solid #e0e0e0;
	}
	.address ul>li>div:nth-child(1) {
		color: #999;
		font-size: 0.28rem;
		flex-grow: 1;
	}
	.address ul>li p {
		width: 3.2rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.address ul>li>div:nth-child(2) {
		color: #1677ee;
		font-size: 0.28rem;
		padding-right: 0.3rem;
	}
	.address ul>li>div:nth-child(2)>span:nth-child(2) {
		color: #333;
	}
	.update {
		/*display: none;*/
		width: 5.2rem;
		height: 0.8rem;
		color: white;
		font-size: 0.28rem;
		text-align: center;
		line-height: 0.8rem;
		border-radius: 0.1rem;
		background-color: #ff3c25;
		margin: 0 auto;
	}
	.default {
		padding-left: 0.1rem;
	}
	.default>i {
		font-size: 0.28rem;
		color: #ccc;
	}
	.default.active i {
		color: #ff3c25;
	}
	/*遮罩层*/
	.blacks {
		position: fixed;
		width: 100%;
		height: 50%;
		left: 0;
		top: 0;
		background: rgba(0, 0, 0, 0.45);
	}
	/*省市区三级联动*/
	.divwrap {
		height: 50%;
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		z-index: 99;
	}

	/*外部*/
	.divwrap > .distpicker-address-wrapper {
		color: #0d0d0d;
		height: 100%;
	}

	/*头部*/
	.divwrap >>> .address-header {
		background: #096;
		color: #fff;
		width: 100%;
		position: fixed;
		bottom: 50%;
		height: 0.62rem;
		font-size: 0.28rem;
	}

	/*头部内容*/
	.divwrap >>> .address-header ul li {
		font-size: 0.28rem !important;
		flex-grow: 1;
		text-align: center;
	}

	/*选择过省市区的头部*/
	.divwrap >>> .address-header .active {
		color: #fff;
	}

	/*内容部分*/
	.divwrap >>> .address-container {
		overflow: scroll;
		height: 100%;
		font-size: 0.28rem;
	}

	/*点过的地区内容*/
	.divwrap >>> .address-container .active {
		color: red;font-size: 0.28rem;
	}
</style>