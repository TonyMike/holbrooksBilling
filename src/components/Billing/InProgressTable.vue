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
        <p class="text-base   text-center flex flex-col px-4   col-span-2">
          <span
            class="text-sm border  text-center border-gray-600 text-gray-600 py-1 rounded-full px-6  "
            >Not Invoiced</span
          >

          <!-- <span>icon</span> -->
        </p>
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
        <p class="text-base   text-center flex flex-col px-4   col-span-2">
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
          class="text-base flex flex-col px-4  text-center relative col-span-2"
        >
          <span
            class="text-sm bg-[#247A51] text-center  rounded-full px-14 text-white py-1.5  "
            >Full</span
          >
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
          class="text-base   text-center relative flex flex-col px-4 col-span-2"
        >
          <span
            class="text-sm bg-[#D8364B] text-center  rounded-full px-10 text-white py-1.5  "
            >On Hold</span
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import ProgressBar from './ProgressBar.vue'
export default {
  data () {
    return {
      progress: 50 // Change this value to update the progress
    }
  },
  name: 'InProgressTable',
  components: {
    ProgressBar
  }
}
</script>
<style lang=""></style>
