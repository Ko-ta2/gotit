<template>
  <div class="nav">
    <aside>
      <section class="pb-4">
        <div class="flex flex-row-reverse sm:hidden" @click="hideNav">
          <mdi-light-plus class="transform rotate-45 text-3xl"></mdi-light-plus>
        </div>
        <h2>About</h2>
        <p>
          GOTITは、プログラミング学習動画へのリンクをまとめたサービスです。
        </p>
      </section>
      <section class="pb-4">
        <h2>Concept</h2>
        <p>来た、見た、分かった</p>
      </section>
    </aside>
    <nav v-if="false">
      <h2 class="pb-2">Category</h2>
      <ul class="flex flex-col space-y-2">
        <li class="px-2">#Link</li>
        <li class="px-2">#Link</li>
        <li class="px-2">#Link</li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: {
    switchNav(payload: boolean) {
      return payload === true;
    }
  },
  setup(props, { emit }) {
    const hideNav = () => {
      emit("switchNav", true)
    };

    return {
      hideNav
    };
  },
});
</script>