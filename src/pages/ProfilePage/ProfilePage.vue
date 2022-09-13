<template>
  <div class="profile">
    <BtSectionHeader>
      <template v-slot:up-text> Профиль </template>
      <template v-slot:bottom-text> Личная информация </template>
    </BtSectionHeader>
    <BtProfileInfo />
    <BtMyStat />
    <BtHistoryMyGame />
  </div>
</template>
<script src="./profile-page.js"></script>
