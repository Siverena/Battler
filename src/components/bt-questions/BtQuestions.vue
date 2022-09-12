<template>
  <section class="bt-questions">
    <div v-for="(question, key) in questions" :key="key" class="bt-question">
      <div class="bt-question__header">
        {{ question.text }}
      </div>
      <div class="bt-question__answer">
        {{ question.answer }}
      </div>
    </div>
  </section>
</template>
<script src="./bt-questions.js"></script>
