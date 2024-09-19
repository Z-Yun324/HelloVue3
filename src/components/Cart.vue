<!--HTML-->
<template>
  <div class="cart">
    <table v-if="cart.length > 0">
      <thead>
        <tr>
          <th>商品名稱</th>
          <th>價格</th>
          <th>數量</th>
          <th>總價</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cart" :key="item.id">
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
import { computed, reactive } from "vue";
//data
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
);
//function

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
  border-bottom: 1px solid black;
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
</style>
