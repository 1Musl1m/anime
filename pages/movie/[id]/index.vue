<script setup lang="ts">
const route = useRoute();
const { data: anime } = await useFetch(
    `https://shikimori.one/api/animes/${route.params.id}`
);
</script>

<template>
    <div class="mt-10 px-10">
        <div class="container">
            <NuxtImg
                :src="`https://shikimori.one${anime.image.original}`"
                :alt="anime.name"
                class="rounded-xl"
                width="300"
            />
            <div class="flex flex-col gap-3">
                <h1 class="text-5xl font-bold">
                    {{ anime.russian }} / {{ anime.name }}
                </h1>
                <p class="text-gray-400">{{ anime.description }}</p>
                <div class="inf">
                    <div class="py-1 px-2 bg-[#161921] rounded-sm">
                        <p class="text-white text-sm font-bold capitalize">
                            Формат: {{ anime.kind }}
                        </p>
                    </div>
                    <div class="py-1 px-2 bg-[#161921] rounded-sm">
                        <p class="text-white text-sm font-bold capitalize">
                            Эпизодов: {{ anime.episodes }}
                        </p>
                    </div>
                    <div class="py-1 px-2 bg-[#161921] rounded-sm">
                        <p class="text-white text-sm font-bold capitalize">
                            Рейтинг: {{ anime.score }}
                        </p>
                    </div>
                    <div class="py-1 px-2 bg-[#161921] rounded-sm">
                        <p class="text-white text-sm font-bold capitalize">
                            Формат: {{ anime.genres.russian }}
                        </p>
                    </div>
                    
                </div>
                <!-- <NuxtLink :to="`/movie/${anime.id}/roles`"> -->
                <a-button type="primary" danger
                    >Более подробная информаци</a-button
                >
                <!-- </NuxtLink> -->
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: grid;
    grid-template-columns: 400px 1fr;
}

.inf{
    display: grid;
    grid-template-columns: 100px 110px 100px 1fr ;
    gap: 13px;
}
</style>
