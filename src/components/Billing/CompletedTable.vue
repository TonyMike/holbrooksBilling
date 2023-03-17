<template lang="">
  <div>
    <h2 class="bg-white px-6 py-3 shadow-sm text-xl rounded-sm ">Completed</h2>
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

    <div class="bg-white pb-10 shadow-sm rounded-sm ">
      <!-- table row -->
      <div
        class="grid grid-cols-12 bg-white px-3 py-2.5 border-b border-gray-300 "
      >
        <span class="text-center">
          <ProgressBar percent="30" />
        </span>
        <p class="text-sm   text-gray-800  text-center  col-span-2 ">9258</p>
        <p class="text-base  text-gray-800 text-left   col-span-3">
          Foster Hills HOA
        </p>
        <p class="text-base  text-gray-800 text-center   col-span-2 ">PMC</p>
        <p class="text-base  text-gray-800 text-center   col-span-2">
          5/19/2021
        </p>
        <p class="text-base   text-center  px-4 col-span-2">
          <span
            class="text-sm border  text-center border-gray-600 flex flex-col text-gray-600 py-1 rounded-full px-6  "
            >Not Invoiced
            <Icon icon="material-symbols:keyboard-arrow-down" />
          </span>

          <!-- <span>icon</span> -->
        </p>
      </div>

      <div
        class="grid grid-cols-12 bg-white px-3 py-2.5 border-b border-gray-300 "
      >
        <span class="text-center">
          <ProgressBar percent="46" />
        </span>
        <p class="text-sm   text-gray-800  text-center  col-span-2 ">9258</p>
        <p class="text-base  text-gray-800 text-left   col-span-3">
          Foster Hills HOA
        </p>
        <p class="text-base  text-gray-800 text-center   col-span-2 ">PMC</p>
        <p class="text-base  text-gray-800 text-center   col-span-2">
          5/19/2021
        </p>
        <p class="text-base   text-center  flex flex-col px-4 col-span-2">
          <span
            class="text-sm border  text-center border-gray-600 text-gray-600 py-1 rounded-full px-6  "
            >Not Invoiced</span
          >
          <!-- <span>icon</span> -->
        </p>
      </div>

      <!-- partial -->

      <div
        class="grid grid-cols-12 bg-white px-3 py-2.5 border-b border-gray-300  "
      >
        <span class="text-center">
          <ProgressBar percent="83" />
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
            class="text-sm bg-blue-600 text-center   rounded-full px-12 text-white py-1.5  "
            >Partial</span
          >
          <span class="relative right-[400px] mt-4"><InvoiceModal /></span>
        </p>
      </div>

      <!-- send to costing -->
      <div
        class="grid grid-cols-12 bg-white px-3 py-2.5 border-b border-gray-300  "
      >
        <span class="text-center">
          <ProgressBar percent="63" />
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
            class="text-sm bg-[#FFC517] text-black text-center  rounded-full px-5 py-1.5  "
            >Send to Costing</span
          >
        </p>
      </div>

      <!-- partial -->

      <div
        class="grid grid-cols-12 bg-white px-3 py-2.5 border-b border-gray-300  "
      >
        <span class="text-center">
          <ProgressBar percent="16" />
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
          class="text-base   text-center relative flex flex-col px-4 col-span-2"
        >
          <span
            class="text-sm bg-blue-600 text-center  rounded-full px-12 text-white py-1.5  "
            >Partial</span
          >
        </p>
      </div>

      <!-- partial -->

      <div
        class="grid grid-cols-12 bg-white px-3 py-2.5 border-b border-gray-300  "
      >
        <span class="text-center">
          <ProgressBar percent="72" />
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
          class="text-base   text-center relative flex flex-col px-4 col-span-2"
        >
          <span
            class="text-sm bg-[#247A51] text-center  rounded-full px-14 text-white py-1.5  "
            >Full</span
          >
        </p>
      </div>

      <div
        class="grid grid-cols-12 bg-white border-b border-gray-300 px-3 py-2.5 "
      >
        <span class="text-center">
          <ProgressBar percent="53" />
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
          class="text-base text-[ #3C3C3C]  text-center flex flex-col px-4 relative col-span-2"
        >
          <DropDown />
          <!-- <span
            class="text-sm border  text-center border-gray-600 text-gray-600 py-1 flex justify-around items-center rounded-full px-6  "
          >
            <span>Not Invoiced</span>
            <font-awesome-icon icon="fa-solid fa-chevron-down" />
          </span>
          <ul class="bg-white absolute rounded-md top-8 shadow-md">
            <li
              class="py-2 text-sm pl-4 w-[165px] cursor-pointer hover:bg-slate-100 text-left"
            >
              Not Invoiced
            </li>
            <li
              class="py-2 text-sm pl-4 w-[165px] cursor-pointer hover:bg-slate-100 text-left"
            >
              Partial
            </li>
            <li
              class="py-2 text-sm pl-4 w-[165px] cursor-pointer hover:bg-slate-100 text-left"
            >
              Full
            </li>
            <li
              class="py-2 text-sm pl-4 w-[165px] cursor-pointer hover:bg-slate-100 text-left"
            >
              Send to Costing
            </li>
          </ul> -->

          <!-- <span>icon</span> -->
        </div>
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
      show: false
    }
  },
  name: 'CompletedTable',
  components: {
    InvoiceModal,
    ProgressBar,
    DropDown
  }
}
</script>
<style lang=""></style>
