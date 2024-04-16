<template>
    <div>
        <nav class='border-b-2'>
            <div class="flex flex-wrap items-center justify-between py-11 px-20">
                <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/image/logo.svg" alt="">
                    <span class="self-center text-2xl font-semibold whitespace-nowrap hover:text-red-600 active:text-red-900 transition-colors">Ashanti</span>
                </NuxtLink>
                <div>
                    <ul class="flex items-start gap-14 font-medium rtl:space-x-reverse
                                md:hidden">
                        <li>
                            <NuxtLink to="/" class="block px-3 text-2xl text-white hover:text-red-600 active:text-red-900 transition-colors" aria-current="page">
                                Фильмы
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/news" class="block px-3 text-2xl text-white hover:text-red-600 active:text-red-900 transition-colors">
                                Сериалы
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/about" class="block px-3 text-2xl text-white hover:text-red-600 active:text-red-900 transition-colors">
                                Новости
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/about" class="block px-3 text-2xl text-white hover:text-red-600 active:text-red-900 transition-colors">
                                О нас
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="hover:text-red-600 active:text-red-900 transition-colors">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
                </div>
            </div>
        </nav>
    </div>
</template>