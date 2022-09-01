<script setup>
import { ref, onMounted } from "vue";

const props = defineProps(["idVinyle"]);

const vinyle = ref({})
const artiste = ref([])
const genre = ref([])
const titre = ref([])

onMounted(async () => {
  await loadVinylById()
});

async function loadVinylById() {
  const result = await axios.get(`vinyles/${props.idVinyle}`)

  vinyle.value = result.data
  artiste.value = result.data.artiste
  genre.value = result.data.genre
  titre.value = result.data.titre

  // console.log("vinyle DETAIL", result);
  // console.log("Artistes du vinyle", result.data.artiste);
  // console.log("Genres du vinyle", result.data.genre);
  // console.log("Titres du vinyle", result.data.titre);
}

</script>
  
<template>
  <div class="flex justify-center pt-10">
    <div v-if="vinyle">
      <div class="max-w-sm w-full lg:max-w-full lg:flex">
        <div><img :src="vinyle.image" :alt="vinyle.titreVinyle"
            class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" />
        </div>
        <div
          class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div class="mb-8">
            <div class="text-gray-900 font-bold text-xl mb-2">{{  vinyle.titreVinyle  }}</div>
            <p class="text-gray-700 text-base">{{  vinyle.reference  }}</p>
            <p class="text-gray-700 text-base">{{  vinyle.format  }}</p>

            <div v-if="artiste">
              <div v-for="artistes in artiste" :key="artiste.idArtiste">
                <p> {{  artistes.pseudo  }}</p>
              </div>
            </div>

            <div v-if="genre">
              <div v-for="genres in genre" :key="genre.idGenre">
                <p> {{  genres.libelle  }}</p>
              </div>
            </div>

            <div v-if="titre">
              <div v-for="titres in titre" :key="titre.idTitre">
                <p class="text-gray-700 text-base"> {{  titres.nom  }}</p>
              </div>
            </div>

          </div>
          <div class="flex items-center">
            <!-- TODO -->
            <!-- Mettre le logo de l' artiste qui est sur le vinyle -->
            <img class="w-10 h-10 rounded-full mr-4" :src="vinyle.image" :alt="vinyle.titreVinyle" />
            <div class="text-sm">
              <p class="text-gray-900 leading-none">{{  artiste.pseudo  }}</p>
              <p class="text-gray-600">{{  vinyle.dateDeSortie  }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="loading">Loading Data...!</div>
  </div>
</template>

<style>
</style>
