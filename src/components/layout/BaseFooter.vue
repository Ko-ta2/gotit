<template>
  <footer class="flex p-2 text-sm">
    <p>Copyright © {{ year }} GOTIT All Rights Reserved.</p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    let date = new Date();
    const year = date.getFullYear();

    return {
      year
    };
  },
});
</script>
