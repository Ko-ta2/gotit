<template>
  <header class="flex items-center p-2">
    <div class="flex-none bg-green-300 p-2 rounded">
      <h1>GOTIT</h1>
    </div>
    <div class="flex-grow"></div>
    <div class="flex-none">
      <button @click="logOut">ログアウト</button>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
// import { logOutDefault } from "@/lib/firebase"

export default defineComponent({
  setup(props) {
    const router = useRouter();

    const logOut = async () => {
      // await logOutDefault();
      router.push({name: "Login"});
    }

    return {
      logOut
    }
  },
});
</script>
