// Promises com Fetch;
// O fetch é um encadeiamento de promessas;

fetch('https://api.github.com/users/maykbrito')
.then( response => response.json())
.then( data => fetch(data.repos_url))
.then( res => res.json()
.then( d => console.log))
.catch( err => console.log(err))
