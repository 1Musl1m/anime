<script setup lang="ts">
import { ref } from "vue";
import { LoadingOutlined } from "@ant-design/icons-vue";
import { h } from "vue";
import type { Anime } from "~/types/anime";

const indicator = h(LoadingOutlined, {
    style: {
        fontSize: "24px",
    },
    spin: true,
});

const page = ref(1);
const { pending, data: animes } = useFetch<Anime[]>(
    `https://shikimori.one/api/animes?page=${page.value}&limit=49&order=popularity`,
    {
        lazy: true,
    }
);
</script>

<template>
    <div class="container flex flex-col">
        <h1 class="text-3xl font-bold text-center">Список аниме и фильмов</h1>
        <div class="flex items-center justify-between flex-wrap mt-10 px-4">
            <a-spin :indicator="indicator" v-if="pending" />
            <AnimeCard
                v-for="anime in animes"
                :key="anime.id"
                :anime="anime"
                v-else
            />
        </div>
        <a-back-top />
    </div>
    <!-- <a-button>Добавить</a-button> -->
</template>
