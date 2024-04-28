export const fetchAnimeDetails = async (id: number): Promise<any> => {
  const response = await fetch(`https://shikimori.one/api/animes/${id}`);
  const data = await response.json();
  return data;
};

export const fetchAnimeImages = async (id: number): Promise<any> => {
  const response = await fetch(`https://shikimori.one/api/animes/${id}/screenshots`);
  const data = await response.json();
  return data;
};

export const fetchAnimeSimilars = async (id: number): Promise<any> => {
  const response = await fetch(`https://shikimori.one/api/animes/${id}/similar`);
  const data = await response.json();
  return data;
};