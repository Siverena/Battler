<template>
  <div class="bt-operations">
    <div class="bt-operation withdrawal">
      <p class="bt-operation__header">Пополнить баланс</p>
      <form class="form">
        <div class="select" :class="active === 'form-withdrawal' ? 'active' : ''">
          <div class="select__title">
            {{ selectedUp !== false ? paySystems[selectedUp] : 'Выберите платежную систему' }}
            <div
              class="select__open select__open--pink"
              key="form-withdrawal"
              @click="toggleMenu('form-withdrawal')"
            ></div>
          </div>
          <div class="select__content">
            <div v-for="(system, key) in paySystems" :key="key" class="input-group">
              <input
                :id="'option' + key"
                class="select__input"
                type="radio"
                name="singleSelect"
                checked
              />
              <label
                :for="'option' + key"
                class="select__label select__label--pink"
                @click="selectOptionUp(key)"
                >{{ system }}</label
              >
            </div>
          </div>
        </div>
        <div class="form__requisites">Реквизиты</div>
        <input class="form__summ" placeholder="Введите сумму" />
        <button class="form__btn form__btn--pink">Пополнить</button>
      </form>
    </div>
    <div class="bt-operation replenishment">
      <p class="bt-operation__header">Вывод средств</p>
      <form class="form">
        <div class="select" :class="active === 'form-replenishmentl' ? 'active' : ''">
          <div class="select__title">
            {{ selectedGet !== false ? paySystems[selectedGet] : 'Выберите платежную систему' }}
            <div
              class="select__open select__open--blue"
              key="form-replenishmentl"
              @click="toggleMenu('form-replenishmentl')"
            ></div>
          </div>
          <div class="select__content">
            <div v-for="(system, key) in paySystems" :key="key" class="input-group">
              <input
                :id="'option' + key"
                class="select__input"
                type="radio"
                name="singleSelect"
                checked
              />
              <label
                :for="'option' + key"
                class="select__label select__label--blue"
                @click="selectOptionGet(key)"
                >{{ system }}</label
              >
            </div>
          </div>
        </div>
        <div class="form__requisites">Реквизиты</div>
        <input class="form__summ" placeholder="Введите сумму" />
        <button class="form__btn form__btn--blue">Вывести</button>
      </form>
    </div>
  </div>
</template>
<script src="./bt-operations.js"></script>
