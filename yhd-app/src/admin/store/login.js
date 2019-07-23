export default {
        namespaced: true,
        state: {
                name: '' // 标识是否登录
        },
        getters: {
                isLogin(state) {
                        return state.name !== '';
                }
        },
        mutations: {
                _login(state, payload) {
                        state.name = payload
                },
                logout(state) {
                        state.name = '';
                }
        },

        actions: {
                // payload = { name:?, pwd:? }
                // 登录
                login({ commit, rootState }, payload) {
                        rootState.http({
                                method: 'post',
                                data: payload,
                                url: '/admin/login'
                        })
                                .then(() => commit('_login', payload.name));
                },
                // 修改密码
                password({ commit, rootState }, payload) {
                        rootState.http({
                                method: 'post',
                                data: payload,
                                url: '/admin/password'
                        }).then(() => commit('logout'))
                }
        },
        modules: {  }
}