<!--HTML-->
<template>
  <h1>購物車</h1>
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
        <tr v-for="item in paginatedItems" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>
            <input
              type="number"
              v-model="item.quantity"
              @input="updateTotalPrice(item)"
              min="1"
            />
          </td>
          <td>{{ item.totalPrice }}</td>
          <td><button @click="removeItem(item.id)">刪除</button></td>
        </tr>
      </tbody>
    </table>

    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">上一頁</button>
      <span>頁數: {{ currentPage }} / {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">
        下一頁
      </button>
    </div>

    <div class="summary">
      <h3>結帳總金額: {{ totalAmount }}</h3>
    </div>
  </div>
  <button @click="navigateToCheckout">前往結帳</button>
</template>

<!--JS/TS-->

<script lang="ts" setup name="cart">
import { commodity } from "@/models/commodity";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
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

const router = useRouter();
const navigateToCheckout = () => {
  router.push("/checkout"); // 導航到結帳頁面
};

// 分頁相關的 data
const currentPage = ref(1); // 當前頁碼
const itemsPerPage = 5; // 每頁顯示 5 個商品

// 計算總頁數
const totalPages = computed(() => {
  return Math.ceil(props.cartItems.length / itemsPerPage);
});

// 計算當前頁面的商品
const paginatedItems = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return props.cartItems.slice(startIndex, endIndex);
});
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
const emit = defineEmits<{
  (e: "remove-from-cart", id: number): void;
  (e: "add-to-cart", product: commodity): void;
}>();

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
}

// 切換到上一頁
function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
}

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
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.pagination button {
  margin: 0 10px;
  padding: 5px 10px;
}
</style>
