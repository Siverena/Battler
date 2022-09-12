<template>
  <section class="bt-invite">
    <p class="bt-invite__header">
      Привлекай друзей и зарабатывай до <span>5%</span> от их пополнений!
    </p>
    <p class="bt-invite__info">
      Деньги заработанные по партнерской программе сразу доступны для вывода.
    </p>
    <p class="bt-invite__ref-link">{{ getStatus.user.link }}</p>
    <div class="bt-invite__progress">
      <div v-for="(elem, key) in progres" :key="key" class="progress">
        <div class="progress__header">{{ elem.percent }}%</div>
        <div class="progress__content">
          <div class="progress__count">{{ elem.people }}</div>
          <p>человек</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script src="./bt-invite.js"></script>
