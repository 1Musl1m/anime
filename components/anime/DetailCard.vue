<script setup lang="ts">
import type { Detail } from "~/types/anime";

defineProps<{
    detail: Detail;
}>();
</script>

<template>
    <NuxtImg
        :src="`https://shikimori.one${detail.image.original}`"
        :alt="detail.name"
        class="rounded-xl lg:h-[400px] lg:w-[300px]"
        width="350"
    />
    <div class="flex flex-col gap-3 lg:gap-1">
        <h1 class="text-5xl font-bold lg:text-3xl">
            {{ detail.russian }} / {{ detail.name }}
        </h1>
        <br />
        <p class="text-gray-400">{{ detail.description }}</p>
        <br />
        <div class="inf lg:flex lg:flex-wrap">
            <div class="py-1 px-2 bg-[#161921] rounded-sm">
                <p class="text-white text-sm font-bold capitalize">
                    Формат: {{ detail.kind }}
                </p>
            </div>
            <div class="py-1 px-2 bg-[#161921] rounded-sm">
                <p class="text-white text-sm font-bold capitalize">
                    Эпизодов: {{ detail.episodes }}
                </p>
            </div>
            <div class="py-1 px-2 bg-[#161921] rounded-sm">
                <p class="text-white text-sm font-bold capitalize">
                    Рейтинг: {{ detail.score }}
                </p>
            </div>
            <div class="py-1 px-2 bg-[#161921] rounded-sm flex items-center gap-2">
                Жанр :
                <p
                    class="text-white text-sm font-bold capitalize"
                    v-for="genre in detail.genres"
                    :key="genre.id"
                >
                    {{ genre.russian }}
                </p>
            </div>
        </div>
        <NuxtLink>
            <a-button type="primary" danger>Смотреть</a-button>
        </NuxtLink>
    </div>
</template>

<style scoped>
.inf {
    display: grid;
    grid-template-columns: 100px 110px 100px 1fr;
    gap: 13px;
}
</style>
