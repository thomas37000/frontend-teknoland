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
        vinyleById(vinyle) {
            this.$router.push({
                name: "vinyleById",
                params: { id: vinyle.id },
            });
        },
    },
};
</script>

<template>
    <div v-for="vinyle in listeVinyles" :key="vinyle.id">
        <h4>{{ vinyle.titre }} - genre: {{ vinyle.genre.libelle }} - sortie le: {{ vinyle.dateSortie }} - duree : {{
                vinyle.duree
        }} min - détail: {{ vinyle.id }}
        </h4>
    </div>

    <table class="table">
        <thead>
            <tr>
                <th>Titre</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="vinyle in listeVinyles" :key="vinyle.id">
                <td>{{ vinyle.titre }}</td>
                <td>
                    <a @click="vinyleById(vinyle)">
                        détail
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
</style>
