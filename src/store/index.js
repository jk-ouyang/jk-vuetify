import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    name: "欧里给",
    
  },
  mutations:{
    setName(state,msg){
      state.name = msg
    }
  }
  
})

export default store