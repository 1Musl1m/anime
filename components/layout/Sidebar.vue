<script lang="ts" setup>
const open = ref<boolean>(false);

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
        style="background-color: rgb(202, 202, 202); color: gray"
        title="Меню"
        placement="right"
    >
        <a-flex gap="middle" vertical v-for="nav in navSide" :key="nav.id">
            <NuxtLink :to="nav.link" class="flex gap-3 text-xl mb-3 hover:text-red-600"  @click="onClose">
                <img :src="nav.icon" alt="">
                <h1>{{ nav.name }}</h1>
            </NuxtLink>
        </a-flex>
    </a-drawer>
</template>