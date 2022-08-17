<script setup>
import { ref, onMounted } from "vue";

const titre = ref("");
const reference = ref("");
const dateDeSortie = ref();
const image = ref("");
const format = ref("");

async function addVinyle() {
  const postData = {
    titre: titre.value,
    reference: reference.value,
    dateDeSortie: dateDeSortie.value,
    image: image.value,
    format: format.value,
  };

  await axios.post("vinyles", postData);
}
</script>

<template>
  <div class="ajout-vinyle">
    <h2>Ajout Vinyle</h2>
    <form>
      <label for="titre">Titre</label>
      <input type="text" id="titre" v-model="titre" />
      <label for="reference">Référence</label>
      <input type="text" id="reference" v-model="reference" />
      <label for="dateDeSortie">Date de sortie</label>
      <input type="date" id="dateDeSortie" v-model="dateDeSortie" />
      <label for="image">image</label>
      <input type="text" id="image" v-model="image" />
      <label for="format">Format</label>
      <input type="text" id="format" v-model="format" />
      <div><button type="button" @click="addVinyle">Enregistrer</button></div>
    </form>
  </div>
</template>

<style scoped></style>
