<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Anime } from "~/types/anime";

const page = ref(1);
const animes = ref<Anime[]>([]);

const fetchAnimes = async () => {
    try {
        const response = await fetch(`https://shikimori.one/api/animes?page=${page.value}&limit=28&order=popularity`);
        if (!response.ok) {
            throw new Error('Проблема с запросом к API');
        }
        const newAnimes = await response.json();
        animes.value = [...animes.value, ...newAnimes];
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
};

const addData = () => {
    page.value++;
    fetchAnimes();
};

onMounted(fetchAnimes);
</script>

<template>
    <div class="container flex flex-col">
        <h1 class="text-3xl font-bold text-center">Список аниме и фильмов</h1>
        <div class="flex items-center gap-3 flex-wrap mt-10 px-4">
            <AnimeCard v-for="anime in animes" :key="anime.id" :anime="anime" />
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