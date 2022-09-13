<template>
  <div class="bt-profile-info">
    <div class="bt-profile-info__image">
      <img :src="getStatus.user.avatar" alt="" width="160px" height="160px" />
    </div>
    <div class="bt-profile-info__content">
      <div class="bt-profile-info__name">
        <span>Имя</span>
        <p>{{ getStatus.user.name }}</p>
      </div>
      <div class="bt-profile-info__buttons">
        <div class="bt-profile-info__update">Обновить данные</div>
        <div class="bt-profile-info__change">Смена аватарки 100руб.</div>
      </div>
    </div>
  </div>
</template>
<script src="./bt-profile-info.js"></script>
