<template>
  <div class="bt-auth">
    <BtAuthBefore v-if="getStatus.isAuth === false" />
    <BtAuthAfter v-if="getStatus.isAuth === true" :user="getStatus.user" />
  </div>
</template>
<script src="./bt-auth.js"></script>
