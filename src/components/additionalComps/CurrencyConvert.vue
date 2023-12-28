<template>
  <div style="margin-top: 5px" class="currency">
    <h1 style="text-align: center; color: rgb(38, 97, 249)">
      Currency Converter
    </h1>
    <p style="text-align: center; color: rgb(166, 166, 166)">
      Integer egestas erat porta hendrent. Sed mauris pharetra viverra,rutrum
      <br />
      sed nibh
    </p>
    <div
      style="
        width: 98%;
        margin: 0 15px;
        height: 4px;
        border-radius: 0px 1px;
        background-color: rgb(175, 174, 218);
      "
    ></div>
    <v-sheet width="600" class="mx-auto mt-2">
      <v-form ref="form">
        <v-text-field
          center-affix="red"
          v-model="amount"
          placeholder="Amount"
          bg-color="rgb(254, 253, 253)"
          label-color="red"
          variant="outlined"
          type="double"
          required
        ></v-text-field>
        <v-label label-font-size="14px">From</v-label>

        <v-select
          chips
          v-model="from"
          :items="countries"
          placeholder="country"
          bg-color="rgb(254, 253, 253)"
          variant="outlined"
          required
          menu-icon="mdi-chevron-down"
          theme="blue"
        >
        </v-select>
        <div style="border-radius: 50%; text-align: center; box-shadow: none">
          <v-btn
            style="border-radius: 50%; text-align: center"
            @click="exchangeCurr()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="blue"
              viewBox="0 0 17 17"
              aria-hidden="true"
              class="miscellany___StyledIconSwap-sc-1r08bla-2 ikHqUN"
              width="20px"
            >
              <path
                fill="blue"
                fill-rule="evenodd"
                d="M11.726 1.273l2.387 2.394H.667V5h13.446l-2.386 2.393.94.94 4-4-4-4-.94.94zM.666 12.333l4 4 .94-.94L3.22 13h13.447v-1.333H3.22l2.386-2.394-.94-.94-4 4z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </v-btn>
        </div>
        <v-label label-font-size="14px">To</v-label>
        <v-select
          chips
          v-model="to"
          :items="countries"
          bg-color="rgb(254, 253, 253)"
          variant="outlined"
          placeholder="country"
          menu-icon="mdi-chevron-down"
          required
        ></v-select>
        <div style="text-align: center">
          <p>Exchange Rate</p>
          <p style="color: rgb(38, 97, 249); font-size: 30px; font-weight: 300">
            {{ result }}
          </p>
        </div>
        <div class="d-flex flex-column">
          <v-btn
            color="primary"
            class="mt-4"
            block
            @click="convertCurrency()"
            style="font-size: 12px; font-weight: bold"
          >
            Convert
          </v-btn>
        </div>
      </v-form>
    </v-sheet>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "currency-converter",
  data() {
    return {
      countries: [], // Add an empty array to hold the countries
      amount: 0.0,
      from: "USD",
      to: "EUR",
      result: 0.0,
      countriesDate: null,
    };
  },
  async mounted() {
    try {
      //https://www.xe.com/api/protected/midmarket-converter/
      const response = await axios.get(
        "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_7NRM5J7KzJ6HWhCbS7WtzFbeuMqlxi1jiCceeRdl"
      );
      const data = response.data;
      console.log("data", data);
      // Assuming the response data contains an array of countries, you can assign it to the 'countries' data property
      this.countries = Object.keys(data.data);
      this.countriesDate = data.data;
    } catch (error) {
      console.error("Failed to fetch countries:", error);
    }
  },
  methods: {
    exchangeCurr() {
      let temp = this.from;
      this.from = this.to;
      this.to = temp;
    },
  },
  watch: {
    amount(Val) {
      let from = this.countriesDate[this.from];
      let to = this.countriesDate[this.to];
      this.result = (Val * to) / from;
    },
    from(Val) {
      let from = this.countriesDate[Val];
      let to = this.countriesDate[this.to];
      this.result = (this.amount * to) / from;
    },
    to(Val) {
      let from = this.countriesDate[this.from];
      let to = this.countriesDate[Val];
      this.result = (this.amount * to) / from;
    },
  },
};
</script>
<style>
.mdi-chevron-down {
  color: blue;
}
.v-label {
  text-align: right !important;
  color: black !important;
}
</style>
