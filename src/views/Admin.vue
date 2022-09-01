<script setup>
import { ref, onMounted } from "vue";
// import Multiselect from 'vue-multiselect'

// ref Vinyle
const titreVinyle = ref("");
const reference = ref("");
const dateDeSortie = ref();
const image = ref("");
const format = ref("");
// ref Artiste
const pseudo = ref("");
const artiste = ref()
const listeArtistes = ref([])
// ref Genre
const libelle = ref("");
const genre = ref()
const listeGenres = ref([])
// ref Titre
const nom = ref("")
const titre = ref()
const listeTitres = ref([])

onMounted(() => {
    loadArtistes();
    loadGenres();
    loadTitres();
});

async function addVinyle() {
    const postVinyle = {
        titreVinyle: titre.value,
        reference: reference.value,
        dateDeSortie: dateDeSortie.value,
        image: image.value,
        format: format.value,
        genre: genre.value,
        artiste: artiste.value
    };

    await axios.post("vinyles", postVinyle, {
        method: 'post',
    })
        .then((response) => { console.log(response) })
        .catch(function (error) {
            console.log(error.response);
        });
    // .catch((error) => {
    //     const data = JSON.parse(error.config.data);
    //     console.error("request data", data);
    // });

    titreVinyle.value = ""
    reference.value = ""
    dateDeSortie.value = ""
    image.value = ""
    format.value = ""
    genre.value = ""
    artiste.value = ""
}

async function addGenre() {
    const postGenre = {
        libelle: libelle.value,
    };

    await axios.post("genres", postGenre);
    libelle.value = ""
}

async function addArtiste() {
    const postArtiste = {
        pseudo: pseudo.value,
    };

    await axios.post("artistes", postArtiste);
    pseudo.value = ""
}

async function addTitre() {
    const postTitre = {
        nom: nom.value,
    };

    await axios.post("titres", postTitre);
    nom.value = ""
}

async function loadArtistes() {
    const result = await axios.get("artistes");
    listeArtistes.value = result.data;
}

async function loadGenres() {
    const result = await axios.get("genres");
    listeGenres.value = result.data;
}

async function loadTitres() {
    const result = await axios.get("titres");
    listeTitres.value = result.data;
}

// Promise.all([loadArtistes(), loadGenres(), loadTitres()])
//     .then(function (results) {
//         const acct = results[0];
//         const perm = results[1];
//         const aaa = results[2];
//     });
</script>
    
    <template>
    <div class="grid justify-center pt-10">
        <!-- ********************************** AJOUTER UN VINYLE ********************************** -->
        <div class="w-full">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ajout-vinyle">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="titre">
                            titre du vinyle
                        </label>
                        <input v-model="titre"
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="titre" type="text" placeholder="spiral 23">
                    </div>

                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="image">
                            image vinyle
                        </label>
                        <input v-model="image"
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="image" type="text" placeholder="ajouter l' URL de l'image">
                    </div>
                </div>

                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="format">
                            format
                        </label>
                        <input v-model="format"
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="format" type="text" placeholder="12">
                    </div>

                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="reference">
                            référence
                        </label>
                        <input v-model="reference"
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="reference" type="text" placeholder="Teknoland 01">
                    </div>

                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="dateDeSortie">
                            date de sortie
                        </label>
                        <input type="date" id="dateDeSortie" v-model="dateDeSortie">
                    </div>

                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0 select">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="genre">
                            genre(s)
                        </label>

                        <select id="genre" v-model="genre"
                            class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                            <option v-for="genre in listeGenres" :value="genre">{{  genre.libelle  }}</option>
                        </select>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>

                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0 select">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="artiste">
                            artiste(s)
                        </label>

                        <select id="artiste" v-model="artiste"
                            class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                            <option v-for="artiste in listeArtistes" :value="artiste">{{  artiste.pseudo  }}</option>
                        </select>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>

                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0 select">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="titre">
                            titre(s)
                        </label>

                        <select id="titre" v-model="titre"
                            class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                            <option v-for="titre in listeTitres" :value="titre">{{  titre.nom  }}</option>
                        </select>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="flex items-center justify-center">
                    <button @click="addVinyle"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5"
                        type="button">
                        Enregistrer
                    </button>
                </div>
            </form>
        </div>

        <div class="flex items-center justify-between ajouts">
            <!-- ********************************** AJOUT D' ARTISTES ********************************** -->
            <div class="w-full max-w-xs">
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="pseudo">
                            ajouter un artiste
                        </label>
                        <input v-model="pseudo"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="pseudo" type="text" placeholder="Radium">
                    </div>

                    <div class="flex items-center justify-between">
                        <button @click="addArtiste"
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button">
                            Enregistrer
                        </button>
                    </div>
                </form>
            </div>

            <!-- ********************************** AJOUT DE GENRES ********************************** -->
            <div class="w-full max-w-xs">
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="libelle">
                            ajouter un genre
                        </label>
                        <input v-model="libelle"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="libelle" type="text" placeholder="Tribe">
                    </div>

                    <div class="flex items-center justify-between">
                        <button @click="addGenre"
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button">
                            Enregistrer
                        </button>
                    </div>
                </form>
            </div>

            <!-- ********************************** AJOUT DE TITRES ********************************** -->
            <div class="flex items-center justify-between ajouts">
                <div class="w-full max-w-xs">
                    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8">
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="titre">
                                ajouter un titre
                            </label>
                            <input v-model="nom"
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="nom" type="text" placeholder="freak party">
                        </div>

                        <div class="flex items-center justify-between">
                            <button @click="addTitre"
                                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button">
                                Enregistrer
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- ********************************** LISTES ARTISTES / GENRES / TITRES ********************************** -->
        <div class="flex justify-between">
            <div class="w-25 liste-artistes">
                <table class="table-auto">
                    <thead>
                        <tr>
                            <th class="px-4 py-2 text-gray-700 text-sm font-bold">id</th>
                            <th class="px-4 py-2 text-gray-700 text-sm font-bold">Pseudo</th>
                        </tr>
                    </thead>
                    <tbody v-for="artiste in listeArtistes" :key="artiste.idArtiste">
                        <tr>
                            <td class="border px-4 py-2">{{  artiste.idArtiste  }}</td>
                            <td class="border px-4 py-2">{{  artiste.pseudo  }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="w-25 liste-genres">
                <table class="table-auto">
                    <thead>
                        <tr>
                            <th class="px-4 py-2 text-gray-700 text-sm font-bold">id</th>
                            <th class="px-4 py-2 text-gray-700 text-sm font-bold">Genres</th>
                        </tr>
                    </thead>
                    <tbody v-for="genre in listeGenres" :key="genre.idGenre">
                        <tr>
                            <td class="border px-4 py-2">{{  genre.idGenre  }}</td>
                            <td class="border px-4 py-2">{{  genre.libelle  }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="w-25 liste-titres">
                <table class="table-auto">
                    <thead>
                        <tr>
                            <th class="px-4 py-2 text-gray-700 text-sm font-bold">id</th>
                            <th class="px-4 py-2 text-gray-700 text-sm font-bold">Titres</th>
                        </tr>
                    </thead>
                    <tbody v-for="titre in listeTitres" :key="titre.idTitre">
                        <tr>
                            <td class="border px-4 py-2">{{  titre.idTitre  }}</td>
                            <td class="border px-4 py-2">{{  titre.nom  }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>

    </div>
</template>
    
<style scoped>
.ajout-vinyle {
    padding: 1rem;
}

.select {
    margin-top: 2rem;
}

.ajouts {
    margin: 5rem 0;
}

.tableau {
    margin: auto;
}
</style>