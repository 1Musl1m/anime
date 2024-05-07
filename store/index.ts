// store/animes.ts
import { defineStore } from 'pinia';
import type { Anime } from '~/types/anime';

export const useAnimeStore = defineStore('animeStore', {
  state: () => ({
    animes: [] as Anime[],
    page: 1,
  }),
  actions: {
    async fetchAnimes() {
      try {
        const response = await fetch(`https://shikimori.one/api/animes?page=${this.page}&limit=28&order=popularity`);
        if (!response.ok) {
          throw new Error('Проблема с запросом к API');
        }
        const data = await response.json();
        this.animes = [...this.animes, ...data];
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    },
    addData() {
      this.page++;
      this.fetchAnimes();
    },
  },
});