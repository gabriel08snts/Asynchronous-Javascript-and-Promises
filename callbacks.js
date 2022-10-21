// CALLBACKS CONCEITOS;

/* Antes de entender o conceito de Callback no JavaScript, primeiro precisamos entender que 
funções aceitam qualquer tipo de dado como argumento, então no JavaScript é possível passar 
qualquer tipo de dado em uma função. */

// Funções aceitam qualquer tipo de dado como argumento;
function imprimirDado(dado) {
    console.log(dado);
}

imprimirDado(1);
imprimirDado('Texto');
imprimirDado(true);
imprimirDado({ nome: 'Gabriel' });
imprimirDado([1, 2, 3]);

//Callback Function;
function imprimirDado(dado) {
	console.log('outras tarefas');
	console.log(dado());
}

imprimirDado(function () {
	return 'Olá Mundo';
})

/* Callback (chamar de volta) é uma função que é passada como argumento de outra função e 
depois de algum tempo ela é chamada de volta. */
