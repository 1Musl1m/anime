<script setup lang="ts">
import type { Anime } from '~/types/anime';

defineProps<{
    similar: Anime
}>()
</script>

<template>
    <div>
        <a-card
            size="small"
            :bordered="false"
            class="w-[150px] bg-black text-white"
        >
            <NuxtLink :to="`/movie/${similar.id}`">
                <NuxtImg
                    :src="`https://shikimori.one${similar.image.original}`"
                    :alt="similar.russian"
                    class="rounded-xl"
                    fit="cover"
                    width="150"
                />
            </NuxtLink>
            <div class="py-4 flex flex-col gap-3">
                <div class="flex justify-between items-center gap-1">
                    <h2
                        class="font-bold text-white text-xl line-clamp-1 w-full"
                    >
                        {{ similar.russian }}
                    </h2>
                    <div class="py-1 px-2 bg-[#161921] rounded-sm">
                        <p class="text-white text-sm font-bold capitalize">
                            {{ similar.kind }}
                        </p>
                    </div>
                </div>
                <div class="flex gap-4 items-center justify-between">
                    <div class="flex flex-row gap-2 items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-device-tv"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"
                            />
                            <path d="M16 3l-4 4l-4 -4" />
                        </svg>
                        <p class="text-base text-white font-bold">
                            {{ similar.episodes || similar.episodes_aired }}
                        </p>
                    </div>
                    <div class="flex flex-row gap-2 items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-carambola"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M17.286 21.09q -1.69 .001 -5.288 -2.615q -3.596 2.617 -5.288 2.616q -2.726 0 -.495 -6.8q -9.389 -6.775 2.135 -6.775h.076q 1.785 -5.516 3.574 -5.516q 1.785 0 3.574 5.516h.076q 11.525 0 2.133 6.774q 2.23 6.802 -.497 6.8"
                            />
                        </svg>
                        <p class="text-base font-bold text-[#FFAD49]">
                            {{ similar.score }}
                        </p>
                    </div>
                </div>
            </div>
        </a-card>
    </div>
</template>
