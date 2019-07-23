export default {
        namespaced: true,
        state: {
                list: []
        },
        getters: {},
        mutations: {
                _getAddress(state, payload) {
                        state.list = payload;
                }
        },
        actions: {
                getAddress({ rootState, commit }, payload) {
                        return rootState.http({
                                method: 'post',
                                url: '/address/list',
                        })
                                .then(data => {
                                        commit('_getAddress', data);
                                        return data;
                                })
                }
        }
}