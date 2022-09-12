<template>
  <div class="bt-auth-after">
    <div class="bt-auth-after__avatar">
      <img :src="user.avatar" alt="" width="43px" height="43px" />
    </div>
    <div class="bt-auth-after__info">
      <div class="bt-auth-after__name">{{ user.name }}</div>
      <div class="bt-auth-after__balance">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="9"
          height="18"
          viewBox="0 0 9 18"
        >
          <image
            id="Слой_8"
            data-name="Слой 8"
            width="9"
            height="18"
            xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAASCAYAAACJgPRIAAAA50lEQVQokX3RPysFUBjH8c+9IQMji8UrsEkio2S0GIjcumWxiHdgUQzKG2DwArwFm6QM4g1YLCgW8qejc/Tc071+y3l6+j6/55zfaXy19gVt4Agf+EY/Nvt0qo3h0HnEeTM0hjBdDe3iLUI7FXCD01TEda0KusMaRovTDEYqaBknmCrQAgYrqIGH9JgCtXXXEp6bec0nrnAb0ANcpiJBLxjDZAaT7rFX6AS9h+n1fK7k4T+oaDsX6Z+u4w0jtJWz6fjMpBLmLMYxh6caKk6rOMRFtyCK0wTme2T167SIY7z+Bw3grBcAP1FOJVRNeLKDAAAAAElFTkSuQmCC"
          />
        </svg>
        {{ user.balance }}
      </div>
    </div>
    <div class="bt-auth-after__btn bt-auth-after__btn--up-balance">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        <image
          id="Plus"
          width="16"
          height="16"
          xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0ElEQVQ4jaWTOw7CMAyGv1YVXRhYu7AhDgOX6AUQF+jETi/DETgEA1OFxMqKBBi5cpBAIebxL42a/+E4cSYiGCbADBiRxgnYAPuepQYishSRq3wO5S5UqxVo8g7IneRX3IBpbmV/K8Y089w5cwccEvuVl7wC1on90jO4aJ9ThCLyr7NkFW+BAVAbtwHGnoFiaF8Vl9anLNbsmIEmtLauTdxGeD28HhSWnCSk0DghZzXQt/0OTw2L4Pj3Uw7DpIPx8zAFxzDOlV1d9Mxa9mOcgTuG+J+srL72DQAAAABJRU5ErkJggg=="
        />
      </svg>
    </div>
    <div class="bt-auth-after__btn bt-auth-after__btn--exit" @click="logout">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="14"
        height="18"
        viewBox="0 0 14 18"
      >
        <image
          id="icons8-выход-64"
          width="14"
          height="18"
          xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAASCAYAAABrXO8xAAABLklEQVQ4jZ2Tv0pDUQzGf63XWrWjDtahs1B8iG4OOgo6+QT2gRx06uDk4C7oIji4WF1EHNxEwepwQdtPUnPhcOo9/gkEbk7yJV9yk4okgG1gHZgFRkxKFXgF9oDTsVdSV3+TzriYpJcINorsYWSfGDAD6k7sBlgzEhFRs5vAuduLBdWBZ7qwTAldlXQg6VbSVBZkziiXBvAE7ABtYLqaCA6lAzwAPeAKyFNVWsC793jnM9hyZpthj5feX01SP5pkLuk5sI/LqMaTnfR/U7HQlqSmpCVJbUnXHndYLEAZMNQNj+kVb78FNiQt+7dVr4c9fiR6egMWgH3gyKZto51x57z/gp9Wrg8MDZgDNWAFuPfASgC0MwuZPX6lk3b/c1bFIdtG2CHPJQ554Id8BvAJN4+7zCdcp4kAAAAASUVORK5CYII="
        />
      </svg>
    </div>
  </div>
</template>
<script src="./bt-auth-after.js"></script>
