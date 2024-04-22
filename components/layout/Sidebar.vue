<script lang="ts" setup>
import { ref } from "vue";

const open = ref<boolean>(false);

const afterOpenChange = (bool: boolean) => {
    console.log("open", bool);
};

const showDrawer = () => {
    open.value = true;
};

const onClose = () => {
    open.value = false;
};

const navSide = [
    {
        id: 1,
        icon: '/image/navbar/home.svg',
        name: 'Главная',
        link: '/'
    },
    {
        id: 2,
        icon: '/image/navbar/friends.svg',
        name: 'Друзья',
        link: '/'
    },
    {
        id: 3,
        icon: '/image/navbar/message.svg',
        name: 'Чат',
        link: '/'
    },
    {
        id: 4,
        icon: '/image/navbar/room.svg',
        name: 'Комната',
        link: '/'
    },
    {
        id: 5,
        icon: '/image/navbar/like.svg',
        name: 'Избранное',
        link: '/'
    },
    {
        id: 6,
        icon: '/image/navbar/settings.svg',
        name: 'Настройки',
        link: '/'
    },
    {
        id: 7,
        icon: '/image/navbar/help.svg',
        name: 'Помощь',
        link: '/'
    },
]
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
        <div v-for="nav in navSide" :key="nav.id" class="flex flex-col gap-8">
            <NuxtLink :to="nav.link" class="flex items-center gap-4 text-xl"  @click="onClose">
                <img :src="nav.icon" alt="">
                <h1>{{ nav.name }}</h1>
            </NuxtLink>
        </div>
    </a-drawer>
</template>