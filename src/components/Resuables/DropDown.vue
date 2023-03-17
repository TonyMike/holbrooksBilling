<template>
  <div>
    <span
      :class="[
        clicked === 'Not Invoiced'
          ? 'border border-gray-500 text-gray-600'
          : clicked === 'Partial'
          ? 'bg-blue-500 text-white'
          : clicked === 'Full'
          ? 'bg-green-700 text-white'
          : 'bg-yellow-500 text-black'
      ]"
      class="text-sm  text-center cursor-pointer   py-1 flex space-x-3 items-center rounded-full px-6  "
      @click="show = !show"
    >
      <span v-if="clicked">{{ clicked }}</span>
      <span v-else>Not Invoiced</span>
      <font-awesome-icon icon="fa-solid fa-chevron-down" />
    </span>

    <ul v-show="show" class="bg-white transition rounded-md top-8 shadow-md">
      <li
        @click="handleClick('Not Invoiced')"
        class="py-2 text-sm pl-4 w-[165px] cursor-pointer hover:bg-slate-100 text-left"
      >
        Not Invoiced
      </li>
      <li
        @click="handleClick('Partial')"
        class="py-2 text-sm pl-4 w-[165px] cursor-pointer hover:bg-slate-100 text-left"
      >
        Partial
      </li>
      <li
        @click="handleClick('Full')"
        class="py-2 text-sm pl-4 w-[165px] cursor-pointer hover:bg-slate-100 text-left"
      >
        Full
      </li>
      <li
        @click="handleClick('Send to Costing')"
        class="py-2 text-sm pl-4 w-[165px] cursor-pointer hover:bg-slate-100 text-left"
      >
        Send to Costing
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'DropDown',
  data () {
    return {
      clicked: 'Not Invoiced',
      show: false
    }
  },
  methods: {
    handleClick (status) {
      this.clicked = status
      // this.clicked = event.target.
      // console.log(this.clicked)
    }
  }
}
</script>
<style></style>
