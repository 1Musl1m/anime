<script setup lang="ts">
import { useAnimeStore } from "~/store";
const animeStore = useAnimeStore()
onMounted(() => {
    animeStore.fetchAnimes()
});
</script>

<template>
    <div>
        <Head>
            <Title>Anime</Title>
            <Meta name="description" content="Anime" />
        </Head>
    </div>
    <div class="container flex flex-col">
        <h1 class="text-3xl font-bold text-center p-4">Список аниме и фильмов</h1>
        <div class="flex items-center gap-3 flex-wrap px-4 md:gap-7">
            <AnimeCard v-for="anime in animeStore.animes" :key="anime.id" :anime="anime" data-aos="fade-up"/>
        </div>
        <a-button
                @click="animeStore.addData"
                class="mx-auto mt-4 rounded"
                type="primary"
                danger
                >Еще</a-button
            >
        <a-back-top />
    </div>
</template>