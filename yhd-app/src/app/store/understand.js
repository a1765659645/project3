export default {
        namespaced: true,
        state: {
                list: [],
                superList: []
        },
        getters:{},
        mutations: {
                _getData(state,payload) {
                        state.list = payload;
                },
                _getSuper(state, payload) {
                        state.superList = payload;
                }
        },
        actions: {
                getData({ commit, rootState }) {
                        rootState.http({
                                method: 'get',
                                url: '/index/understand'
                        })
                                .then(data =>{
                                        commit('_getData', data);
                                })
                },
                getSuper({ commit, rootState }) {
                        rootState.http({
                                method: 'get',
                                url: '/index/super'
                        })
                                .then(data =>{
                                        commit('_getSuper', data);
                                })
                }
        }
}