<script>
export default {
  props: {
    listeArtistes: {
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
          <th>pseudo</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="artiste in listeArtistes" :key="artiste.idArtiste">
          <td></td>
          <td>{{ artiste.pseudo }}</td>
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
