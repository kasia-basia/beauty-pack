class HideTitles {
    constructor(){
        this.articleBar = document.querySelectorAll('.article-box');
        this.addEffect();
    }

    addEffect(){
        this.articleBar.forEach(function (e) {
            var textBar = document.querySelectorAll('.article-box-bar');

            e.addEventListener('mouseenter', function (element) {
                var bar = e.querySelector('.article-box-bar');
                bar.style.bottom = '-100%';
            });

            e.addEventListener('mouseleave', function (element) {
                var bar = e.querySelector('.article-box-bar');
                bar.style.bottom = '20px';
            })

        });
    }


}

export { HideTitles }