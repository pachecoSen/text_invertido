"use strict"

const {resolve} = require('path');

const Main = require(resolve(__dirname, "./src/main"));

const main = new Main();

const cadena = process.argv.slice(2),
    help = ">> Sintaxis: \t app --input \"cadena a procesar\"\n";

console.log("..:::Invertir Texto:::..\n\n");
if(0 === cadena.length){
    console.log(`>> Sin información que procesar\n${help}`);

    return false;
}

const arg = cadena[0], text = cadena[1];
if('--input' !== arg){
    console.log(`>> Parámetro ${arg} es incorrecto\n${help}`);

    return false;
}

if(!text || 0 === text.trim().length){
    console.log(`>> Sin cadena que procesar\n${help}`);

    return false;
}

const cadenas = main.setText(text).process();
cadenas.forEach(cadena => console.log(`>> ${cadena}`));

console.log("\n>> Fin de procesamiento\n");