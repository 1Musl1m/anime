<script setup lang="ts">
defineProps({
    details: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <NuxtImg
        :src="`https://shikimori.one${details.image.original}`"
        :alt="details.name"
        class="rounded-xl"
        width="300"
    />
    <div class="flex flex-col gap-3">
        <h1 class="text-5xl font-bold">
            {{ details.russian }} / {{ details.name }}
        </h1>
        <p class="text-gray-400">{{ details.description }}</p>
        <div class="inf">
            <div class="py-1 px-2 bg-[#161921] rounded-sm">
                <p class="text-white text-sm font-bold capitalize">
                    Формат: {{ details.kind }}
                </p>
            </div>
            <div class="py-1 px-2 bg-[#161921] rounded-sm">
                <p class="text-white text-sm font-bold capitalize">
                    Эпизодов: {{ details.episodes }}
                </p>
            </div>
            <div class="py-1 px-2 bg-[#161921] rounded-sm">
                <p class="text-white text-sm font-bold capitalize">
                    Рейтинг: {{ details.score }}
                </p>
            </div>
            <div class="py-1 px-2 bg-[#161921] rounded-sm">
                <p class="text-white text-sm font-bold capitalize">
                    Формат: {{ details.genres.russian }}
                </p>
            </div>
        </div>
        <NuxtLink :to="`/movie/${details.id}/roles`">
        <a-button type="primary" danger>Более подробная информаци</a-button>
        </NuxtLink>
    </div>
</template>

<style scoped>
.inf{
    display: grid;
    grid-template-columns: 100px 110px 100px 1fr ;
    gap: 13px;
}
</style>