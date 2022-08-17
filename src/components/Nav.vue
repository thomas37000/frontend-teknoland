<template>
  <nav>
    <ul>
      <li>
        <router-link to="/"><img src="" alt="logo" /></router-link>
      </li>
      <li><router-link to="/">Vinyles</router-link></li>
      <li><router-link to="/artistes">Artistes</router-link></li>
      <li><router-link to="/ajout-genre">Ajout Genre</router-link></li>
      <li><router-link to="/ajout-artiste">Ajout Artiste</router-link></li>
      <li><router-link to="/ajout-vinyle">Ajout Vinyle</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>
<style scoped>
nav ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 10px;
}

nav li {
    list-style-type:none ;
}

nav a {
    text-decoration: none;
}
</style>
