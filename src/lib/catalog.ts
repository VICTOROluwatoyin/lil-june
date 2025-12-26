export type Track = {
  id: string;
  title: string;
  artist: string;
  price: number;
  duration: string;
};

export type Album = {
  id: string;
  title: string;
  artist: string;
  coverImage: string;
  tracks: Track[];
};

export const albums: Album[] = [
  {
    id: "afro-punta-3",
    title: "Afro Punta 3: Rich Or Thriller",
    artist: "Lil June",
    coverImage: "/images/artist/1006811508.jpg",
    tracks: [
      {
        id: "omg",
        title: "OMG",
        artist: "Lil June",
        price: 1.29,
        duration: "2:44",
      },
      {
        id: "wadebei",
        title: "Wadebei (Feat. Nalo, Korus & Eke Primo)",
        artist: "Lil June",
        price: 1.29,
        duration: "2:44",
      },
      {
        id: "hola-mi-amor",
        title: "Hola Mi Amor (Feat. Lachi The Real Melody)",
        artist: "Lil June",
        price: 1.29,
        duration: "3:29",
      },
      {
        id: "back-on-di-road",
        title: "Back on di road (Feat. Denise Belfon)",
        artist: "Lil June",
        price: 1.29,
        duration: "2:30",
      },
    ],
  },
];
