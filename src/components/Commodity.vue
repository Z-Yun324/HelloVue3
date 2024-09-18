<!--HTML-->
<template>
  <div class="commodity">
    <h3>{{ apple_ipone16.brand }}</h3>
    <h2>{{ apple_ipone16.name }}</h2>
    <h2>數量 {{ apple_ipone16.quantity }}</h2>
    <h2>價錢 $ {{ apple_ipone16.price }}</h2>
    <h2>總價錢 $ {{ comTotal }}</h2>
    <button @click="addCom">增加</button>
    <button @click="deleteCom">刪除</button>
    <hr />
  </div>
</template>

<script lang="ts" setup name="commodity">
import { computed, reactive } from "vue";
//data
let apple_ipone16 = reactive({
  brand: "APPLE",
  name: "IPONE16",
  quantity: 0,
  price: 500000,
});
const comTotal = computed(() => apple_ipone16.quantity * apple_ipone16.price);
//function
function deleteCom() {
  if (apple_ipone16.quantity > 0) {
    apple_ipone16.quantity -= 1;
  } else {
    alert("數量已為零");
  }
}
function addCom() {
  apple_ipone16.quantity += 1;
}
</script>

<!--樣式-->
<style scoped>
.commodity {
  background-color: #fff;
  padding: 5px;
}
</style>
