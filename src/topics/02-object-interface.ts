// arreglo de strings
const skills: string[] = ['bash', 'counter', 'healing'];

// interface: al transpilar  a js, no tiene ninguna representacion fiisca a js, esto queire deecir que sera un equivalente a 0 lineas de codigo en js
interface Character {
    name: string;
    hp: number;
    skills: string[];
    // para decir que es opcional lo hacemos con el ?
    hometown?: string
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['bash', 'counter'],
    hometown: ""
}

strider.hometown = 'Ecuador';

console.table(strider);

export { };