<script lang="ts" setup>
const handleMessage = () => {
    message.info("Спасибо что ты выбрал нас");
};
</script>

<template>
    <header class="p-24 flex flex-col gap-7 relative" data-aos="fade-up">
        <h1 class="text-6xl tracking-widest z-10">
            Фильмы, сериалы,<br />
            мультфильмы в одном месте!
        </h1>
        <div class="w-3/6">
            <p class="text-xl">
                Всегда хотели узнать где можно дешевле посмотреть то или иное
                произведение исскуства? Просто обсудить какую-либо кинофраншизу?
                А может просто посмотреть последние новости в сфере кино? Тогда,
                данный сайт был сделан для вас!
            </p>
        </div>
        <NuxtLink to="/movie">
            <a-button
                @click="handleMessage"
                class="w-1/5 h-14 text-xl"
                type="primary"
                danger
                >Смотреть</a-button
            >
        </NuxtLink>
        <img
            src="/image/anime.png"
            alt=""
            class="absolute w-1/3 right-1 top-5"
        />
    </header>
</template>
