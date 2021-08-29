<template>
  <span class="text-xs p-1 bg-green-200 rounded">#{{ category }}</span>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";

export default defineComponent({
  props: {
    category: {
      type: String
    }
  },
  setup(props) {
    const { category } = toRefs(props)
    return {
      category
    }
  },
});
</script>
