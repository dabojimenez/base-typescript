

interface AudioPlay {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlay = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Autor Musica",
        year: 2012
    }
}

// sacamos ciertas piezas del objeto (osea sus propiedades)
// const { audioVolume, song } = audioPlayer;
const song = 'New Song';
// de esta forma cambiamos el nombre en la desustruracion
const { audioVolume, song: anotherSong } = audioPlayer;

console.log(audioVolume + " y su son es " + anotherSong + " y el son nuevo es " + song);


export { };