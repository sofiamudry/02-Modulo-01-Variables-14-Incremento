console.log('Incremento');

alert('Incremento');

/*
const base = prompt ('Ingrese el numero base');
const cantidad = prompt ('Ingrese una cantidad a ir incrementando');
const incremento01 = Number(base) + Number(cantidad);
const incremento02 = Number(base) + Number(cantidad) + Number(cantidad);
const incremento03 = Number(base) + Number(cantidad) + Number(cantidad) + Number(cantidad);
const incremento04 = Number(base) + Number(cantidad) + Number(cantidad) + Number(cantidad) + Number(cantidad);
const incremento05 = Number(base) + Number(cantidad) + Number(cantidad) + Number(cantidad) + Number(cantidad) + Number(cantidad);
*/


const base = prompt ('Ingrese el numero base');
const cantidad = prompt ('Ingrese una cantidad a ir incrementando');
const incremento01 = Number(base) + Number(cantidad);
const incremento02 = Number(base) + Number(cantidad)*2;
const incremento03 = Number(base) + Number(cantidad)*3;
const incremento04 = Number(base) + Number(cantidad)*4;
const incremento05 = Number(base) + Number(cantidad)*5;


alert(`Incremento 01) ${incremento01}`);
alert(`Incremento 02) ${incremento02}`);
alert(`Incremento 03) ${incremento03}`);
alert(`Incremento 04) ${incremento04}`);
alert(`Incremento 05) ${incremento05}`);