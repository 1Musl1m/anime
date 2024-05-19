export interface Anime {
    id: number;
    russian: string;
    image: Screenshot;
    kind: number;
    episodes: number;
    episodes_aired: number;
    score: number;
}

export interface Detail {
    id: number;
    name: string;
    russian: string;
    image: Screenshot;
    description: string;
    kind: number;
    episodes: number;
    episodes_aired: number;
    score: number;
    genres: Genres[]
}

interface Genres {
    id: number;
    name: string;
    russian: string;
}

export interface Screenshot {
    original: string;
    preview: string;
}

export interface Character {
    id: number;
    name: string;
    russian: string;
    image: {
        original: string;
        preview: string;
        x96: string;
        x48: string;
    };
    url: string;
}

export interface Actor {
    roles: string[];
    roles_russian: string[];
    character: Character[];
    person: any; 
}