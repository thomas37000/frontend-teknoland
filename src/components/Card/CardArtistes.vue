<script>
export default {
  props: {
    listeartistes: {
      type: Array,
    },
  },
  data() {
    return {
      loading: true,
      errored: false,
    };
  },
};
</script>

<template>
  <div class="listeArtistes">
    <table class="table">
      <thead>
        <tr>
          <th>nom</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="artiste in listeArtistes" :key="artiste.idArtiste">
          <td>{{ artiste.nom }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.listeArtistes {
  width: 350px;
  border: 1px solid lightgray;
}
</style>
