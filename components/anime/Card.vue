<script setup>
defineProps({
    anime: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <div class="w-[200px] rounded flex  flex-col gap-3">
        <div class="">
            <NuxtLink :to="`/movie/${anime.id}`" class="w-full">
                <NuxtImg
                    :src="`https://shikimori.one${anime.image.original}`"
                    :alt="anime.russian"
                    class="rounded-xl"
                    fit="cover"
                    width="190"
                />
            </NuxtLink>
        </div>
        <div class="py-4 flex flex-col gap-3">
            <div class="flex justify-between items-center gap-1">
                <h2 class="font-bold text-white text-xl line-clamp-1 w-full">
                    {{ anime.russian }}
                </h2>
                <div class="py-1 px-2 bg-[#161921] rounded-sm">
                    <p class="text-white text-sm font-bold capitalize">
                        {{ anime.kind }}
                    </p>
                </div>
            </div>
            <div class="flex gap-4 items-center">
                <div class="flex flex-row gap-2 items-center">
                    <p class="text-base text-white font-bold">
                        {{ anime.episodes || anime.episodes_aired }}
                    </p>
                </div>
                <div class="flex flex-row gap-2 items-center">
                    <p class="text-base font-bold text-[#FFAD49]">
                        {{ anime.score }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
