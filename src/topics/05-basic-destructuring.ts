

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


//------------------------- Desesctruturacion de arrreglos
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

console.log('Personaje 3:', dbz[2]);

const trunk: string = dbz[3] || 'No hay personaje';
console.log('Personaje 4 (no encontrado pero tiene valor por defecto):', trunk);

// para desestructurar un arreglo, lo hacemos usando los corchetes
const [p1, p2, p3]: string[] = dbz;
console.log('P1 es:', p1);

// si necesitamos usar el valor q esta en otra psoicion, debemos usar o dejar su espacio usnaod las comas y si ese valor no existe, le podemos colcoar un defaul
const [, , , p4DF = 'Not Found']: string[] = dbz;
console.log('default:', p4DF);




export { };