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
  <h2 class="text-3xl">Teknoland vinyles</h2>
  <div class="flex flex-wrap pt-10">

    <div class="max-w-sm rounded overflow-hidden shadow-lg ml-5 mr-2 mb-5" v-for="vinyle in listeVinyles" :key="vinyle.idVinyle">
      <img class="w-full" :src="vinyle.image" :alt="vinyle.titreVinyle" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{  vinyle.titreVinyle  }}</div>
        <p>
          {{  vinyle.reference  }}
        </p>
        <button
          class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          @click="VinyleById(vinyle)">
          infos
        </button>
      </div>
    </div>
  </div>

</template>
  
  <style scoped>
  h2 {
    text-align: center;
  }
  
  .listeVinyles {
    width: 350px;
    border: 1px solid lightgray;
  }
  </style>
  