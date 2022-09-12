<template>
  <div class="money">
    <BtSectionHeader>
      <template v-slot:up-text> Пополнение и вывод </template>
      <template v-slot:bottom-text> Пополняй баланс любым удобным способом. </template>
    </BtSectionHeader>

    <div class="bt-operations">
      <div class="bt-operations__withdrawal"></div>
      <div class="bt-operations__replenishment"></div>
    </div>
    <BtHistory />
  </div>
</template>
<script src="./money-page.js"></script>
