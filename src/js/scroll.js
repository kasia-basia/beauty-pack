function scroll() {
    const locations = ['articles', 'pricing', 'contact'];
    const scroll = document.querySelectorAll('.scroll');

        for(let i=0;i<scroll.length;i++ ){
            scroll[i].addEventListener('click', function (e) {
                e.preventDefault();
                document.getElementById(locations[i]).scrollIntoView({ behavior: 'smooth' });
            })
        }

}

export {scroll}