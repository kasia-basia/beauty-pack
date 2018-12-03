class Menu {
    constructor(){
        this.menu = document.getElementById('menu');
        this.list = document.querySelector('.page-nav-list');
        this.overlay = document.getElementById('overlay');
        // this.scroll = this.list.querySelectorAll('.x');

        this.menu.onclick = this.toggle.bind(this);
    }

    toggle(e){
        this.overlay.classList.toggle('open');
        this.list.classList.toggle('page-nav-list-active');
        this.list.classList.toggle('page-nav-list');

        // for (let i=0; i<this.scroll.length; i++){
        //     this.scroll[i].classList.toggle('scroll');
        //     scroll();
        // }

        e.currentTarget.classList.toggle('active')

    }
}

export {Menu}