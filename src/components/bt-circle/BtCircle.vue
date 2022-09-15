<template>
  <div class="bt-circle">
    <div class="bt-circle__percent-pink">{{ pink }}%</div>
    <div class="bt-circle__image">
      <svg
        class="bt-circle__progress-bar"
        xmlns="http://www.w3.org/2000/svg"
        :height="getHeight"
        :width="circleCenter * 2"
        :viewBox="(0, 0, circleCenter * 2, getHeight)"
      >
        <g fill="none" stroke="#2A2D2F">
          <circle
            :cx="circleCenter"
            :cy="circleCenter"
            :r="getRadius"
            stroke="#fe6289"
            :stroke-width="strokeWidth"
            :stroke-dasharray="strokePink + ',' + strokeBlue + ',0,' + strokeNone"
            :stroke-dashoffset="offsetPink"
          />
          <circle
            :cx="circleCenter"
            :cy="circleCenter"
            :r="getRadius"
            stroke="#08b0fb"
            :stroke-width="strokeWidth"
            :stroke-dasharray="strokeBlue + ',' + strokeNone + ',0,' + strokePink"
            :stroke-dashoffset="offsetBlue"
          />
          <circle :cx="pointerX" :cy="pointerY" r="12.5" stroke="#08b0fb" fill="#08b0fb" />
        </g>
      </svg>
      <div class="bt-circle__content">
        <img src="../../assets/img/game/logo.png" alt="" />
        <p class="bt-circle__timer">00:30</p>
      </div>
    </div>
    <div class="bt-circle__percent-blue">{{ 100 - pink }}%</div>
  </div>
</template>
<script src="./bt-circle.js"></script>
