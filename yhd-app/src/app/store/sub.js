var Cookies = require('js-cookie');
export default {
        namespaced: true,
        state: {
                subLists: [],
                product: [],
                curCid: 0
        },
        getters: {},
        mutations: {
                _getSub(state, payload) {
                        state.subLists = payload;
                },
                _changeCurCid(state, payload){
                        state.curCid = payload
                },
                _getProduct(state, payload) {
                        state.product = payload
                },
        },
        actions: {
                getSub({ state, dispatch, commit, rootState }, payload) {
                        let id = Cookies.get('id');
                        commit('_changeCurCid', payload);
                        rootState.http({
                                method: 'post',
                                url: '/sub/menu',
                                data: { id: id },
                        })
                                .then(data => {

                                        commit('_getSub', data);
                                        if(data.length > 0) {
                                                state.curCid = data[0].id;
                                                dispatch('updateProduct', data[0].id);
                                        }

                                });
                },
                changeCurCid({ commit }, payload) {
                        commit('_changeCurCid', payload);
                },
                updateProduct({ state, dispatch, commit, rootState }, payload) {
                        rootState.http({
                                method: 'post',
                                url: '/sub/list',
                                data: {pid: payload}
                        })
                                .then(data => {
                                        commit('_getProduct', data);
                                });
                }
        },
}