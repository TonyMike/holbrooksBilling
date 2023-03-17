<template lang="">
  <div class=" w-[520px]  text-[#434343]">
    <div class="grid bg-[#EDEDED] py-1.5 grid-cols-12  text-sm text-center">
      <p class="col-span-2">Invoice #</p>
      <p class="col-span-4">Percentage Completed</p>
      <p class="col-span-3">Invoice Date</p>
      <p class="col-span-3">Amount Invoiced</p>
    </div>
    <div class="grid border border-[#ededed] grid-cols-12 text-sm text-center">
      <p class="col-span-2 py-2 border border-[#ededed] bg-white">2304976</p>
      <p class="col-span-4 py-2 border border-[#ededed] bg-white">
        80%
      </p>
      <p class="col-span-3 py-2 border border-[#ededed] bg-white">
        5/19/2021
      </p>
      <p class="col-span-3 py-2 border border-[#ededed] bg-white">
        $1,659
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'InvoiceModal'
}
</script>
<style lang=""></style>
