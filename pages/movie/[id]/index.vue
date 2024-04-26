<script setup lang="ts">
const route = useRoute();
const { data: details } = await useFetch(
    `https://shikimori.one/api/animes/${route.params.id}`
);

const { data: images } = await useFetch(
    `https://shikimori.one/api/animes/${route.params.id}/screenshots`
);
</script>

<template>
    <div class="mt-10 px-10">
        <div class="container">
            <AnimeDetailCard :details="details" />
            <div v-for="image in images">
                <NuxtImg
                    :src="`https://shikimori.one${image.original}`"
                    :alt="details.name"
                    class="rounded-xl"
                    width="300"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: grid;
    grid-template-columns: 400px 1fr;
}
</style>
