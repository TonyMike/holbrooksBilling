<template lang="">
  <div class="p-8 bg-[#E5E5E5] min-h-screen">
    <div class="flex items-center mb-10 space-x-2 text-sm">
      <font-awesome-icon icon="fa-solid fa-house" class="text-gray-500" />
      <font-awesome-icon
        icon="fa-solid fa-chevron-down"
        class="text-gray-500 -rotate-90"
      />
      <p class="underline text-gray-500">Billing</p>
    </div>
    <h1 class="font-semibold text-2xl">Billing</h1>
    <!-- <DropDown /> -->
    <div class="mt-8 space-y-6">
      <CompletedTable />
      <!-- <InProgressTable /> -->
    </div>
  </div>
</template>

<script>
import CompletedTable from './CompletedTable.vue'
// import InProgressTable from './InProgressTable.vue'
// import DropDown from '../Resuables/DropDown.vue'
export default {
  name: 'BillingPage',
  components: {
    CompletedTable
    // InProgressTable,
    // DropDown
  }
}
</script>
<style lang=""></style>
