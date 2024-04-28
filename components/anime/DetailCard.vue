<script setup lang="ts">
defineProps({
    detail: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <NuxtImg
        :src="`https://shikimori.one${detail.image.original}`"
        :alt="detail.name"
        class="rounded-xl"
        width="350"
    />
    <div class="flex flex-col gap-3">
        <h1 class="text-5xl font-bold">
            {{ detail.russian }} / {{ detail.name }}
        </h1>
        <br />
        <p class="text-gray-400">{{ detail.description }}</p>
        <br />
        <div class="inf">
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
            <div class="py-1 px-2 bg-[#161921] rounded-sm">
                <p class="text-white text-sm font-bold capitalize">
                    Формат: {{ detail.genres.russian }}
                </p>
            </div>
        </div>
        <NuxtLink :to="`/movie/${detail.id}/roles`">
            <a-button type="primary" danger>Более подробная информаци</a-button>
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
