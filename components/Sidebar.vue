<script lang="ts" setup>
import { ref } from 'vue';
import { UnorderedListOutlined } from '@ant-design/icons-vue';

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
    link: '/',
  },
  {
    id: 2,
    icon: '/image/navbar/room.svg',
    name: 'Фильмы',
    link: '/',
  },
  {
    id: 3,
    icon: '/image/navbar/message.svg',
    name: 'Новости',
    link: '/',
  },
  {
    id: 4,
    icon: '/image/navbar/about.svg',
    name: 'О нас',
    link: '/',
  },
  {
    id: 5,
    icon: '/image/navbar/settings.svg',
    name: 'Настройки',
    link: '/',
  },
  {
    id: 6,
    icon: '/image/navbar/help.svg',
    name: 'Помощь',
    link: '/',
  },
];
</script>

<template>
  <div class="hidden sm:block">
    <UnorderedListOutlined @click="showDrawer" class="text-xl" />
    <a-drawer
      v-model:open="open"
      style="background-color: rgb(202, 202, 202); color: gray"
      title="Меню"
      placement="right"
      class="md:block lg:hidden"
    >
      <a-flex gap="middle" vertical v-for="nav in navSide" :key="nav.id">
        <NuxtLink
          :to="nav.link"
          class="flex gap-3 text-xl mb-3 hover:text-red-600"
          @click="onClose"
        >
          <img :src="nav.icon" alt="" />
          <h1>{{ nav.name }}</h1>
        </NuxtLink>
      </a-flex>
    </a-drawer>
  </div>
</template>
