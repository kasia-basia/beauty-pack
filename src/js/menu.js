class Menu {
    constructor(){
        this.menu = document.getElementById('menu');
        this.list = document.querySelector('.page-nav-list');
        this.overlay = document.getElementById('overlay');
        this.menu.onclick = this.toggle.bind(this);
    }

    toggle(e){
        this.overlay.classList.toggle('open');
        this.list.classList.toggle('page-nav-list-active');
        this.list.classList.toggle('page-nav-list');
        e.currentTarget.classList.toggle('active')
    }
}

export {Menu}