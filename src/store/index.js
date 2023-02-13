import { createStore } from 'vuex'
import axios from 'axios';

const RESULT_ADD = 'RESULT_ADD';

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
        ],
        resultForm: []
    },
    getters: {
        getResultForm: state => state.resultForm
    },
    mutations: {
        [RESULT_ADD](state, result) {
            state.resultForm.push(result)
        },
    },
    actions: {
        sendFormDatas(context, result) {
            context.commit('RESULT_ADD', result)
            console.log(result)
            return axios.post('http://hh.autodrive-agency.ru/test-tasks/front/task-7/', { result })
                .then((result) => {
                    console.log(result)
                    return result
                })
                .catch((error) => {
                    console.log(error)
                    return error
                })
        },
    },
    modules: {}
})