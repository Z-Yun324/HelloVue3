<template>
  <div class="app">
    <h1>購物車</h1>
    <Commodity @add-to-cart="addToCart" />
    <Cart :cartItems="cartItems" @remove-item="removeFromCart" />
  </div>
</template>

<script lang="ts" setup name="App">
import { commodity } from "@/models/commodity";
import { ref } from "vue";
import Cart from "./components/Cart.vue";
import Commodity from "./components/Commodity.vue";

// 購物車清單
const cartItems = ref<commodity[]>([]);

// 處理 Commodity 新增商品到購物車的事件
function addToCart(product: commodity) {
  // 檢查購物車中是否已有該商品
  const existingProduct = cartItems.value.find(
    (item) => item.name === product.name
  );
  if (existingProduct) {
    existingProduct.quantity += product.quantity; // 若已有商品，增加數量
  } else {
    cartItems.value.push(product); // 若沒有，將新商品加入購物車
  }
}

// 從購物車移除商品
function removeFromCart(id: number) {
  cartItems.value = cartItems.value.filter((item) => item.id !== id);
}
</script>

<style>
.app {
  max-width: 100%;
  background-color: rgb(178, 214, 214);
}
</style>
