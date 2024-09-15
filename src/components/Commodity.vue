<!--HTML-->
<template>
  <div class="commodity">
    <h3>{{ brand }}</h3>
    <h2>{{ name }}</h2>
    <h2>數量 {{ quantity }}</h2>
    <h2>價錢 $ {{ price }}</h2>
    <h2>總價錢 $ {{ comTotal }}</h2>
    <button @click="addCom">增加</button>
    <button @click="deleteCom">刪除</button>
  </div>
</template>

<script lang="ts" setup name="commodity">
import { computed, ref } from "vue";
//data
let brand = "APPLE";
let name = "IPONE16";
let quantity = ref(0);
let price = 50000;
const comTotal = computed(() => quantity.value * price);
//function
function deleteCom() {
  if (quantity.value > 0) {
    quantity.value -= 1;
  } else {
    alert("數量已為零");
  }
}
function addCom() {
  quantity.value += 1;
}
</script>

<!--樣式-->
<style scoped>
.commodity {
  background-color: #fff;
  padding: 20px;
}
</style>
