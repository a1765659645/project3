export default {
        namespaced: true,
        state: {
                subList: []
        },
        getters: {},
        mutations: {
                _getSubList(state, payload) {
                        state.subList = payload;
                }
        },
        actions: {
                getSubList({ state,commit, rootState }, payload) {
                        return rootState.http({
                                url: '/admin/sub'
                        })
                                .then(data => {
                                        commit('_getSubList', data);
                                        return data;
                                })
                }
        }
}