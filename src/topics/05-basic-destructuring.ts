

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
const { audioVolume,
    // details : { author }, // no muy recomendable, ya que es muy facil perderse con esta sintaxis de desestructuracion anidada
    song: anotherSong
} = audioPlayer;

// desestructuramos el autor
const { details } = audioPlayer
const { author } = details;

console.log(audioVolume + " y su son es " + anotherSong + " y el son nuevo es " + song);
console.log(`El autor es ${author}`);


export { };