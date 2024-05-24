//Object destructuring

interface Details {
  author: string;
  year: number;
}

interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Suavemente",
  details: {
    author: "Cucui Ganon",
    year: 2020,
  },
};

//Advanced destructuring, hard to read
/* const {
    song: name,
    songDuration: duration,
    details: {
        author,
        year
    }
} = audioPlayer; */

const { song: name, songDuration: duration, details } = audioPlayer;

const { author, year } = details;

/* console.log(audioPlayer.song)
console.log(name)

console.log(duration)
console.log(audioPlayer.songDuration)

console.log(author)
console.log(year) */

//Array destructuring

const dbz: string[] = ["Goku", "Vegeta", "Trunks"];

const [p1, p2, p3] = dbz;
const [, , trunks='Not found'] = dbz;

console.log("Personaje 3", dbz[2]);
console.log("Personaje 3", p3);
console.log("Personaje 3", trunks);

export {};
