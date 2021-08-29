<template>
  <admin-layout class="w-1/2">
    <div class="p-2">
      <h1>コンテンツ詳細</h1>
      <div class="my-3">
        <label for="title">タイトル</label>
        <input
          type="text"
          name="title"
          id="title"
          v-model="content.title"
          class="w-full"
        />
      </div>
      <div class="my-3">
        <label for="description">説明</label>
        <textarea
          name="description"
          id="description"
          v-model="content.description"
          class="w-full"
          rows="2"
        />
      </div>
      <div class="my-3">
        <label for="category">カテゴリ</label>
        <input
          type="text"
          name="category"
          id="category"
          v-model="content.category"
          class="w-full"
        />
      </div>
      <div class="my-3">
        <label for="url">URL</label>
        <input
          type="text"
          name="url"
          id="url"
          v-model="content.url"
          class="w-full"
        />
      </div>
    </div>
    <button @click="putItem">追加</button>
    <button @click="cancel" class="bg-white hover:bg-gray-50">キャンセル</button>
  </admin-layout>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import AdminLayout from "@/components/layout/admin/AdminLayout.vue";
import { Content } from "@/types";
import { addContent, getLoginUser, getContent } from "@/lib/firebase"
import { User } from "firebase/auth";
import { DocumentData } from "firebase/firestore";

export default defineComponent({
  components: {
    AdminLayout
  },
  props: {
    id: {
      type: String,
      default: () => "",
    }
  },
  setup(props) {
    const { id } = toRefs(props);

    const router = useRouter();
    let content: Partial<Content> = reactive({
      title: "",
      description: "",
      category: "",
      url: "",
    });

    onMounted(async () => {
      if(id.value) {
      //   const doc: DocumentData | undefined = await getContent(id.value);
      //   content.id = doc?.id;
      //   content.title = doc?.title;
      //   content.description = doc?.description;
      //   content.category = doc?.category;
      //   content.url = doc?.url;
      content.id = "test";
      content.title = "タイトル001";
      content.description = "説明001";
      content.category = "カテゴリ001";
      content.url = "http://localhost:3000/";
      }
    });

    const putItem = async () => {
      // await addContent(content);
      router.push({ name: "AdminList" });
    };

    const cancel = () => {
      router.push({ name: "AdminList" });
    };

    return {
      content,
      putItem,
      cancel,
    };
  },
});
</script>
