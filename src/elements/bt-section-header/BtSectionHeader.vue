<template>
  <div :class="'bt-section-header'">
    <p :class="'bt-section-header__up-text'">
      <slot name="up-text"></slot>
    </p>
    <p :class="'bt-section-header__bottom-text'">
      <slot name="bottom-text"></slot>
    </p>
  </div>
</template>
<script src="./bt-section-header.js"></script>
