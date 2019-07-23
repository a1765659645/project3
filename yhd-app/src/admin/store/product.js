export default {
        namespaced: true,
        state: {
                list: [],
        },
        getters: {},
        mutations: {
                _updateList(state, payload) {           //payload穿过来的是data里面的list
                        console.log(payload);
                        state.list = payload;
                },
                uploadBanner(state, { id, filePath }) {
                        //payload: { id: ??, filePath: ?? }
                        let i =state.list.findIndex(item => item.id === id);
                        let temp = { ...state.list[i] };
                        if(temp.banner !== '') {            //避免空的时候是‘，’
                                temp.banner = temp.banner.split(',');
                                temp.banner.push(filePath);
                                temp.banner = temp.banner.join(',');
                        } else temp.banner = filePath;
                        state.list.splice(i, 1, temp);
                },
                _removeBanner(state, { id, newBanner }) {
                        let i = state.list.findIndex(item => item.id === id);
                        let temp = { ...state.list[i] };
                        temp.banner = newBanner;
                        state.list.splice(i, 1, temp);
                },
                _addProduct(state, payload) {
                        state.list.push(payload);
                },
        },
        actions: {
                //预计发送的payload = { name: mId: ?, sId: ?, begin: ?, pageSize: ? }
                getData({ commit, rootState }, payload) {
                        return rootState.http({
                                method: 'post',
                                data: payload,
                                url: '/product/admin-list'
                        })
                                .then(data => {                 //data: { total: ??, list:[ ?,?,?... ] }
                                        console.log(data);
                                        commit('_updateList', data.list);
                                        return data.total;              //将total传给组件
                                })
                },
                //预计发送的payload = { id: ?, filePath: ? }
                removeBanner({ state, commit, rootState }, { id, filePath }) {
                        let oldBanner = state.list.find(item => item.id === id).banner;
                        let newBanner = '';
                        if(oldBanner !== filePath) {
                                let arr = oldBanner.split(',');
                                arr.splice(arr.indexOf(filePath), 1);
                                newBanner = arr.join(',');
                        }
                        return rootState.http({
                                method: 'post',
                                url: '/product/banner/remove',
                                data: { id, filePath, newBanner }
                        })
                                .then(() => {
                                        commit('_removeBanner', { id, newBanner });
                                })
                },
                removeProduct({ commit, rootState }, payload) {
                        return rootState.http({
                                method: 'post',
                                url: '/product/remove',
                                data: { id: payload }
                        })
                                .then(() => {
                                        return Promise.resolve();
                                });
                },
                // 新增商品，预计发送的payload={ name: ?, price:?, fid: ?, avatar: ? }
                addProduct({ rootState, commit ,state}, payload) {
                        return rootState.http({
                                method: 'post',
                                url: '/product/add',
                                data: payload
                        })
                                .then(data => {
                                        let temp = {};
                                        temp.name = payload.name;
                                        temp.price = payload.price;
                                        temp.fid = payload.fid;
                                        temp.subCategoryName = state.list.find(item => item.fid === temp.fid).subCategoryName;
                                        temp.avatar = `/images/product/avatar/${ payload.avatar }`;
                                        // 调用mutations中的方法更新仓库的数据
                                        commit('_addProduct', temp);
                                        // 给组件返回一个结果
                                        return temp;
                                });
                }
        }
};