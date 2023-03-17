<template lang="">
  <div>
    <v-progress-circular :size="33" :model-value="percent"
      ><span class="text-[9px]">{{ percent }}%</span></v-progress-circular
    >
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    percent: String
  }
}
</script>

<style scoped>
.skill {
  height: 35px;
  width: 35px;
  position: relative;
}
.outer {
  height: 35px;
  width: 35px;
  border-radius: 50%;
  border: 1px solid red;
}
</style>
