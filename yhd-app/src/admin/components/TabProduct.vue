<template>
	<div class="table-wrapper">
		<el-form :rules="rules" :inline="true" class="table-header">
			<el-form-item label="商品名称：" size="small">
				<el-input placeholder="请输入商品名称" prefix-icon="el-icon-search" v-model="search.name"></el-input>
			</el-form-item>
			<el-form-item size="small">
				<el-button @click="searchHandler" icon="el-icon-search">查询</el-button>
				<el-button @click="dialogFormVisible = true">新增</el-button>
				<el-dialog title="新增商品" :visible.sync="dialogFormVisible" @close="reset">
					<el-form :model="model" ref="form" :rules="rules" label-width="100px">
						<el-form-item label="商品名称" prop="name" style="margin-bottom: 20px">
							<el-input v-model="model.name" autocomplete="off"></el-input>
						</el-form-item>
						<el-form-item label="商品价格" prop="price" style="margin-bottom: 20px">
							<el-input v-model="model.price" autocomplete="off"></el-input>
						</el-form-item>
						<el-form-item label="所属分类" style="margin-bottom: 20px">
							<el-select  v-model="model.fid" :disabled="searchSid">
								<el-option v-for="item in sub" :key="item.id" :label="item.name" :value="item.id"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="avatar" prop="avatar" >
						<el-upload ref="my-upload" v-model="model.avatar" class="avatar-uploader"
						           action="/product/upload"
						           name="avatar" accept=".jpg,.png"
						           :on-success="uploadSuccess"
						           list-type="picture-card"
						           :file-list="fileList"
						           :on-remove="removeFile">
							<i class="el-icon-plus avatar-uploader-icon"></i>
							<div slot="tip">只能上传jpg / png文件，且不超过500KB</div>
						</el-upload>
					</el-form-item>
					</el-form>
					<div slot="footer" class="dialog-footer">
						<el-button @click="dialogFormVisible = false">取 消</el-button>
						<el-button type="primary" @click="submit">确 定</el-button>
						<el-button @click="this.$refs[form].resetFields();">重置</el-button>
					</div>
				</el-dialog>
			</el-form-item>
		</el-form>
		<el-table :data="list" border class="table-content">
			<el-table-column type="index" width="50" align="center" fixed="left"></el-table-column>
			<el-table-column prop="name" label="商品名称"  fixed="left" show-overflow-tooltip></el-table-column>
			<el-table-column label="价格(元)">
				<template slot-scope="{ row, column, $index }">
					￥<span v-text="row.price"></span>
				</template>
			</el-table-column>
			<el-table-column label="商品分类">
				<template slot-scope="{ row, column, $index }">
					<span v-text="row.subCategoryName"></span>
				</template>
			</el-table-column>
			<el-table-column label="avatar" align="center" fixed="right">
				<template slot-scope="{ row, column, $index }">
					<el-popover placement="left"
					            :title="`avatar - ${ row.name }`"
					            width="200"
					            trigger="hover">
						<el-image :src="row.avatar"></el-image>
						<el-button slot="reference" icon="el-icon-picture" type="text"></el-button>
					</el-popover>
				</template>
			</el-table-column>
			<el-table-column label="banner" width="120" align="center" fixed="right">
				<template slot-scope="{ row, column, $index }">
					<el-button type="text" @click="beginBannerEdit(row)">
						<i class="el-icon-picture"></i>/<i class="el-icon-edit"></i>
					</el-button>
				</template>
			</el-table-column>
			<el-table-column label="操作" width="150" fixed="right" align="center">
				<template slot-scope="scope">
					<el-button type="text" size="mini" icon="el-icon-edit">修改</el-button>

					<el-button type="text" size="mini" icon="el-icon-delete" @click.native.prevent="deleteRow(scope.$index, list)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination background
		               layout="prev,pager,next,total,sizes"
		               :total="pagination.total"
		               :page-sizes="[5,8,10,12,15]"
		               :page-size="pagination.pageSize"
		               :current-page="pagination.currentPage"
		               @size-change="pageSize => { pagination.pageSize = pageSize; getData2(1); }"
		               @current-change="getData2" class="table-footer"></el-pagination>
		<el-dialog :visible="banner.isEdit" title="banner维护" width="700px" :before-close="endBannerEdit">
			<el-upload
				:data="{ id: banner.id }"
				:file-list="banner.list"
				list-type="picture-card"
				multiple
				accept=".jpg,.png,.jpeg"
				name="banner"
				action="/product/banner/upload"
				:on-success="bannerUploadSuccessHandler"
				:before-remove="bannerBeforeRemoveHandler">
				<i class="el-icon-plus"></i>
			</el-upload>
		</el-dialog>
	</div>
</template>

