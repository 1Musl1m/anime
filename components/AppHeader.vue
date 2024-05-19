<template>
    <div>
        <nav class="border-b-2">
            <div
                class="flex flex-wrap items-center justify-between py-11 px-20"
            >
                <NuxtLink
                    to="/"
                    class="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img src="/image/logo.svg" alt="" />
                    <span
                        class="self-center text-2xl font-semibold whitespace-nowrap hover:text-red-600 active:text-red-900 transition-colors"
                        >Ashanti</span
                    >
                </NuxtLink>
                <div>
                    <ul
                        class="flex items-start gap-14 font-medium rtl:space-x-reverse md:hidden"
                    >
                        <li>
                            <NuxtLink
                                to="/"
                                class="block px-3 text-2xl text-white hover:text-red-600 active:text-red-900 transition-colors"
                                aria-current="page"
                            >
                                Главная
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink
                                to="/movie"
                                class="block px-3 text-2xl text-white hover:text-red-600 active:text-red-900 transition-colors"
                            >
                                Фильмы
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink
                                to="/news"
                                class="block px-3 text-2xl text-white hover:text-red-600 active:text-red-900 transition-colors"
                            >
                                Новости
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink
                                to="/about"
                                class="block px-3 text-2xl text-white hover:text-red-600 active:text-red-900 transition-colors"
                            >
                                О нас
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>