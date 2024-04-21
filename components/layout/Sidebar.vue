<script lang="ts" setup>
import { ref } from "vue";

const open = ref<boolean>(false);

const afterOpenChange = (bool: boolean) => {
    console.log("open", bool);
};

const showDrawer = () => {
    open.value = true;
};
</script>

<template>
    <UnorderedListOutlined @click="showDrawer" class="text-xl" />
    <a-drawer
        v-model:open="open"
        style="color: black; background-color: rgb(202, 202, 202)"
        title="Меню"
        placement="right"
        @after-open-change="afterOpenChange"
    >
        <p v-for="n in 10">items</p>
    </a-drawer>
</template>