<script type="text/ecmascript-6">
        import { mapState, mapActions, mapMutations } from 'vuex';

        export default {
                data() {
                        return {
                                //哪些筛选条件发到服务器：{ name: ?, mId: ?, sId: ?, pageSize: ?, begin: ? }
                                //服务器传几个数据回来：{ total: ?, list: [] }
                                searchSid: false,
                                search: { name: '', mId: 0, sId: 0 },           //筛数据条件
                                ajaxSearch: { name: '', mId: 0, sId: 0 },
                                pagination: { pageSize: 5, total: 0, currentPage: 0 },
                                banner: { isEdit: false, id: 0, list: [] },
	                        dialogFormVisible: false,
                                formLabelWidth: '130px',
	                        sub: [],
                                imageUrl: '',
	                        fileList: [],
	                        rules: {
                                        name: [
                                                { required: true, message: '请输入商品名称', trigger: 'blur' },
                                                { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
                                        ],
		                        price: [
                                                { required: true, message: '请输入商品价格', trigger: "blur" },
                                                { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
		                        ],
	                        },
	                        model: {
                                        name: '',
		                        price: '',
		                        fid: '',
		                        avatar: ''
	                        }
                        }
                },
                computed: {
                        ...mapState('category', [ 'mainList', 'subList' ]),
                        ...mapState('product', [ 'list' ]),
                        subList() {
                                if(this.search.mId === 0) return [];            //一级分类选择“请选择（即0）”说明二级没有需要渲染的，此时二级分类只有‘请选择’，返回一个空数组
                                else return this.subLists[this.search.mId] || [];       //如果二级分类this.subLists[this.search.mId]还没有加载过，是undefined，此时返回[];
                        }
                },
                watch: {
                        'search.mId': function(newValue, oldValue){
                                this.search.sId = 0;                                                                    //一级分类变的时候总是让二级分类默认是‘请选择’
                                if(newValue !== 0) {
                                        this.searchSid = true;                                                          //等待二级数据回来时通过disabled禁止选择
                                        this.initSubLists(newValue)
                                                .then(() => this.searchSid = false);                            //二级数据回来后将禁用取消
                                }
                        }
                },
                methods: {
                        ...mapActions('category', [ 'initMainList', 'getSubList' ]),
                        ...mapActions('product', [ 'getData', 'removeBanner', 'removeProduct', 'addProduct' ]),
                        ...mapMutations('product', [ 'uploadBanner' ]),
                        getData2(currentPage) {                                                 //getData2获取当前是第几页currentPage
                                this.pagination.currentPage = currentPage;              //把当前第几页赋给pagination.currentPage使其显示
                                this.getData({
                                        ...this.ajaxSearch,
                                        begin: (this.pagination.currentPage - 1) * this.pagination.pageSize,
                                        pageSize: this.pagination.pageSize
                                }).then(total => this.pagination.total = total);
                        },
                        searchHandler() {
                                this.ajaxSearch.name = this.search.name;
                                this.ajaxSearch.mId = this.search.mId;
                                this.ajaxSearch.sId = this.search.sId;
                                this.getData2(1);
                        },
                        beginBannerEdit(row) {
                                this.banner.id = row.id;
                                //对数据库里的bannerImgs字符串进行split(',')分隔成数组，再进行forEach循环
                                if(row.banner) {
                                        row.banner.split(',').forEach(item => {                             //item是分割后的每一个/images/product/banner/AI01.jpeg
                                                console.log(item);
                                                this.banner.list.push({
                                                        name: item.substr(item.lastIndexOf('/') + 1),           //item.lastIndexOf('/'): '/AI01.jpeg'。+1: 'AI01.jpeg'。
                                                        url: item,
                                                });
                                        });
                                }
                                this.banner.isEdit = true;

                        },
                        endBannerEdit() {
                                this.banner.id = 0;                     //初始化id，表示没有编辑（重新开始编辑）
                                this.banner.list = [];
                                this.banner.isEdit = false;
                        },
                        bannerUploadSuccessHandler({ status, data }, file, fileList) {
                                if(status === 200) {
                                        this.uploadBanner({ id: this.banner.id, filePath: data });
                                        this.banner.list.push({
                                                name: data.substr(data.lastIndexOf('/') + 1),
                                                url: data,
                                                uid: file.uid
                                        });
                                }
                        },
                        bannerBeforeRemoveHandler(file, fileList) {
                                this.$confirm('真删？', '提示', { type: 'warning' })
                                        .then(() => {
                                                console.log(file);
                                                this.removeBanner({ id: this.banner.id, filePath: file.url })
                                                        .then(() => {
                                                                let i = this.banner.list.findIndex(item => item.url === file.url);
                                                                this.banner.list.splice(i, 1);
                                                        })
                                        })
                                        .catch(() => {});
                                return false;           //不让控件删除，而是通过自己的代码数据驱动删除
                        },
                        deleteRow(index, rows) {
                                let payload = rows[index].id;
                                this.$confirm('此操作将删除本条商品, 是否继续?', '提示', {
                                        confirmButtonText: '确定',
                                        cancelButtonText: '取消',
                                        type: 'warning'
                                }).then(() => {
                                        this.removeProduct(payload);
                                        rows.splice(index, 1);
                                        this.$message({
                                                type: 'success',
                                                message: '删除成功!'
                                        });
                                }).catch(() => {
                                        this.$message({
                                                type: 'info',
                                                message: '已取消删除'
                                        });
                                });
                        },
                        uploadSuccess(response, file, fileList) {
                                if(response.status === 200) {
                                        this.fileList = fileList.slice(-1);
                                }
                        },
                        removeFile(file, fileList) {
                                this.fileList = [];
                        },
	                submit() {
                                this.addProduct(this.model)
	                                .then(data => {
                                                this.dialogFormVisible = false;
	                                });

	                },
                        uploadSuccess(response, file, fileList) {
                                if(response.status === 200) {
                                        this.model.avatar = response.data;
                                        this.fileList = fileList.slice(-1);
                                }
                        },
			reset() {
                                this.$refs.form.resetFields();
                                this.$refs['my-upload'].clearFiles();
			},
                },
                created() {
                        this.getSubList()
	                        .then(data => this.sub =data );
                        this.getData2(1);
                }
        };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.table-wrapper
		display: flex
		flex-direction: column
		height: 100%
		.table-header
			height: 52px
			flex-shrink: 0
		.table-content
			flex-grow: 1
		.table-footer
			height: 55px
			text-align: center
			box-sizing: border-box
			flex-shrink: 0
			padding-top: 20px
</style>