<script setup lang="ts">
defineProps({
    article: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <div class="flex items-center justify-between flex-wrap">
        <div
            class="border-2 rounded-lg shadow-md mb-5 p-3"
            data-aos="fade-up"
        >
            <img
                :src="article.image"
                alt="Article Image"
                width="650"
                height="400"
                class="object-cover mb-4 rounded-md"
            />
            <h2 class="text-xl font-semibold mb-2">{{ article.title }}</h2>
            <p class="text-gray-700 mb-4">{{ article.description }}</p>
            <button>
                <Nuxt-link :to="`/news/${article.id}`" class="p-1"
                    >Читать далее</Nuxt-link
                >
            </button>
        </div>
    </div>
</template>
