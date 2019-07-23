export default {
        namespaced: true,
        state: {
                detail: {
                        name: '',
                        price: '',
                        banner: []
                }
        },
        getters: {},
        mutations: {
                _updateDetail(state, payload) {
                        state.detail.name = payload.name;
                        state.detail.price = payload.price;
                        if(payload.banner) {
                                state.detail.banner = payload.banner.split(',')
                        }

                },
                _emptyBanner(state) {
                        state.detail.banner = []
                }
        },
        actions: {
                updateDetail({commit, rootState}) {
                        let params = window.location.href.substr(1).split('?');
                        let id = parseInt(params[1].split('=')[1]);
                        return rootState.http({
                                url: '/sub/detail',
                                method: 'post',
                                data: { id:id },
                        })
                                .then(data => {
                                        commit('_updateDetail', data);
                                })
                },
                emptyBanner({ commit }) {
                        commit('_emptyBanner');
                },
                addCart({ rootState }) {
                        let params = window.location.href.substr(1).split('?');
                        let id = parseInt(params[1].split('=')[1]);
                        let pid = id;
                        rootState.http({
                                url: '/cart/add',
                                method: 'post',
                                data: { pid: pid }
                        })
                                .then(() => {
                                        window.location.href = 'app.html#/cart';
                                })
                }
        }
}