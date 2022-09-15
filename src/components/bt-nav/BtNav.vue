<template>
  <section class="bt-navigation">
    <button class="bt-nav__open-mob-nav" @click="toggleMobileNav">
      <img src="../../assets/img/mobile-nav/dot.png" alt="" />
    </button>
    <div class="bt-nav__wrapper">
      <nav class="bt-nav">
        <router-link class="bt-nav__link" to="/">Главная</router-link>
        <router-link class="bt-nav__link" to="/referal">Реферальная&nbsp;система</router-link>
        <router-link class="bt-nav__link" to="/help">Помощь</router-link>
        <router-link class="bt-nav__link bt-nav__link--money" to="money">Вывод</router-link>
      </nav>
    </div>
    <BtMobileNav v-if="isShowMobileNav" />
  </section>
</template>
<script src="./bt-nav.js"></script>
