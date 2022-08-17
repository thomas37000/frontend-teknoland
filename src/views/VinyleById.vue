<template>
  <div v-if="vinyle">
    <h2>vinyle détail</h2>
    <div><img :src="vinyle.image" :alt="vinyle.titre" /></div>
    <h2>{{ vinyle.titre }}</h2>
    <h3>référence: {{ vinyle.reference }}</h3>
    <h4>sortie le: {{ vinyle.dateDeSortie }}</h4>
    <h4>format: {{ vinyle.format }}</h4>
  </div>
  <div v-else class="loading">Loading Data...!</div>
</template>

<script>
import axios from "axios";

export default {
  name: "vinyleById",
  props: ["idVinyle", "titre", "dateDeSortie"],
  data() {
    return {
      vinyle: null,
      loading: true,
      errored: false,
    };
  },
  mounted() {
    axios
      .get(`http://localhost:8080/api/vinyles/${this.idVinyle}`)
      .then((res) => {
        this.vinyle = res.data;
        console.log("vinyle DETAIL", this.vinyle);
      })
      .catch((error) => {
        console.log(error.message);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>

<style></style>
