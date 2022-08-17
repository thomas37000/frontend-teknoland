<script>
export default {
  props: {
    listeVinyles: {
      type: Array,
    },
  },
  data() {
    return {
      loading: true,
      errored: false,
    };
  },
  methods: {
    VinyleById(vinyle) {
      this.$router.push({
        name: "VinyleById",
        params: { idVinyle: vinyle.idVinyle },
      });
    },
  },
};
</script>

<template>
  <div class="listeVinyles">
    <table class="table">
      <thead>
        <tr>
          <th>Titre</th>
          <th>référence</th>
          <th>infos</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="vinyle in listeVinyles" :key="vinyle.idVinyle">
          <td>{{ vinyle.titre }}</td>
          <td>{{ vinyle.reference }}</td>
          <td>
            <a @click="VinyleById(vinyle)"> détail </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.listeVinyles {
  width: 350px;
  border: 1px solid lightgray;
}
</style>
