import { createStore } from 'vuex'
import axios from 'axios'
import { toDisplayString } from 'vue'
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import {useCookies} from 'vue-cookies'
import router from '@/router';

axios.defaults.withCredentials = true
axios.defaults.headers = $cookies.get('token')

export default createStore({
  state: {
    fruits:null
  },
  getters: {
  },
  mutations: {
    setFruits(state,payload){
      state.fruits = payload
    }
  },
  actions: {
    addUser({commit},info){
      let {data} = axios.post('http://localhost:5050/users',info)
        if(data){
          toast("Succesfully added user!", {
            "theme": "dark",
  "type": "success",
  "position": "top-center",
  "dangerouslyHTMLString": true
          })
        }
    },
    async loginUser({commit},info){
      let {data} = await axios.post('http://localhost:5050/users/login',info)
      console.log(data);
      $cookies.set('token',data.token)
      if(data.message){
        toast("Login is successful!", {
         "theme": "dark",
         "type": "success",
          "position": "top-center",
          "dangerouslyHTMLString": true
        })
        await router.push('/')
        location.reload()
      }
    },
    async getFruits({commit}){
      let {data} = await axios.get('http://localhost:5050/fruit')
      commit('setFruits',data)
      
    },
    async addToCart({commit},fruit_id){
      let {data} = await axios.post('http://localhost:5050/fruit/cart',{id:fruit_id})
      console.log(data);
    }
  },
    modules: {}
})
