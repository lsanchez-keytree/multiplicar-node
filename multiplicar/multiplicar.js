const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    console.log('================'.rainbow);
    console.log(`Tabla de ${base}`.green);
    console.log('================'.rainbow);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
};

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let result = '';

        for (let i = 1; i <= limite; i++) {
            result += `${base} * ${i} = ${base * i}\n`;
        }

        const data = new Uint8Array(Buffer.from(result));

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`);
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla,
};
