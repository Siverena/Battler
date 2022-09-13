<template>
  <div class="bt-history-my-game">
    <p class="bt-history-my-game__header">История моих игр</p>
    <div class="bt-history-my-game__wrapper">
      <div v-for="(item, key) in history" :key="key" class="bt-history-my-game__item">
        <p class="bt-history-my-game__item-number">BUTTLE {{ item.number }}</p>
        <p
          class="bt-history-my-game__item-bet"
          :class="
            item.bet == 0
              ? ''
              : item.mode == 1
              ? 'bt-history-my-game__item-bet--pink'
              : 'bt-history-my-game__item-bet--blue'
          "
        >
          {{ item.bet }}
        </p>
        <p
          class="bt-history-my-game__item-win"
          :class="
            item.win == 0
              ? ''
              : item.mode == 1
              ? 'bt-history-my-game__item-win--pink'
              : 'bt-history-my-game__item-win--blue'
          "
        >
          {{ item.win }}
        </p>
        <p class="bt-history-my-game__item-date">Дата: {{ item.date }}</p>
      </div>
    </div>
  </div>
</template>
<script src="./bt-history-my-game.js"></script>
