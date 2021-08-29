<template>
  <div class="container mx-auto">
    <admin-header></admin-header>
    <main class="flex">
      <div class="flex-grow p-2 min-h-screen">
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive} from "vue";
import AdminHeader from "@/components/layout/admin/AdminHeader.vue";

export default defineComponent({
  components: {
    AdminHeader
  },
  setup() {
  },
});
</script>
