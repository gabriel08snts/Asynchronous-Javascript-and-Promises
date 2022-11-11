// Promises com Axios;
// Axios é uma biblioteca HTTP Client baseada em promessas para usar no browser e no node;
import axios from "axios";

axios
    .get('https://api.github.com/users/mykbrito')
    .then(response => axios.get(response.data.repos_url))
    .then(repos => console.log(respos.data))
    .catch( error => console.log(error));
