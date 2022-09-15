<template>
  <div class="bt-games">
    <div class="bt-games__header">
      <BtSectionHeader>
        <template v-slot:up-text> BATTLE #6452352637 </template>
        <template v-slot:bottom-text> Количество участников: 26 </template>
      </BtSectionHeader>
      <div class="bt-games__info">
        <span class="bt-games__hash"> hash: 7674dgs6sd76tds6dfbd7s6saa</span>
        <span class="bt-games__bank">Общий банк: 235004.00</span>
      </div>
    </div>

    <BtCircle />

    <BtBets />
  </div>
</template>
<script src="./main-page.js"></script>

<!-- https://codepen.io/davatron5000/pen/jzMmME -->
<!-- https://codepen.io/shankarcabus/pen/kOEYBO -->
<!-- http://documentation.zemez.io/html/bootstrap/v1-4/index.php?lang=ru&section=extensions#progress-bar-circle -->
