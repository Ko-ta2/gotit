<template>
  <div class="container mx-auto">
    <base-header @switch-nav="switchNav"></base-header>
    <main class="flex">
      <base-nav :class="nav" @switch-nav="switchNav"></base-nav>
      <div class="flex-grow p-2 min-h-screen">
        <slot></slot>
      </div>
    </main>
    <base-footer></base-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive} from "vue";
import BaseHeader from "@/components/layout/BaseHeader.vue";
import BaseNav from "@/components/layout/BaseNav.vue";
import BaseFooter from "@/components/layout/BaseFooter.vue";

export default defineComponent({
  components: {
    BaseHeader,
    BaseNav,
    BaseFooter
  },
  setup() {
    const nav = reactive({
      hidden: true
    });

    const switchNav = (flg: boolean) => {
      nav.hidden = flg;
    };

    return {
      nav,
      switchNav
    };
  },
});
</script>
