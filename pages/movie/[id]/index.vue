<script setup lang="ts">
const route = useRoute();
const { data: detail } = await useFetch(
    `https://shikimori.one/api/animes/${route.params.id}`, 
);

const { data: images } = await useFetch(
    `https://shikimori.one/api/animes/${route.params.id}/screenshots`
);

const { data: similars } = await useFetch(
    `https://shikimori.one/api/animes/${route.params.id}/similar`
);
</script>

<template>
    <div class="mt-10 px-10">
        <div class="container">
            <AnimeDetailCard :detail="detail" />
        </div>
        <a-flex gap="large" class="mt-5 border-t-2 pt-3">
            <div class="flex flex-col gap-4">
                <h1 class="text-3xl">Фрагменты с данного аниме</h1>
                <a-carousel autoplay dot-position="left" class="w-[600px]">
                    <div v-for="image in images.slice(0, 11)">
                        <NuxtImg
                            :src="`https://shikimori.one${image.original}`"
                            class="rounded-xl"
                            fit="contain"
                            sizes="100vw"
                            width="600px"
                        />
                    </div>
                </a-carousel>
            </div>
            <a-flex wrap="wrap" class="px-4">
                <h1 class="text-3xl pr-2">Похожие</h1>
                <a-flex wrap="wrap" gap="small">
                    <AnimeSimilarCard
                        v-for="similar in similars.slice(0, 10)"
                        :key="similar.id"
                        :similar="similar"
                    />
                </a-flex>
            </a-flex>
        </a-flex>
    </div>
</template>

<style scoped>
.container {
    display: grid;
    grid-template-columns: 400px 1fr;
}
</style>
