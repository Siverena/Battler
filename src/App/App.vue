<template>
  <div id="app">
    <BtHeader />
    <BtLeftSidebar />
    <main class="grid">
      <div class="col"></div>
      <div class="page-content">
        <router-view />
      </div>
      <div class="col"></div>
    </main>
    <BtRightSidebar />
    <BtMobileMenu />
  </div>
</template>
<script src="./app.js"></script>
<style lang="scss">
@import '../assets/scss/variables.scss';
@import '../assets/scss/main.scss';
</style>
