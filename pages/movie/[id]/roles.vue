<script setup>
const route = useRoute();
const { data: actors } = await useFetch(
    `https://shikimori.one/api/animes/${route.params.id}/roles`
);

const obj = JSON.stringify(actors.value)
</script>

<template>
    <div>
        <h1>Текущий параметр: {{ route.params.id }}</h1>
    </div>
</template>
