<script setup lang="ts">
import type { Anime } from '~/types/anime';

const page = ref(1);
const { data: animes } = useFetch<Anime[]>(() =>
  `https://shikimori.one/api/animes?page=${page.value}&limit=49&order=popularity`
);


const addData = () => {
  page.value++;
};
</script>

<template>
  <div class="container flex flex-col">
    <h1 class="text-3xl font-bold text-center">Список аниме и фильмов</h1>
    <div class="flex items-center justify-between flex-wrap mt-10 px-4">
      <AnimeCard
        v-for="anime in animes"
        :key="anime.id"
        :anime="anime"
      />
    </div>
    <button
      class="mx-auto mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      @click="addData"
    >
      Еще
    </button>
    <a-back-top />
  </div>
</template>