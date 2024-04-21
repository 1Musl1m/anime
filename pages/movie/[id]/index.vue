<script setup lang="ts">
const route = useRoute();
const { data: anime } = await useFetch(
    `https://shikimori.one/api/animes/${route.params.id}`
);

</script>

<template>
    <div class="mt-10 px-10" >
        <div class="grid grid-cols-3">
            <NuxtImg
                :src="`https://shikimori.one${anime.image.original}`"
                :alt="anime.name"
                class="rounded-xl"
                width="300"
            />
            <div class="flex flex-col gap-4">
                <h1 class="text-5xl font-bold">{{ anime.russian }}</h1>
                <p class="text-gray-400">{{ anime.description }}</p>  
                <!-- <NuxtLink :to="`/movie/${anime.id}/roles`"> -->
                    <a-button type="primary" danger>Более подробная информаци</a-button>
                <!-- </NuxtLink> -->
            </div>
        </div>
    </div>
</template>