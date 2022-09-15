<template>
  <div class="bt-mobile-nav">
    <router-link class="bt-mobile-nav__link" to="/">Главная</router-link>
    <router-link class="bt-mobile-nav__link" to="/referal">Реферальная&nbsp;система</router-link>
    <router-link class="bt-mobile-nav__link" to="/help">Помощь</router-link>
    <router-link class="bt-mobile-nav__link bt-mobile-nav__link--money" to="money"
      >Вывод</router-link
    >
    <a class="bt-mobile-nav__link" @click="logout">Выход</a>
  </div>
</template>
<script src="./bt-mobile-nav.js"></script>
