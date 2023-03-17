<template>
  <div class="w-[170px]  h-8">
    <span
      :class="[
        clicked === 'Not Invoiced'
          ? 'border border-gray-500 text-gray-600'
          : clicked === 'Partial'
          ? 'bg-[#2480ED] text-white'
          : clicked === 'Full'
          ? 'bg-green-700 text-white '
          : clicked === 'On Hold'
          ? 'bg-[#D8364B] text-white'
          : clicked === 'Send to Costing'
          ? 'bg-[#FFC517] text-black'
          : null
      ]"
      class="text-sm  text-center cursor-pointer h-full w-full z-0  flex justify-between items-center rounded-full px-6  "
      @click="show = !show"
      v-click-outside="handleClickOutside"
    >
      <span v-if="clicked">{{ clicked }}</span>
      <span v-else>Not Invoiced</span>
      <font-awesome-icon icon="fa-solid fa-chevron-down" />
    </span>

    <ul
      v-show="show"
      class="bg-white z-10 transition rounded-md top-0 relative shadow-md"
    >
      <li
        @click=";[handleClick('Not Invoiced'), (show = false)]"
        class="py-2 text-sm pl-2  w-full cursor-pointer hover:bg-slate-100 text-left"
      >
        Not Invoiced
      </li>
      <li
        @click=";[handleClick('Partial'), (show = false)]"
        class="py-2 text-sm  pl-2 w-full cursor-pointer hover:bg-slate-100 text-left"
      >
        Partial
      </li>
      <li
        @click=";[handleClick('Full'), (show = false)]"
        class="py-2 text-sm pl-2 w-full cursor-pointer hover:bg-slate-100 text-left"
      >
        Full
      </li>
      <li
        v-if="state"
        @click=";[handleClick('Send to Costing'), (show = false)]"
        class="py-2 text-sm pl-2 w-full cursor-pointer hover:bg-slate-100 text-left"
      >
        Send to Costing
      </li>
      <li
        v-else
        @click=";[handleClick('On Hold'), (show = false)]"
        class="py-2 text-sm pl-2 w-full cursor-pointer hover:bg-slate-100 text-left"
      >
        On Hold
      </li>
    </ul>
  </div>
</template>
<script>
import { directive as onClickOutside } from 'vue-click-outside'
export default {
  name: 'DropDown',
  data () {
    return {
      clicked: 'Not Invoiced',
      show: false,
      req: false
    }
  },
  directives: {
    onClickOutside
  },
  methods: {
    handleClick (status) {
      this.clicked = status
      // this.clicked = event.target.
      // console.log(this.clicked)
    },
    handleClickOutside () {
      this.show = false
    }
  },
  props: {
    state: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style></style>
