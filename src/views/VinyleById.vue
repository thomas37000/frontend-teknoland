<template>
    <div v-if="vinyle">
        <h2>vinyle détail</h2>
        <h4>{{ vinyle.titre }} - sortie le: {{ vinyle.dateSortie }} - duree : {{
                vinyle.duree
        }} min
        </h4>

        <div>genre: {{ vinyle.genre.libelle }}</div>
    </div>
    <div v-else class="loading">Loading Data...!</div>
</template>

<script>
import axios from "axios";
import Apivinyles from "../api/ApiParticipants.js";

export default {
    name: "vinyleById",
    props: ["id", "titre", "dateSortie", "duree"],
    data() {
        return {
            vinyle: null,
            loading: true,
            errored: false,
        };
    },
    mounted() {
        axios
            .get(`http://localhost:8080/api/vinyles/${this.id}`)
            .then((res) => {
                this.vinyle = res.data;
                console.log("vinyle DETAIL", this.vinyle);
            })
            .catch((error) => {
                console.log(error.message);
                this.errored = true;
            })
            .finally(() => (this.loading = false));
    },
};
</script>

<style>
</style>