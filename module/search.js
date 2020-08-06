
export class Search {
    setCurrentPage(pageNumber) {
        this.currentPage = pageNumber;
    }
    constructor(view,api) {
        this.api = api;
        this.view = view;
        this.view.searchInput.addEventListener('keyup', this.debounce(this.loadUsers.bind(this), 300));
        this.currentPage = 1;
    }


     loadUsers() {
        const searchValue = this.view.searchInput.value;
        if (searchValue) {
            this.api.loadUsers(searchValue,this.currentPage).then((res) => {
                if (res.ok) {
                    this.setCurrentPage(this.currentPage + 1);
                    res.json().then(res => {
                        res.items.forEach(user => this.view.createUser(user))
                    })
                } else {

                }
            })
        } else {
            this.clearUsers();
        }

    }

    usersRequest() {

    }

    clearUsers() {
        this.view.usersList.innerHTML = '';
    }

    debounce(func, wait, immediate) {
        let timeout;
        return function () {
            const context = this, args = arguments;
            const later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };
}