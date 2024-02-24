const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

function find() {
  const result = myArray.find(numero => numero > 5);
  alert(`Resultado de FIND: ${result}`);
}

function some() {
  const result = myArray.some(numero => numero > 2);
  alert(`Resultado de SOME: ${result}`);
}

function every() {
  const result = myArray.every(numero => numero > 10);
  alert(`Resultado de EVERY: ${result}`);
}

function includes() {
  const result = myArray.includes(3);
  alert(`Resultado de INCLUDES: ${result}`);
}

function map() {
  const result = myArray.map(element => element * 10);
  alert(`Resultado de MAP: [${result.join(', ')}]`);
}

function filter() {
  const result = myArray.filter(element => element > 5);
  alert(`Resultado de FILTER: [${result.join(', ')}]`);
}
