export interface Track {
  name: string;
  artist: string;
  genere: string;
  url: string;
  cover: string;
  util?: {
    player_color: string;
  };
}

export const TRACKS: Track[] = [
  {
    name: 'Say My Name',
    artist: 'Ateez',
    genere: 'K-POP',
    url: '/music/Ateez_-_Say_My_Name.mp3',
    cover: '/images/songs/say_my_name.png',
    util: {
      player_color: '#43090a',
    },
  },
  {
    name: 'Boy With Luv (Feat. Halsey)',
    artist: 'BTS',
    genere: 'K-POP',
    url: '/music/BTS_-_Boy_With_Luv_(Feat._Halsey).mp3',
    cover: '/images/songs/boy_with_luv.png',
    util: {
      player_color: '#894156',
    },
  },
  {
    name: 'Dynamite',
    artist: 'BTS',
    genere: 'K-POP',
    url: '/music/BTS_-_Dynamite.mp3',
    cover: '/images/songs/dynamite.png',
  },
  {
    name: 'Butter',
    artist: 'BTS',
    genere: 'K-POP',
    url: '/music/BTS_-_Butter.mp3',
    cover: '/images/songs/butter.png',
    util: {
      player_color: '#685a00',
    },
  },
];