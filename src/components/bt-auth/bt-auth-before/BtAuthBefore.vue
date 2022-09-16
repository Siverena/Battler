<template>
  <div class="bt-auth-before">
    <a class="bt-auth-before__text">Войти через:</a>
    <div class="bt-auth-before__buttons">
      <a @click="login" class="bt-auth-before__button bt-auth-before__button--vk">
        <img src="@/assets/img/auth/vk.png" alt="" width="25" />
      </a>
      <a @click="login" class="bt-auth-before__button bt-auth-before__button--tel">
        <img src="@/assets/img/chats/send.png" alt=""
      /></a>
    </div>
  </div>
</template>
<script src="./bt-auth-before.js"></script>
