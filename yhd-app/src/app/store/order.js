export default {
        namespaced: true,
        state: {
                orderDetail: [],
                list: [],
        },
        getters: {},
        mutations: {
                _getOrderDetail(state, payload) {
                        state.orderDetail = payload;
                },
                _getOrderList(state, payload) {
                        state.list = payload;
                },
        },
        actions: {
                getOrderList({commit, rootState}, payload) {
                        return rootState.http({
                                method: 'post',
                                url: '/order/orderlist',
                        })
                                .then(data => {
                                        commit('_getOrderList', data);
                                        return data;
                                })
                },
                // getOrderList2({commit, rootState}, payload) {
                //         return rootState.http({
                //                 method: 'post',
                //                 url: '/order/orderlist2',
                //         })
                //                 .then(data => {
                //                         commit('_getOrderList2', data.filter(item.pay.data[0] === 1));
                //                         return data;
                //                 })
                // },
                // getOrderList3({commit, rootState}, payload) {
                //         return rootState.http({
                //                 method: 'post',
                //                 url: '/order/orderlist3',
                //         })
                //                 .then(data => {
                //                         commit('_getOrderList3', data);
                //                         return data;
                //                 })
                // }
        }
}