const URL = 'https://api.github.com/';
const USER_PER_PAGE = 5;
export class Api {
    async loadUsers(value,page) {
        return await fetch(`${URL}search/repositories?q=${value}&per_page=${USER_PER_PAGE}&page=&${page}`)
    }

}