<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="currencyData"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          hide-default-footer
          class="elevation-1"
          @page-count="pageCount = $event"
        >
          <template v-slot:item.iconUrl="{ item }">
            <v-img
              :src="item.iconUrl"
              :lazy-src="item.iconUrl"
              max-height="25"
              max-width="25"
              :alt="item.name"
            ></v-img>
          </template>
        </v-data-table>
        <div class="text-center pt-2">
          <v-row>
            <v-col offset="4" cols="2">
              <v-select
                v-model="itemsPerPage"
                :items="items"
                label="Items per page"
              ></v-select>
            </v-col>
            <v-col cols="6">
              <v-pagination v-model="page" :length="pageCount"></v-pagination>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CurrencyList",
  data: () => ({
    timer: 0,
    page: 1,
    pageCount: 0,
    itemsPerPage: 10,
    items: [10, 25, 50, 100],
    headers: [
      {
        text: "Icon",
        value: "iconUrl",
        sortable: false,
      },
      {
        text: "Name",
        value: "name",
        sortable: false,
      },
      {
        text: "Symbol",
        value: "symbol",
        sortable: false,
      },
      {
        text: "Price",
        value: "price",
      },
      {
        text: "Price Chnage (%)",
        value: "change",
      },
    ],
  }),
  computed: {
    currencyData() {
      return this.$store.state.currencyData;
    },
  },
  created() {
    this.fetchCurrencyDataList();
    this.timer = setInterval(this.fetchCurrencyDataList, 300000);
  },
  methods: {
    fetchCurrencyDataList() {
      this.$store.dispatch("FetchCurrencyData");
    },
  },
});
</script>
