<template>
  <div class="w-full h-screen flex flex-col items-center justify-center">
    <div
      class="flex items-center bg-red-50 rounded shadow px-2 m-1 w-70"
      v-if="feedback.message"
    >
      <mdi-light-alert class="inline-block"></mdi-light-alert>
      {{ feedback.message }}
      <button class="bg-transparent hover:bg-transparent" @click="feedback.message = '' ">
        <mdi-light-plus class="transform rotate-45"></mdi-light-plus>
      </button>
    </div>
    <div class="p-20 bg-gray-100 rounded w-70">
      <h1 class="text-center">GOTIT</h1>
      <div class="my-3">
        <label for="email">メールアドレス</label>
        <input type="text" name="email" id="email" v-model="auth.email" @keyup.enter="logIn"/>
      </div>
      <div class="mb-3">
        <label for="password">パスワード</label>
        <input
          type="password"
          name="password"
          id="password"
          v-model="auth.password"
          @keyup.enter="logIn"
        />
      </div>
      <button @click="logIn">ログイン</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";
import { logInWithEmailAndPassword } from "@/lib/firebase";

export default defineComponent({
  components: {},
  setup() {
    const router = useRouter();

    const feedback = reactive({
      message: "",
    });
    const auth = reactive({
      email: "",
      password: "",
    });

    const logIn = async () => {
      // const result = await logInWithEmailAndPassword(auth.email, auth.password);
      // if (result.name === "FirebaseError") {
      //   feedback.message = result.message;
      //   return;
      // }
      router.push({name: "AdminList"});
    };

    return {
      feedback,
      auth,
      logIn,
    };
  },
});
</script>
