import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currencyData: [],
  },
  mutations: {
    currencyDataMutation(state, response){
      state.currencyData = response.coins
    },
  },
  actions: {
    FetchCurrencyData(context){
      axios.get("https://api.coinranking.com/v1/public/coins/?limit=100")
      .then(function(response){
        context.commit("currencyDataMutation", response.data.data)
      })
      .catch(function(e){
        console.error("Error", e)
      })
    }
  }
})
