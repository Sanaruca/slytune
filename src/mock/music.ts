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
    name: 'DDU-DU DDU-DU',
    artist: 'BLACKPINK',
    genere: 'POP',
    url: '/music/BLACKPINK_-_DDU-DU_DDU-DU.mp3',
    cover: '/images/songs/dududu.avif',
    util: {
      player_color: '#b86271',
    },
  },
  {
    name: 'I Wanna Dance with Somebody (Who Loves)',
    artist: 'Whitney Houston',
    genere: 'POP',
    url: '/music/Whitney_Houston_-_I_Wanna_Dance_with_Somebody_(Who_Loves).mp3',
    cover: '/images/songs/iwdwsb.jpg',
  },
  {
    name: 'Wasabi',
    artist: 'Little Mix',
    genere: 'POP',
    url: '/music/Little_Mix_-_Wasabi.mp3',
    cover: '/images/songs/wasabi.jpg',
  },
  {
    name: 'Bling-Bang-Bang-Born',
    artist: 'Creepy Nuts',
    genere: 'POP',
    url: '/music/Creepy_Nuts_-_Bling-Bang-Bang-Born.mp3',
    cover: '/images/songs/bbb.jpg',
    util: {
      player_color: '#857300',
    },
  },
  {
    name: 'Magnetic',
    artist: 'ILLIT',
    genere: 'K-POP',
    url: '/music/ILLIT_-_Magnetic.mp3',
    cover: '/images/songs/magnetic.jpg',
  },
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
