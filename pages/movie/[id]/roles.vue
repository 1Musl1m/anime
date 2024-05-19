<script setup lang="ts">
import type { Actor, Character } from "~/types/anime";
const route = useRoute();
const { data: actors } = await useFetch<Actor>(
    `https://shikimori.one/api/animes/${route.params.id}/roles`
);
</script>

<template>
    <div>
        <div v-for="actor in actors">
            <div>{{ actor.character }}</div>
        </div>
    </div>
</template>
