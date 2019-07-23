export default {
        namespaced: true,
        state: {
                product: []
        },
        getters: {},
        mutations: {
                _getProduct(state, payload) {
                        state.product = payload;
                }
        },
        actions: {
                getProduct({ commit, rootState }, payload) {
                        let orderId1 = window.location.href.split('/');
                        let orderId = orderId1[orderId1.length-1];
                        return rootState.http({
                                method: 'post',
                                url: '/order/orderDetail',
                                data: { orderId: orderId },
                        })
                                .then(data => {
                                        commit('_getProduct', data);
                                        return data;
                                });
                }
        }
}