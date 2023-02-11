import { createStore } from 'vuex'
import axios from 'axios';

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
        ID: state => {
            return state.cities.id;
        },
    },
    mutations: {
        GET_NAME_M: (state, id) => {
            state.cities.id = id;
        }
    },
    actions: {
        GET_NAME: async(context) => {
            return axios('http://hh.autodrive-agency.ru/test-tasks/front/task-7/', {
                    method: "POST"
                })
                .then((id) => {
                    context.commit('GET_NAME_M', id.data)
                    return id
                })
                .catch((error) => {
                    console.log(error)
                    return error
                })
        },
    },
    modules: {}
})