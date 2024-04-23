<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
    error: Object as () => NuxtError,
});
</script>

<template>
    <a-result
        :status="error?.statusCode"
        :title="error?.statusCode"
    >
    <template #extra class="flex flex-col gap-3">
            <h1>Простите, этой страницы не существует</h1>
            <a-button type="primary" href="/">Back Home</a-button>
        </template>
    </a-result>
</template>