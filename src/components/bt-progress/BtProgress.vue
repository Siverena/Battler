<template>
  <section class="bt-progress-wrapper">
    <div
      v-for="(elem, i) in progres"
      :key="i"
      class="bt-progress"
      :class="
        (getStatus.user.refs >= elem.people && getStatus.user.refs < progres[i + 1]?.people) ||
        (i === progres.length - 1 && getStatus.user.refs >= progres[progres.length - 1].people)
          ? 'bt-progress--current'
          : getStatus.user.refs > elem.people
          ? 'bt-progress--complete'
          : 'bt-progress--locked'
      "
    >
      <div class="bt-progress__header">{{ elem.percent }}%</div>
      <div class="bt-progress__content">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="22"
          height="32"
          viewBox="0 0 22 32"
        >
          <image
            id="padlock_114311"
            width="22"
            height="32"
            xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAgCAYAAAAWl4iLAAABPklEQVRIie2VMWrDQBBF35oUwUVIp5OocwrVIWl9N4FBhU+QK6RymwvoAEnhzsYIHFZ8mU2Qdmcju8uHgWX58zQ70o5IqARqoAVOilZ7ZSp5TA/AFjgnYiuvGboTsAMaoAIKRaW9Tp6dFT5U+gmsIr6VPEPlUZVBpTFoCB8qj/a8lqmxHE1qlFPHTK1MVQa4Uk4bM51kKjLAhXJ8rhszuODTeswAj+YtAsM5AxZqNG8xaZ+pf/APLYENcDAMnVQcxPLMfjEX+Ds2Tk+5B16B95mnfwLegCN/vBRTulyWa7+8y2XJAX8oRufB1FNSrciZI1mtyJ4jVvA6WD9b4ZYj7gPfPtFncyuc/muDurg9r2Lfii/FOuILeea37YyfWs+7MxjDBLNuOuiPWvsBYr5VE3rRfs+8ydj04OsPelh+A0oBrr0+861ZAAAAAElFTkSuQmCC"
          />
        </svg>
        <div class="bt-progress__text">
          <div class="bt-progress__count">{{ elem.people }}</div>
          <p>человек</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script src="./bt-progress.js"></script>
