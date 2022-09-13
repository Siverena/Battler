<template>
  <div class="bt-history">
    <p class="bt-history__header">История выводов и пополнений</p>
    <div class="bt-history__wrapper">
      <div v-for="(item, key) in history" :key="key" class="bt-history__item">
        <p class="bt-history__item-codetype">{{ item.codetype == 1 ? 'Пополнение' : 'Вывод' }}</p>
        <p
          class="bt-history__item-amount"
          :class="
            item.codetype == 1 ? 'bt-history__item-amount--pink' : 'bt-history__item-amount--blue'
          "
        >
          {{ item.amount }}
        </p>
        <p class="bt-history__item-system">{{ item.system }}</p>
        <p class="bt-history__item-date">Дата: {{ new Date(item.date).toLocaleString() }}</p>
      </div>
    </div>
  </div>
</template>
<script src="./bt-history.js"></script>
