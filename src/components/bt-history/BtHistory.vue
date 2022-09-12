<template>
  <div class="bt-history">
    <p class="bt-history__header">История выводов и пополнений</p>
    <div class="bt-history__wrapper">
      <div v-for="(item, key) in history" :key="key" class="bt-history__item">
        <p>{{ item.codetype == 1 ? 'Пополнение' : 'Вывод' }}</p>
        <p>{{ item.amount }}</p>
        <p>{{ item.system }}</p>
        <p>Дата: {{ item.date }}</p>
      </div>
    </div>
  </div>
</template>
<script src="./bt-history.js"></script>
