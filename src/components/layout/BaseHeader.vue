<template>
  <header class="flex items-center p-2">
    <div class="flex-none bg-green-300 p-2 rounded">
      <h1>GOTIT</h1>
    </div>
    <div class="flex-grow"></div>
    <div class="flex-none visible sm:invisible" @click="showNav">
      <mdi-light-menu class="text-2xl"></mdi-light-menu>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: {
    switchNav(payload: boolean) {
      return payload === false;
    },
  },
  setup(props, { emit }) {
    const showNav = () => {
      emit("switchNav", false);
    };

    return {
      showNav
    };
  },
});
</script>
