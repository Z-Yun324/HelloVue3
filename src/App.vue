<template>
  <div class="app">
    <h1>購物車</h1>
    <Cart />
  </div>
</template>

<script lang="ts">
import Cart from "./components/Cart.vue";
import Commodity from "./components/Commodity.vue";

export default {
  name: "App",
  components: { Commodity, Cart },
};
</script>

<style>
.app {
  background-color: rgb(178, 214, 214);
  padding: 20px;
}
</style>
