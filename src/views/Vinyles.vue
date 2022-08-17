<template>
  <div class="">
    <h2>Liste de vinyles</h2>
    <CardVinyles :listeVinyles="listeVinyles" />
  </div>
</template>

<script>
import CardVinyles from "../components/Card/CardVinyles.vue";

export default {
  name: "Vinyles",
  components: {
    CardVinyles,
  },
  data() {
    return {
      listeVinyles: [],
    };
  },
  mounted() {
    axios
      .get("vinyles")
      .then((res) => {
        this.listeVinyles = res.data;
        console.log("vinyles", this.listeVinyles);
      })
      .catch((error) => {
        console.log(error.message);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>

<style>
</style>