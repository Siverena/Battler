<template>
  <div class="bt-mobile-menu">
    <div class="bt-mobile-menu__button bt-mobile-menu__button--history" @click="openHistory">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        enable-background="new 0 0 32 32"
        id="Glyph"
        version="1.1"
        viewBox="0 0 32 32"
        xml:space="preserve"
      >
        <path
          d="M30.854,16.548C30.523,17.43,29.703,18,28.764,18H28v11c0,0.552-0.448,1-1,1h-6v-7c0-2.757-2.243-5-5-5  s-5,2.243-5,5v7H5c-0.552,0-1-0.448-1-1V18H3.235c-0.939,0-1.759-0.569-2.09-1.451c-0.331-0.882-0.088-1.852,0.62-2.47L13.444,3.019  c1.434-1.357,3.679-1.357,5.112,0l11.707,11.086C30.941,14.696,31.185,15.666,30.854,16.548z"
          id="XMLID_219_"
        />
      </svg>
    </div>
    <div class="bt-mobile-menu__text">
      <p class="bt-mobile-menu__text-name">Battler</p>
      <p class="bt-mobile-menu__text-copyright">Все права защищены 2022</p>
    </div>
    <div class="bt-mobile-menu__button bt-mobile-menu__button--chat" @click="openChat">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        version="1.1"
      >
        <title>Iconly/Bold/Send</title>
        <g id="Iconly/Bold/Send" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Send" transform="translate(2.000000, 2.000000)" fill="#000000" fill-rule="nonzero">
            <path
              d="M19.4353768,0.581982692 C18.935172,0.0685980979 18.1948689,-0.122662829 17.5045863,0.0786644625 L1.40799658,4.759524 C0.679698425,4.96185793 0.163487095,5.54268717 0.0244301664,6.28055169 C-0.11762799,7.03150249 0.378575149,7.98478722 1.02684054,8.38341526 L6.05990101,11.4768091 C6.57611234,11.7938996 7.2423851,11.7143753 7.66955998,11.2835349 L13.4329194,5.48430225 C13.7230382,5.18231131 14.2032348,5.18231131 14.4933536,5.48430225 C14.7834723,5.77622682 14.7834723,6.24934596 14.4933536,6.5513369 L8.71999001,12.3515762 C8.29181472,12.7814099 8.21178196,13.4508232 8.52691097,13.9702476 L11.6021699,19.0537617 C11.9623174,19.6577436 12.5825713,20 13.2628498,20 C13.3428826,20 13.4329194,20 13.5129522,19.9899336 C14.2932716,19.88927 14.9135256,19.3557527 15.1436198,18.6007753 L19.9155733,2.52479106 C20.1256593,1.84027827 19.9355815,1.09536729 19.4353768,0.581982692"
            />
          </g>
        </g>
      </svg>
    </div>
    <BtChats v-if="isChatOpen" :closeChat="closeChat" />
    <BtLastGames v-if="isHistoryOpen" :closeHistory="closeHistory" />
  </div>
</template>
<script src="./bt-mobile-menu.js"></script>
