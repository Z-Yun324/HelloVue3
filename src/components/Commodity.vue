<!--HTML-->
<template>
  <div class="commodity">
    <h3>{{ brand }}</h3>
    <h2>{{ name }}</h2>
    <h2>{{ price }}</h2>
    <button @click="delete">刪除</button>
  </div>
</template>

<!--JS/TS-->
<script lang="ts">
export default {
  name: "Commodity",
  data() {
    return {
      brand: "APPLE",
      name: "IPONE16",
      price: 50000,
    };
  },
  methods: {
    deleteCom() {
      alert("已刪除");
    },
  },
};
</script>

<!--樣式-->
<style scoped>
.commodity {
  background-color: #fff;
  padding: 20px;
}
</style>
