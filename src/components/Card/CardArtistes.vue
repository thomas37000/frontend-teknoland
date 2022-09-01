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

<div class="artistes">
    <div
      class="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div class="flex flex-col items-center pb-10" v-for="artiste in listeArtistes" :key="artiste.idArtiste">
        <img class="mb-3 w-24 h-24 rounded-full shadow-lg" :src="artiste.logo" :alt="artiste.pseudo">
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{{  artiste.pseudo  }}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Tribe / HxC ...</span>
        <div class="flex mt-4 space-x-3 md:mt-6">
          <a href="#"
            class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">about</a>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
  .artistes {
    display: flex;
    justify-content: center;
    padding-top: 1rem;
  }
</style>
