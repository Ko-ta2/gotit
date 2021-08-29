<template>
  <base-layout>
    <div class="flex flex-col sm:flex-row sm:flex-wrap">
      <card v-for="content in contents" :key="content.id"
       :title="content.title" 
       :description="content.description" 
       :category="content.category" 
       :url="content.url"></card>
    </div>
  </base-layout>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from "vue";
import BaseLayout from "@/components/layout/BaseLayout.vue";
import Card from "@/components/Card.vue";
// import { getContents } from "@/lib/firebase";
import { DocumentData } from "firebase/firestore";

export default defineComponent({
  components: {
    BaseLayout,
    Card
  },
  setup() {
    const contents: DocumentData[] = reactive([]);

    onMounted(async () => {
      // const refDocs = await getContents();
      const refDocs = []
      refDocs.push({
        title: "タイトル",
        description: "コンテンツ説明",
        category: "カテゴリ",
        url: "http://localhost:3000/"
      })
      contents.splice(0, contents.length, ...refDocs)
    });

    return {
      contents
    };
  },
});
</script>
