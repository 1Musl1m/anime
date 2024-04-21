<script lang="ts" setup>
const { pending, data: articles } = await useFetch('/api/news', {
    lazy: true,
    server: false,
})
</script>

<template>
  <div class="mt-10 p-8">
    <header class="text-center mb-8">
      <h1 class="text-3xl font-bold" data-aos="fade-up">Последние новости</h1>
    </header>
    <main>
        <NewsCard v-for="article in articles" :key="article.id" :article="article"/>
    </main>
  </div>
</template>