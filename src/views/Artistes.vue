<script setup>
import { ref, onMounted } from "vue";
import CardArtistes from "../components/Card/CardArtistes.vue";

const listeArtistes = ref([]);

onMounted(() => {
  loadArtistes();
});

async function loadArtistes() {
  const result = await axios.get("artistes");
  listeArtistes.value = result.data;
  console.log("listeArtistes", listeArtistes);
}
</script>

<template>
  <div class="">
    <h2>Les Artistes du label</h2>
    <CardArtistes :listeArtistes="listeArtistes" />
  </div>
</template>

<style scoped></style>
