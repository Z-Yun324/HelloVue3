<!--HTML-->
<template>
  <hr />
  <div>
    <h2>新增商品</h2>
    <div>
      <label>商品名稱:</label>
      <input v-model="newProduct.name" placeholder="商品名稱" />
    </div>
    <br />
    <div>
      <label>價格:</label>
      <input
        v-model.number="newProduct.price"
        placeholder="價格"
        type="number"
      />
    </div>
    <br />
    <div>
      <label>數量:</label>
      <input
        v-model.number="newProduct.quantity"
        placeholder="數量"
        type="number"
        min="1"
      />
    </div>
    <br />
    <button @click="addProduct">新增商品</button>
  </div>
  <hr />
</template>

<script lang="ts" setup name="commodity">
import { commodity } from "@/models/commodity";
import { ref } from "vue";

// 使用 `defineEmits` 來定義 emit 事件
const emit = defineEmits(["add-to-cart"]);
// 定義新的商品
const newProduct = ref<commodity>(new commodity(Date.now(), "", 0, 1));
// 新增商品功能
function addProduct() {
  // 檢查商品名稱和價格是否有效
  if (newProduct.value.name && newProduct.value.price > 0) {
    const productToAdd = new commodity(
      Date.now(), // 使用唯一的 ID
      newProduct.value.name,
      newProduct.value.price,
      newProduct.value.quantity
    );
    emit("add-to-cart", productToAdd); // 將新增的商品發送到父組件
    resetForm(); // 重設表單
  }
}

// 重設表單
function resetForm() {
  newProduct.value.name = "";
  newProduct.value.price = 0;
  newProduct.value.quantity = 1;
}
</script>

<!--樣式-->
<style scoped>
.commodity {
  padding: 5px;
}
.label,
input {
  max-width: 100%;
}
.hr {
  border: 0;
  height: 1px;
  background: #333;
  background-image: linear-gradient(to right, #ccc, #333, #ccc);
}
</style>
