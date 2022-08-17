<script>
import CardArtistes from "../components/Card/CardArtistes.vue";

export default {
  name: "Artistes",
  components: {
    CardArtistes,
  },
  data() {
    return {
      listeArtistes: [],
    };
  },
  mounted() {
    axios
      .get("artistes")
      .then((res) => {
        this.listeArtistes = res.data;
        console.log("artistes", this.listeaArtistes);
      })
      .catch((error) => {
        console.log(error.message);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>

<template>
  <div class="">
    <h2>Les Artistes du label</h2>
    <CardArtistes :listeArtistes="listeArtistes" />
  </div>
</template>

<style scoped></style>
