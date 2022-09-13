<template>
  <section class="bt-chats">
    <div class="bt-chats__head">
      <p class="bt-chats__header">Чат</p>
      <p class="bt-chats__online">Онлайн: <span>461</span></p>
    </div>
    <div class="bt-chats__msg-list">
      <div v-for="(msg, key) in message" :key="key" class="bt-chats__msg">
        <div
          class="bt-chats__msg-avatar"
          :class="
            msg.role == 1
              ? 'bt-chats__msg-avatar--admin'
              : msg.role == 3
              ? 'bt-chats__msg-avatar--moderator'
              : msg.role == 4
              ? 'bt-chats__msg-avatar--cur'
              : ''
          "
        >
          <img :src="msg.imgSrc" alt="" width="39" height="39" />
        </div>
        <div class="bt-chats__msg-content">
          <div
            class="bt-chats__msg-author"
            :class="
              msg.role == 1
                ? 'bt-chats__msg-author--admin'
                : msg.role == 3
                ? 'bt-chats__msg-author--moderator'
                : msg.role == 4
                ? 'bt-chats__msg-author--cur'
                : ''
            "
          >
            {{ msg.author }}
          </div>
          <div class="bt-chats__msg-text">{{ msg.msg }}</div>
        </div>
        <div class="bt-chats__msg-time">{{ msg.time }}</div>
      </div>
    </div>
    <div class="bt-chats__new-msg">
      <input type="text" class="bt-chats__input" placeholder="Введите сообщение" /><button
        class="bt-chats__send"
      >
        <img src="../../assets/img/chats/send.png" alt="" />
      </button>
    </div>
  </section>
</template>
<script src="./bt-chats.js"></script>
