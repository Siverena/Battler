<template>
  <section class="bt-last-games">
    <p class="bt-last-games__header">Прошедшие игры</p>
    <div class="bt-last-games__wrapper">
      <div v-for="(game, key) in games" :key="key" class="bt-last-game">
        <div
          class="bt-last-game__mode"
          :class="game.mode == 1 ? 'bt-last-game__mode--pink' : 'bt-last-game__mode--blue'"
        >
          <img src="../../assets/img/last-games/light-white.png" alt="" />
        </div>
        <div class="bt-last-game__summ">
          <img src="../../assets/img/last-games/light-grey.png" alt="" />{{ game.summ }}
        </div>
        <div class="bt-last-game__people">
          <img src="../../assets/img/last-games/people.png" alt="" />{{ game.people }}
        </div>
        <div class="bt-last-game__percent">{{ game.percent }}%</div>
      </div>
    </div>
  </section>
</template>
<script src="./bt-last-games.js"></script>
