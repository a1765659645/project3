export default {
        namespaced: true,
        state: {
                name: ''
        },
        getters: {},
        mutations: {
                _updateName(state, payload) {
                        state.name = payload;
                }
        },
        actions: {
                getName({ commit, rootState }) {
                        return rootState.http({
                                method: 'post',
                                url: '/profile/center',
                        })
                                .then(data => {
                                        commit('_updateName', data);
                                        return;
                                })
                }
        }
}