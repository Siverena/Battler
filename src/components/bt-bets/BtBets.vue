<template>
  <div class="bt-bets">
    <div class="bt-bets__team">
      <div class="bt-bets__team-btn-wrap">
        <div class="bt-bets__team-people">
          <img src="../../assets/img/last-games/people.png" alt="" /> 14
        </div>
        <div class="bt-bets__team-summ">
          <img src="../../assets/img/last-games/light-grey.png" alt="" />25489.00
        </div>
        <div class="bt-bets__team-btn bt-bets__team-btn--pink">Поставить</div>
      </div>
      <div v-for="(bet, key) in betsModePink" :key="key" class="bt-bet">
        <div class="bt-bet__user-avatar">
          <div class="bt-bet__img">
            <img :src="bet.imgSrc" alt="" width="43px" height="43px" />
          </div>
        </div>
        <div class="bt-bet__user-name">{{ bet.userName }}</div>
        <div class="bt-bet__bet">
          <img src="../../assets/img/last-games/light-grey.png" alt="" /> {{ bet.bet }}
        </div>
        <div class="bt-bet__win">
          <img src="../../assets/img/game/light-pink.png" alt="" /> {{ bet.win }}
        </div>
      </div>
    </div>
    <input type="text" class="bt-bets__summ" placeholder="Сумма" />
    <div class="bt-bets__team">
      <div class="bt-bets__team-btn-wrap">
        <div class="bt-bets__team-btn bt-bets__team-btn--blue">Поставить</div>
        <div class="bt-bets__team-people">
          <img src="../../assets/img/last-games/people.png" alt="" /> 14
        </div>
        <div class="bt-bets__team-summ">
          <img src="../../assets/img/last-games/light-grey.png" alt="" />25489.00
        </div>
      </div>
      <div v-for="(bet, key) in betsModeBlue" :key="key" class="bt-bet">
        <div class="bt-bet__user-avatar">
          <div class="bt-bet__img">
            <img :src="bet.imgSrc" alt="" width="43px" height="43px" />
          </div>
        </div>
        <div class="bt-bet__user-name">{{ bet.userName }}</div>
        <div class="bt-bet__bet">
          <img src="../../assets/img/last-games/light-grey.png" alt="" /> {{ bet.bet }}
        </div>
        <div class="bt-bet__win">
          <img src="../../assets/img/game/light-blue.png" alt="" /> {{ bet.win }}
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./bt-bets.js"></script>
