<template>
  <div class="money">
    <div class="money__header">
      <BtSectionHeader>
        <template v-slot:up-text> Пополнение и вывод </template>
        <template v-slot:bottom-text> Пополняй баланс любым удобным способом. </template>
      </BtSectionHeader>
      <div class="money__my-balance">
        <span> Мой Баланс:</span>
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
        {{ getStatus.user.balance }}
      </div>
    </div>

    <BtOperations />
    <BtHistory />
  </div>
</template>
<script src="./money-page.js"></script>
