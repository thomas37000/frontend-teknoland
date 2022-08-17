<script setup>
import { ref, onMounted } from "vue";

const nom = ref("");

async function addArtiste() {
  const postData = {
    nom: nom.value,
  };

 // await axios.post("vinyles", postData);
}
</script>

<template>
  <div class="ajout-artiste">
    <h2>Ajout Artiste</h2>
    <form>
      <label for="nom">nom</label>
      <input type="text" id="nom" v-model="nom" />
      <div><button type="button" @click="addArtiste">Enregistrer</button></div>
    </form>
  </div>
</template>

<style scoped></style>