<template lang="">
  <div>
    <h2 class="bg-white px-6 py-3 shadow-sm text-xl rounded-sm ">
      In Progress
    </h2>
    <!-- table header -->
    <div
      class="grid grid-cols-12 px-3 bg-[#F5F5F5] py-2.5 border-b-2 border-gray-300 "
    >
      <p class=""></p>
      <p class="text-sm font-semibold text-center col-span-2 ">Project ID</p>
      <p class="text-sm font-semibold text-left  col-span-3">Project</p>
      <p class="text-sm font-semibold text-center col-span-2 ">Service</p>
      <p class="text-sm font-semibold text-center col-span-2">Completed</p>
      <p class="text-sm font-semibold text-center col-span-2">Invoice Status</p>
    </div>

    <div class="bg-white shadow-sm rounded-sm pb-10 ">
      <!-- table row -->
      <div
        class="grid grid-cols-12 bg-white px-3 justify-center items-center py-2.5 border-b border-gray-300 "
      >
        <span class="text-center">
          <ProgressBar percent="75" />
        </span>

        <p class="text-sm   text-gray-800  text-center  col-span-2 ">9258</p>
        <p class="text-base  text-gray-800 text-left   col-span-3">
          Foster Hills HOA
        </p>
        <p class="text-base  text-gray-800 text-center   col-span-2 ">PMC</p>
        <p class="text-base  text-gray-800 text-center   col-span-2">
          5/19/2021
        </p>
        <div
          class="text-base text-[ #3C3C3C] text-center flex items-center space-x-2 px-4 relative col-span-2"
        >
          <DropDown :state="false" />
          <font-awesome-icon
            icon="fa-solid fa-chevron-down"
            class="absolute top-[8px] right-[5px]"
          />
        </div>
      </div>

      <div
        class="grid grid-cols-12 bg-white px-3 py-2.5 border-b border-gray-300 "
      >
        <span class="text-center">
          <ProgressBar percent="50" />
        </span>
        <p class="text-sm   text-gray-800  text-center  col-span-2 ">9258</p>
        <p class="text-base  text-gray-800 text-left   col-span-3">
          Foster Hills HOA
        </p>
        <p class="text-base  text-gray-800 text-center   col-span-2 ">PMC</p>
        <p class="text-base  text-gray-800 text-center   col-span-2">
          5/19/2021
        </p>
        <p
          class="text-base   text-center relative  flex flex-col px-3 col-span-2"
        >
          <span
            class="text-sm  border-gray-600 border text-gray-600 text-center w-[170px] flex items-center justify-between h-8  rounded-full px-5 py-1.5  "
          >
            <span>Not Invoiced</span>
            <font-awesome-icon icon="fa-solid fa-chevron-down" class="" />
          </span>
          <font-awesome-icon
            icon="fa-solid fa-chevron-down"
            class="absolute top-[8px] right-[5px]"
          />
        </p>
      </div>

      <!-- partial -->

      <div
        class="grid grid-cols-12 bg-white px-3 py-2.5 border-b border-gray-300  "
      >
        <span class="text-center">
          <ProgressBar percent="20" />
        </span>
        <p class="text-sm   text-gray-800  text-center  col-span-2 ">8499</p>
        <p class="text-base  text-gray-800 text-left   col-span-3">
          City of Tuscon
        </p>
        <p class="text-base  text-gray-800 text-center   col-span-2 ">HA5</p>
        <p class="text-base  text-gray-800 text-center   col-span-2">
          5/19/2021
        </p>
        <p class="text-base text-center relative flex px-4 flex-col col-span-2">
          <span
            class="text-sm bg-blue-600 text-center w-[170px] h-8 flex space-x-12 items-center   rounded-full px-12 text-white py-1.5  "
          >
            <span>Partial</span>
            <font-awesome-icon icon="fa-solid fa-chevron-down" class="" />
          </span>
          <font-awesome-icon
            @click="show = !show"
            icon="fa-solid fa-chevron-down"
            class="absolute top-[8px] right-[5px] cursor-pointer"
          />
          <font-awesome-icon
            v-show="show"
            icon="fa-solid fa-chevron-down"
            class="absolute z-20 top-[8px] right-[5px] cursor-pointer"
          />
          <span class="relative right-[400px] mt-4"><InvoiceModal /></span>
        </p>
      </div>

      <!-- partial -->

      <div
        class="grid grid-cols-12 bg-white px-3 py-2.5 border-b border-gray-300  "
      >
        <span class="text-center">
          <ProgressBar percent="62" />
        </span>
        <p class="text-sm   text-gray-800  text-center  col-span-2 ">8499</p>
        <p class="text-base  text-gray-800 text-left   col-span-3">
          City of Tuscon
        </p>
        <p class="text-base  text-gray-800 text-center   col-span-2 ">HA5</p>
        <p class="text-base  text-gray-800 text-center   col-span-2">
          5/19/2021
        </p>
        <p
          class="text-base   text-center relative  flex flex-col px-3 col-span-2"
        >
          <span
            class="text-sm bg-[#247A51] text-white text-center w-[170px] flex items-center justify-between h-8  rounded-full px-5 py-1.5  "
          >
            <span>Full</span>
            <font-awesome-icon icon="fa-solid fa-chevron-down" class="" />
          </span>
          <font-awesome-icon
            icon="fa-solid fa-chevron-down"
            class="absolute top-[8px] right-[5px]"
          />
        </p>
      </div>

      <!-- partial -->

      <div
        class="grid grid-cols-12 bg-white px-3 py-2.5 border-b border-gray-300  "
      >
        <span class="text-center">
          <ProgressBar percent="70" />
        </span>
        <p class="text-sm   text-gray-800  text-center  col-span-2 ">8499</p>
        <p class="text-base  text-gray-800 text-left   col-span-3">
          City of Tuscon
        </p>
        <p class="text-base  text-gray-800 text-center   col-span-2 ">HA5</p>
        <p class="text-base  text-gray-800 text-center   col-span-2">
          5/19/2021
        </p>
        <p
          class="text-base   text-center relative  flex flex-col px-3 col-span-2"
        >
          <span
            class="text-sm bg-[#D8364B] text-white text-center w-[170px] flex items-center justify-between h-8  rounded-full px-5 py-1.5  "
          >
            <span>On Hold</span>
            <font-awesome-icon icon="fa-solid fa-chevron-down" class="" />
          </span>
          <font-awesome-icon
            icon="fa-solid fa-chevron-down"
            class="absolute top-[8px] right-[5px]"
          />
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import DropDown from '../Resuables/DropDown.vue'
import InvoiceModal from './InvoiceModal.vue'
import ProgressBar from './ProgressBar.vue'
export default {
  data () {
    return {
      progress: 50 // Change this value to update the progress
    }
  },
  name: 'InProgressTable',
  components: {
    ProgressBar,
    DropDown,
    InvoiceModal
  }
}
</script>
<style lang=""></style>
