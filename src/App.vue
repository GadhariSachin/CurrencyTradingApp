<template>
  <v-app>
    <v-main>
      <v-row class="text-center">
        <v-col col="12">
          <h1>Top Crypto Currencies List</h1>
        </v-col>
      </v-row>
      <CurrencyList />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import CurrencyList from "./components/CurrencyList.vue";

export default Vue.extend({
  name: "App",

  components: {
    CurrencyList,
  },

  data: () => ({}),
});
</script>

<style>
.v-main {
  background-color: #ededed;
}
</style>