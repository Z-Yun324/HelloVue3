<template>
  <div class="bg-slate-500">
    <!--
    <Commodity @add-to-cart="addToCart" />
    <Cart :cartItems="cartItems" @remove-from-cart="removeFromCart" /> -->
    <FrontpageNavigation />
    <router-view
      :cartItems="cartItems"
      @remove-from-cart="removeFromCart"
      @add-to-cart="addToCart"
    ></router-view>
  </div>
</template>

<script lang="ts" setup>
import { commodity } from "@/models/commodity";
import { ref } from "vue";
import FrontpageNavigation from "./components/FrontpageNavigation.vue";

// 購物車清單
const cartItems = ref<commodity[]>([]);

// 處理 Commodity 新增商品到購物車的事件
function addToCart(product: commodity) {
  console.log("Product added to cart:", product); // 加入這行
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
