
<template>
  <nav class="flex items-center justify-between flex-wrap p-6 left-10">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <router-link to="/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-400 hover:text-green-500 text-xl">
        Teknoland</router-link>
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-teal-500 border-teal-400 hover:text-green-500 hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <router-link to="/" class="block mt-4 lg:inline-block lg:mt-0 hover:text-green-500 mr-4 text-xl">Vinyles
        </router-link>
        <router-link to="/artistes" class="block mt-4 lg:inline-block lg:mt-0 hover:text-green-500 mr-4 text-xl">
          Artistes</router-link>
      </div>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-end">
      <router-link to="/admin" class="block mt-4 lg:inline-block lg:mt-0 hover:text-green-500 text-xl admin">
        Admin</router-link>
    </div>
  </nav>
</template>

<script setup>

</script>
<style scoped>
.admin {
  margin-right: 5rem;
}
</style>
