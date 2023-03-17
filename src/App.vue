<template>
  <div class="overflow-x-hidden  ">
    <BillingPage />
  </div>
</template>

<script>
import BillingPage from './components/Billing/BillingPage.vue'
export default {
  name: 'App',
  components: {
    BillingPage
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');

body {
  font-family: 'Rubik';
}
</style>
