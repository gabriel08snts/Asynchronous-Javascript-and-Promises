// Promessa retorna com sucesso;

console.log('pedir uber');

const promessa1 = new Promise((resolve, reject) => {
	return resolve('carro chegou');
})

console.log('aguardando');

promessa1.then(result => console.log(result));

// Promessa é rejeitada e usamos o catch() para capturar o erro;

console.log('pedir uber');

const promessa2 = new Promise((resolve, reject) => {
	return reject('pedido negado!');
})

console.log('aguardando');

promessa2
	.then(result => console.log(result))
	.catch(erro => console.log(erro));

let aceitar = true;

console.log('pedir uber');

const promessa3 = new Promise((resolve, reject) => {
	if (aceitar) {
		return resolve('pedido aceito!');
	}

	return reject('pedido negado!');
})

console.log('aguardando');

promessa3
	.then(result => console.log(result))
	.catch(erro => console.log(erro))
	.finally(() => console.log('finalizada'));
