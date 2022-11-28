import { createStore } from 'vuex'
// import Axios from 'axios';

export default createStore({
    state: {
        cities: [{
                id: 1,
                name: "Москва"
            },
            {
                id: 2,
                name: "Санкт-Петербург"
            },
            {
                id: 3,
                name: "Казань"
            }
        ]
    },
    getters: {
        NAME: state => {
            return state.cities.name;
        },
    },
    mutations: {
        SET_NAME: (state, payload) => {
            state.cities.name = payload;
        }
    },
    actions: {
        SET_NAME: async(context, name) => {
            let { data } = await Axios.post('http://hh.autodrive-agency.ru/test-tasks/front/task-7/', { name: name });

            if (data.status == 200) {
                context.commit('SET_NAME', name);
            }
        },
    },
    modules: {}
})