<template>
  <div class="m-2 p-2 shadow hover:shadow-lg rounded cursor-pointer bg-gray-100 active:bg-gray-300 sm:w-72" @click="openTab()">
    <h3>{{ title }}</h3>
    <p class="text-sm">{{ description }}</p>
    <br>
    <chip :category="category"></chip>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";
import Chip from "@/components/Chip.vue";

export default defineComponent({
  components: {
    Chip,
  },
  props: {
    title: String,
    description: String,
    category: String,
    url: String
  },
  setup(props) {
    const { title, description, category, url } = toRefs(props)

    const openTab = () => {
      window.open(url?.value, "_blank")
    }

    return {
      title,
      description,
      category,
      openTab
    }
  },
});
</script>