// ASYNC - AWAIT;
// Maneira mais legível de escrever promises;

const promessa = new Promise( function ( resolve, reject) {
    return reject ('error');
});

// Maneira com Async e Await;
async function Start() {
    try {
        const result = await promessa;
        console.log(result);
    } catch (e) {
        console.log(e);
    } finally {
        console.log('Rodar Sempre');
    }
}

// Maneira anterior;

/*  promessa
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
            console.log('Sempre irei executar');
        }); */
