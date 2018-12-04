function scroll() {
    const locations = ['articles', 'pricing', 'contact'];
    const scroll = document.querySelectorAll('.scroll');
    const overlay = document.getElementById('overlay');
    const list = document.querySelector('.page-nav-list');
    const menu = document.getElementById('menu');

        for(let i=0;i<scroll.length;i++ ){
            scroll[i].addEventListener('click', function (e) {
                overlay.classList.remove('open');
                list.classList.remove('page-nav-list-active');
                list.classList.add('page-nav-list');
                menu.classList.remove('active');
                e.preventDefault();
                document.getElementById(locations[i]).scrollIntoView({ behavior: 'smooth' });
            })
        }

}

export {scroll}