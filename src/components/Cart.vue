<!--HTML-->
<template>
  <div class="cart">
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
          <td>
            <!-- <button @click="decreaseQuantity(item)">-</button> -->
            <input
              type="number"
              v-model="item.quantity"
              @input="updateTotalPrice(item)"
              min="1"
            />
            <!-- <button @click="increaseQuantity(item)">+</button> -->
          </td>
          <td>{{ item.totalPrice }}</td>
          <td><button @click="removeItem(item.id)">刪除</button></td>
        </tr>
      </tbody>
    </table>
    <div class="summary">
      <h3>結帳總金額: {{ totalAmount }}</h3>
    </div>
  </div>
</template>

<!--JS/TS-->

<script lang="ts" setup name="cart">
import { commodity } from "@/models/commodity";
import { computed } from "vue";
//data
/*
let cart = reactive([
  {
    id: 1,
    name: "Apple Mac mini",
    price: 12000,
    quantity: 1,
    totalPrice: 12000,
  },
  {
    id: 2,
    name: "Nike Shoes",
    price: 2000,
    quantity: 1,
    totalPrice: 2000,
  },
]);
cart.forEach((item) => {
  item.totalPrice = item.price * item.quantity;
});
const totalAmount = computed(() =>
  cart.reduce((total, item) => total + item.totalPrice, 0)
);*/
// 接收來自 App.vue 的 props，這裡是購物車的商品清單
const props = defineProps<{
  cartItems: commodity[];
}>();
//function
/*
function updateTotalPrice(item: {
  price: number;
  quantity: number;
  totalPrice: number;
}) {
  item.totalPrice = item.price * item.quantity;
}

function removeItem(id: number) {
  cart.splice(
    cart.findIndex((item) => item.id === id),
    1
  );
}*/

// emit 事件通知父組件
const emit = defineEmits(["remove-from-cart"]);

// 結帳總金額
const totalAmount = computed(() =>
  props.cartItems.reduce((total, item) => total + item.totalPrice, 0)
);

// 更新單個商品的總價
function updateTotalPrice(item: {
  price: number;
  quantity: number;
  totalPrice: number;
}) {
  item.totalPrice = item.price * item.quantity;
}

// 刪除購物車中的商品
function removeItem(id: number) {
  emit("remove-from-cart", id); // 通知父組件刪除商品
}
</script>

<!--樣式-->
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
  padding: 5px;
}
input[type="number"] {
  width: 50px;
  text-align: center;
}
/* 使用百分比來控制寬度，根據螢幕自動調整 */
table,
th,
td,
.summary {
  max-width: 100%; /* 表格、內容自動調整 */
}
</style>
