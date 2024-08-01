// funcion tradicional
function addNumbers(a: number, b: number): number {
    return a + b;
}

// funciones de fecha/lambda
const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

// con parametros opcionales(?) y valores por defecto (=)
function multiply(firstnumber: number, secondNumber?: number, base: number = 2) {
    return firstnumber * base;
}


// const resulta: number = addNumbers(1, 2);
// const result: string = addNumbersArrow(1, 2);
// const multiplyResult: number = multiply(5);

// console.log({ resulta, result, multiplyResult });

interface Character {
    name: string;
    hp: number;
    // metodo que mostrar puntos de vida y retorna un string, bool, number, void, etc
    // showHp: () => string;
    showHp: () => void;
}

// Pasando objetos como parametro
const healCharacter = (character: Character, amount: number) => {

    character.hp += amount;


}

const strider: Character = {
    name: "Strider",
    hp: 50,
    showHp() {
        console.log(`puntos de vida ${this.hp}`);
    }
}

healCharacter(strider, 10);

strider.showHp();

export { };