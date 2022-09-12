<template>
  <div class="bt-referal">
    <BtSectionHeader>
      <template v-slot:up-text> Реферальная система </template>
      <template v-slot:bottom-text> Приглашено: {{ getStatus.user.refs }} </template>
    </BtSectionHeader>
    <BtInvite />
  </div>
</template>

<script src="./referal-page.js"></script>
