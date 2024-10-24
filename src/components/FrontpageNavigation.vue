<template>
  <header>
    <nav class="container flex items-center p-3 flex-wrap">
      <router-link to="/" class="p-2 mr-4 inline-flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#000000"
          viewBox="0 0 256 256"
          class="fill-current text-white h-8 w-8 mr-2"
        >
          <path
            d="M232,64H203.31l26.35-26.34a8,8,0,0,0-11.32-11.32L192,52.69V24a8,8,0,0,0-16,0V56.57a64,64,0,0,0-77.2,10.12l0,0,0,0,0,0c-40.1,39.39-70.25,133.08-73.19,142.45a16,16,0,0,0,21.26,21.26c9.37-2.94,103.18-33.13,142.47-73.21A64,64,0,0,0,199.43,80H232a8,8,0,0,0,0-16Zm-54.12,82c-8.94,9.12-21.25,17.8-34.85,25.73l-25.38-25.39a8,8,0,0,0-11.32,11.32l22.09,22.09c-40.87,21.19-86.32,35.42-87,35.63A7.93,7.93,0,0,0,40,216a7.93,7.93,0,0,0,.59-1.41c.29-.93,28-89.58,64-130.67l33.77,33.77a8,8,0,0,0,11.32-11.32L116.18,72.88A48,48,0,0,1,177.88,146Z"
          ></path>
        </svg>
        <span class="text-xl text-white font-bold uppercase tracking-wide"
          >商城</span
        >
      </router-link>
      <button
        class="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
        @click="toggleNav"
      >
        <i class="material-icons">menu</i>
      </button>
      <div
        :class="{
          hidden: !isNavVisible,
          block: isNavVisible,
          'lg:flex': true,
        }"
        class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto"
        id="navigation"
      >
        <router-link
          to="/"
          class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
          >新增</router-link
        >
        <router-link
          to="/cart"
          class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#fcfcfc"
            viewBox="0 0 256 256"
          >
            <path
              d="M230.14,58.87A8,8,0,0,0,224,56H62.68L56.6,22.57A8,8,0,0,0,48.73,16H24a8,8,0,0,0,0,16h18L67.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,160,204a28,28,0,1,0,28-28H91.17a8,8,0,0,1-7.87-6.57L80.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,230.14,58.87ZM104,204a12,12,0,1,1-12-12A12,12,0,0,1,104,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,200,204Zm4-74.57A8,8,0,0,1,196.1,136H77.22L65.59,72H214.41Z"
            ></path>
          </svg>
        </router-link>
      </div>
    </nav>
  </header>
</template>
<script lang="ts" setup>
import { ref } from "vue";

// 使用 ref 來追蹤導航欄的顯示狀態
const isNavVisible = ref(false);

// 切換導航欄顯示狀態的函數
function toggleNav() {
  isNavVisible.value = !isNavVisible.value;
}
</script>
