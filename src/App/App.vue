<template>
  <div id="app">
    <BtHeader />
    <main class="grid">
      <BtLastGames />
      <div class="page-content">
        <router-view />
      </div>
      <!-- <nav>
        <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link>|
        <router-link to="/help">Help</router-link>
      </nav> -->

      <BtChats />
    </main>
  </div>
</template>
<script src="./app.js"></script>
<style lang="scss">
@import '../assets/scss/variables.scss';
@import '../assets/scss/main.scss';
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
