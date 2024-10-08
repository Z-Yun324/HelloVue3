<template>
  <div class="checkout">
    <h2>結帳頁面</h2>
    <table v-if="cartItems.length > 0">
      <thead>
        <tr>
          <th>商品名稱</th>
          <th>價格</th>
          <th>數量</th>
          <th>總價</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cartItems" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.totalPrice }}</td>
        </tr>
      </tbody>
    </table>

    <div class="summary">
      <h3>結帳總金額: {{ totalAmount }}</h3>
    </div>

    <button @click="checkout">進行結帳</button>
  </div>
</template>

<script lang="ts" setup name="checkout">
import { commodity } from "@/models/commodity";
import { computed } from "vue";
import { useRouter } from "vue-router";

// 接收購物車商品列表
const props = defineProps<{
  cartItems: commodity[];
}>();

// 獲取路由器實例
const router = useRouter();

// 計算結帳總金額
const totalAmount = computed(() => {
  return props.cartItems.reduce((total, item) => total + item.totalPrice, 0);
});

// 結帳按鈕的邏輯
function checkout() {
  alert(`結帳成功，總金額為 ${totalAmount.value}`);
  // 可以在這裡進一步整合付款邏輯
  // 導航到結帳頁面
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  border-bottom: 1px solid rgb(115, 116, 121);
  padding: 10px;
  text-align: center;
}
.summary {
  margin-top: 20px;
  text-align: right;
}
button {
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #45a049;
}
</style>
