<template>
  <div class="car">
    <h1>購物車</h1>
    <Commodity />
  </div>
</template>

<script lang="ts">
import Commodity from "./components/Commodity.vue";

export default {
  name: "App",
  components: { Commodity },
};
</script>

<style>
.car {
  background-color: rgb(87, 187, 187);
  padding: 20px;
}
</style>
