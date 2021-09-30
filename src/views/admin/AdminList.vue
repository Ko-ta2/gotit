<template>
  <admin-layout>
    <div class="flex justify-between p-2">
      <h1>コンテンツ一覧</h1>
      <button @click="detailItem('')">新規登録</button>
    </div>
    <div>
      <table class="table-auto w-full">
        <thead>
          <tr>
            <th v-for="td in tHead" :key="td">{{ td }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="tr in tBody" :key="tr.id">
            <td>{{ tr.title }}</td>
            <td>{{ tr.description }}</td>
            <td>{{ tr.category }}</td>
            <td>{{ tr.url }}</td>
            <td>{{ tr.updatedAt }}</td>
            <td>
              <button @click="detailItem(tr.id)">編集</button>
              <button @click="deleteItem(tr.id)" class="bg-red-300 hover:bg-red-400">削除</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </admin-layout>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
import AdminLayout from "@/components/layout/admin/AdminLayout.vue";
// import { getContents, deleteContent } from "@/lib/firebase";
import { DocumentData } from "firebase/firestore";

export default defineComponent({
  components: {
    AdminLayout
  },
  setup() {
    const router = useRouter();

    let tHead = reactive(["タイトル", "説明", "カテゴリ", "URL", "更新日", ""]);
    let tBody: DocumentData[] = reactive([]);

    onMounted(async () => {
      // const refDocs = await getContents();
      const refDocs = []
      refDocs.push({
        id: "test",
        title: "タイトル001",
        description: "説明001",
        category: "カテゴリ001",
        url: "http://localhost:3000/",
        updatedAt: "2021/01/01"
      })
      tBody.splice(0, tBody.length, ...refDocs);
    });

    const detailItem = (id: string) => {
      router.push({ name: "AdminDetail", params: {id: id}});
    };

    const deleteItem = async (id: string) => {
      if (window.confirm("削除します。よろしいですか。")) {
        // await deleteContent(id)
        window.alert("削除しました。")
      // const refDocs = await getContents();
      // tBody.splice(0, tBody.length, ...refDocs);
      }
    };

    return {
      tHead,
      tBody,
      detailItem,
      deleteItem,
    };
  },
});
</script>
