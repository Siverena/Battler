<template>
  <div id="app">
    <BtHeader />
    <main class="grid">
      <BtLeftSidebar />
      <div class="page-content">
        <router-view />
      </div>
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
